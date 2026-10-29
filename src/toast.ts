import type { ToastOptions } from './types';
import {
  dismissAllToasts,
  dismissToast,
  toast as createToast,
  updateToast,
} from './store';

function createTypedToast(type: ToastOptions['type']) {
  return (options: ToastOptions | string) => {
    if (typeof options === 'string') {
      return createToast({ title: options, type });
    }

    return createToast({ ...options, type });
  };
}

export const toast = Object.assign(
  (options: ToastOptions | string) => createToast(options),
  {
    success: createTypedToast('success'),
    error: createTypedToast('error'),
    warning: createTypedToast('warning'),
    info: createTypedToast('info'),
    loading: createTypedToast('loading'),
    dismiss: dismissToast,
    dismissAll: dismissAllToasts,
    update: updateToast,
  },
);
