import { act } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { ToastContainer } from '../src/ToastContainer';
import { toast, dismissAllToasts } from '../src/store';

afterEach(() => {
  cleanup();
  dismissAllToasts();
});

describe('ToastContainer', () => {
  it('displays a toast title', async () => {
    render(<ToastContainer />);

    await act(async () => {
      await Promise.resolve();
    });

    act(() => {
      toast('Hello from the toast');
    });

    expect(screen.getByText('Hello from the toast')).toBeTruthy();
  });

  it('displays a toast description', async () => {
    render(<ToastContainer />);

    await act(async () => {
      await Promise.resolve();
    });

    act(() => {
      toast({
        title: 'Saved',
        description: 'Your changes were saved',
        type: 'success',
      });
    });

    expect(screen.getByText('Your changes were saved')).toBeTruthy();
  });

  it('closes a toast when the close button is clicked', async () => {
    render(<ToastContainer />);

    await act(async () => {
      await Promise.resolve();
    });

    act(() => {
      toast('Closable message');
    });

    fireEvent.click(
      screen.getByRole('button', { name: 'Close notification' }),
    );

    expect(screen.queryByText('Closable message')).toBeNull();
  });
});
