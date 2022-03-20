import { useEffect, useState } from 'react';
import { Noop } from '../../types';
import { createScheduler } from '../../utils/schedule';
import uniqueId from '../../utils/uniqueId';
import { DEFAULT_TOAST_TIMER, TOAST_TRANSITION_DURATION } from './constants';
import { createEmitter } from './createEmitter';
import type { CreateToastPayload, ToastData } from './types';
import { ToastEvents } from './types';

const toastsEmitter = createEmitter();

const defaultToasts: readonly ToastData[] = [];

const removeToast = (id: string): void => {
  toastsEmitter.emit(ToastEvents.REMOVE_TOAST, id);
};

const initiateToastRemoval = (id: string): void => {
  toastsEmitter.emit(ToastEvents.INITIATE_TOAST_REMOVAL, id);
};

type ToastRemoveHandler = (id: string) => void;
const onToastRemovalInitiation = (callback: ToastRemoveHandler) =>
  toastsEmitter.register<ToastEvents, ToastRemoveHandler>(
    ToastEvents.INITIATE_TOAST_REMOVAL,
    callback
  );

const createToastRemoveHandler =
  (id: string): Noop =>
  () => {
    // notify about removal initiation such that any other removal method doesn't work
    // e.g if the user has pressed the close button and its already time up for the toast
    // to render, closing it is in progress so we don't want to do anything
    initiateToastRemoval(id);
    const scheduler = createScheduler();

    // we don't want to immediately remove the toast, we just want to remove it after the transition duration has passed
    scheduler.run({
      callback: () => {
        removeToast(id);
      },
      after: TOAST_TRANSITION_DURATION,
    });
  };

type CreateToastResult = { toast: ToastData; remove: ToastRemoveHandler };

const createToast = ({
  duration = DEFAULT_TOAST_TIMER,
  ...data
}: CreateToastPayload): CreateToastResult => {
  const newToast: ToastData = { id: uniqueId('toast-'), ...data, duration };
  toastsEmitter.emit(ToastEvents.ADD_TOAST, newToast);
  return { toast: newToast, remove: () => removeToast(newToast.id) };
};

type ToastsMangerResult = {
  toasts: readonly ToastData[];
};

const useToastsManager = (): ToastsMangerResult => {
  const [toasts, setToasts] = useState<readonly ToastData[]>(defaultToasts);

  useEffect(() => {
    const deregister = toastsEmitter.register<
      ToastEvents,
      (data: ToastData) => void
    >(ToastEvents.ADD_TOAST, (newToast) => {
      setToasts((prev) => [...prev, newToast]);
    });

    return deregister;
  }, []);

  useEffect(() => {
    const deregister = toastsEmitter.register<ToastEvents, ToastRemoveHandler>(
      ToastEvents.REMOVE_TOAST,
      (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }
    );

    return deregister;
  }, []);

  return { toasts };
};

export default useToastsManager;
export { createToast, createToastRemoveHandler, onToastRemovalInitiation };
