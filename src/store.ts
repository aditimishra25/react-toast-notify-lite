import type { Toast, ToastOptions, ToastType } from './types';

type Listener = (toasts: Toast[]) => void;

let toasts: Toast[] = [];
const listeners = new Set<Listener>();
let nextId = 0;

function notify() {
  listeners.forEach((listener) => listener([...toasts]));
}

export function subscribe(listener: Listener) {
  listeners.add(listener);
  listener([...toasts]);

  return () => {
    listeners.delete(listener);
  };
}

export function getToasts() {
  return [...toasts];
}

export function toast(options: ToastOptions | string, type: ToastType = 'default') {
  const normalized: ToastOptions =
    typeof options === 'string' ? { title: options, type } : options;

  const id = `toast-${++nextId}`;
  const newToast: Toast = {
    ...normalized,
    id,
    type: normalized.type ?? type,
  };

  toasts = [...toasts, newToast];
  notify();

  return id;
}

export function updateToast(id: string, options: Partial<ToastOptions>) {
  toasts = toasts.map((item) =>
    item.id === id ? { ...item, ...options } : item,
  );

  notify();
}

export function dismissToast(id: string) {
  toasts = toasts.filter((item) => item.id !== id);
  notify();
}

export function dismissAllToasts() {
  toasts = [];
  notify();
}
