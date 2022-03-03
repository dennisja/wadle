import { useCallback, useState } from 'react';
import { Noop } from '../types';

type UseToggleResult = [boolean, Noop, Noop, Noop];

const useToggle = (initialValue = false): UseToggleResult => {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  const on = useCallback(() => {
    setState(true);
  }, []);

  const off = useCallback(() => {
    setState(false);
  }, []);

  return [state, toggle, on, off];
};

export default useToggle;
