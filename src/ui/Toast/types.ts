type ToastType = 'success' | 'error' | 'info' | 'warning';

enum ToastEvents {
  ADD_TOAST = 'addToast',
  REMOVE_TOAST = 'removeToast',
  INITIATE_TOAST_REMOVAL = 'initiateToastRemoval',
}

type CreateToastPayload = {
  /** A list of messages to display in a toast */
  messages: readonly string[];

  /** The purpose of the toast */
  type: ToastType;

  /** The title of the toast. Defaults to undefined */
  title?: string;

  /** The duration for which the toast will be displayed in seconds. Defaults to 2 seconds */
  duration?: number;
};

type ToastData = {
  id: string;
} & CreateToastPayload;

export { ToastEvents };
export type { ToastType, CreateToastPayload, ToastData };
