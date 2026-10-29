import { useEffect, useState } from 'react';
import type { Toast, ToastContainerProps } from './types';
import { dismissToast, subscribe } from './store';
import { useToastTimers } from './useToastTimers';

export function ToastContainer({
  position = 'bottom-right',
  className,
}: ToastContainerProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    return subscribe(setToasts);
  }, []);

  useToastTimers(toasts);

  return (
    <div
      className={['rtn-container', `rtn-${position}`, className]
        .filter(Boolean)
        .join(' ')}
      aria-live="polite"
      aria-atomic="false"
    >
      {toasts.map((item) => (
        <div
          key={item.id}
          className={`rtn-toast rtn-${item.type}`}
          role={item.type === 'error' ? 'alert' : 'status'}
        >
          <div className="rtn-toast-content">
            {item.title && (
              <strong className="rtn-toast-title">{item.title}</strong>
            )}
            {item.description && (
              <div className="rtn-toast-description">
                {item.description}
              </div>
            )}
          </div>

          {item.closable !== false && (
            <button
              type="button"
              className="rtn-toast-close"
              aria-label="Close notification"
              onClick={() => dismissToast(item.id)}
            >
              ×
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
