import { useCallback, useState } from 'react';
import * as Sentry from '@sentry/react';

type SetPersistedState<T> = T | ((x: T) => T);

type PersistOptions<T> = { key: string; value: T };

/**
 * Adds a key to the localStorage
 */
const persist = <T>({ key, value }: PersistOptions<T>) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    Sentry.captureException(error);
  }
};

type ReadOptions<T> = {
  key: string;
  fallback: T;
};

/**
 * Reads the value of the key in localStorage.
 * If the key is not found, it returns the fallback value and sets the value of that key to the fallback value in localStorage
 */
const read = <T>({ key, fallback }: ReadOptions<T>): T => {
  try {
    const value = localStorage.getItem(key);

    if (!value) {
      persist({ key, value: fallback });
      return fallback;
    }

    return JSON.parse(value) as T;
  } catch (error) {
    Sentry.captureException(error);
    return fallback;
  }
};

type UsePersistedStateResult<T> = [T, (setter: SetPersistedState<T>) => void];

type UsePersistedStateOptions<T> = {
  /** The key of the state in the local storage */
  key: string;

  /** The fallback value if the key isn't found */
  fallback: T | (() => T);
};

/**
 * A wrapper around useState hook that persists changes to localStorage
 * Just built for convenience to introduce minimal changes to already working code
 */
export const usePersistedState = <T>({
  key,
  fallback,
}: UsePersistedStateOptions<T>): UsePersistedStateResult<T> => {
  const getDefaultValue = () => {
    const fallbackValue = fallback instanceof Function ? fallback() : fallback;
    return read<T>({ key, fallback: fallbackValue }) as T;
  };

  const [state, setState] = useState<T>(getDefaultValue);

  const persistedSetState = useCallback(
    (maybeStateOrStateSetter: SetPersistedState<T>) => {
      if (maybeStateOrStateSetter instanceof Function) {
        setState((prevState) => {
          const newState = maybeStateOrStateSetter(prevState);
          persist({ key, value: newState });
          return newState;
        });
      } else {
        persist({ key, value: maybeStateOrStateSetter });
        setState(maybeStateOrStateSetter);
      }
    },
    []
  );

  return [state, persistedSetState];
};
