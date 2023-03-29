import { URL_USERS } from '../const/const';
import { UsersType } from '../types/types';

export async function fetchUsers(setUsers: (arg: UsersType[]) => void, searchQuery: FormDataEntryValue): Promise<void> {
  const response = await fetch(`${URL_USERS}?q=${searchQuery}`);
  const apiUsers = await response.json();
  setUsers(apiUsers);
}
