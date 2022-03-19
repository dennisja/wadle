export type ToastType = 'success' | 'error' | 'info' | 'warning';

export enum ToastEvents {
  ADD_TOAST = 'addToast',
  REMOVE_TOAST = 'removeToast',
  INITIATE_TOAST_REMOVAL = 'initiateToastRemoval',
}

export type CreateToastPayload = {
  /** A list of messages to display in a toast */
  messages: readonly string[];

  /** The purpose of the toast */
  type: ToastType;

  /** The title of the toast. Defaults to undefined */
  title?: string;

  /** The duration for which the toast will be displayed in seconds. Defaults to 2 seconds */
  duration?: number;
};

export type ToastData = {
  id: string;
} & CreateToastPayload;
