import { Noop } from '../types';

// inspired by https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout

type Schedule = {
  timeoutId: NodeJS.Timeout | undefined;
  run: (a: { callback: Noop; after: number }) => void;
  cancel: Noop;
};

export const createScheduler = (): Schedule => ({
  timeoutId: undefined,
  run: function run({ callback, after }) {
    this.timeoutId = setTimeout(() => {
      callback();
      this.cancel();
    }, after);
  },
  cancel: function cancel() {
    if (this.timeoutId !== undefined) {
      clearTimeout(this.timeoutId);
    }
  },
});
