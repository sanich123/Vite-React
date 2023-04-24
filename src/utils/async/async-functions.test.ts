import { expect, it, vi } from 'vitest';
import { fetchUsers } from './async-functions';

it('should correctly handle async responses', async () => {
  const setUsers = vi.fn();
  const setError = vi.fn();
  await fetchUsers({ setUsers, searchQuery: 'превед', setError });
  expect(setUsers).toHaveBeenCalledOnce();
  await fetchUsers({ setUsers, searchQuery: 'errorPath', setError });
  expect(setError).toHaveBeenCalledOnce();
});
