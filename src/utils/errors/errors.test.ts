import { errorHandler } from './errors';
import { expect, it, vi } from 'vitest';

it('should correctly handle errors', () => {
  const setError = vi.fn();
  errorHandler({ err: new Error('some error'), stateErrorHandler: setError });
  expect(setError).toHaveBeenCalledOnce();
});
