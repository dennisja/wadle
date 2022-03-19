// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...args: any[]) => any;
export const createEmitter = () => {
  const events: Record<string, Fn[]> = {};

  return {
    register<E extends string, H extends Fn>(event: E, handler: H) {
      if (!(event in events)) {
        events[event] = [];
      }
      events[event].push(handler);

      return () => {
        this.deregister(event, handler);
      };
    },
    emit<E extends string, D>(event: E, data: D) {
      if (!(event in events)) return;

      events[event].forEach((handler) => {
        handler(data);
      });
    },
    deregister<E extends string, H extends Fn>(event: E, handler: H) {
      if (!(event in events)) return;
      events[event] = events[event].filter((h) => h !== handler);
    },
  };
};
