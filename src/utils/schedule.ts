import { Noop } from '../types';

// inspired by https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout
// we put it behind a factory function here because we don't want it to be a singleton so as
// to prevent cancelling timeouts we don't have to cancel

type Schedule = {
  timeoutId: NodeJS.Timeout | undefined;
  run: (a: { callback: Noop; after: number }) => void;
  cancel: Noop;
};

const createScheduler = (): Schedule => ({
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

export { createScheduler };
