import type { ReactNode } from 'react';

export type ToastType =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'loading'
  | 'default';

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToastOptions {
  type?: ToastType;
  title?: string;
  description?: ReactNode;
  duration?: number;
  closable?: boolean;
}

export interface Toast extends ToastOptions {
  id: string;
  type: ToastType;
}

export interface ToastContainerProps {
  position?: ToastPosition;
  className?: string;
}
