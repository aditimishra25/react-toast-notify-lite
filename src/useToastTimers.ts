import { useEffect } from 'react';
import type { Toast } from './types';
import { dismissToast } from './store';

export function useToastTimers(toasts: Toast[]) {
  useEffect(() => {
    const timers = toasts
      .filter((item) => item.type !== 'loading')
      .map((item) =>
        window.setTimeout(
          () => dismissToast(item.id),
          item.duration ?? 4000,
        ),
      );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [toasts]);
}
