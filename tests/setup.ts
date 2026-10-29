import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { vi } from 'vitest';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
