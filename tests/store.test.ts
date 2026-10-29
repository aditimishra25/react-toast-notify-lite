import { beforeEach, describe, expect, it } from 'vitest';
import {
  dismissAllToasts,
  dismissToast,
  getToasts,
  toast,
} from '../src/store';

describe('toast store', () => {
  beforeEach(() => {
    dismissAllToasts();
  });

  it('creates a toast with a title', () => {
    const id = toast('Hello world');

    expect(getToasts()).toHaveLength(1);
    expect(getToasts()[0]).toMatchObject({
      id,
      title: 'Hello world',
      type: 'default',
    });
  });

  it('creates a toast with the requested type', () => {
    toast('Saved successfully', 'success');

    expect(getToasts()[0]).toMatchObject({
      title: 'Saved successfully',
      type: 'success',
    });
  });

  it('dismisses a toast by id', () => {
    const id = toast('Temporary message');

    dismissToast(id);

    expect(getToasts()).toHaveLength(0);
  });

  it('dismisses all toasts', () => {
    toast('First');
    toast('Second');

    dismissAllToasts();

    expect(getToasts()).toHaveLength(0);
  });
});
