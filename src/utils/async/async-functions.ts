import { URL_USERS } from '../const/const';
import { UsersType } from '../types/types';

type FetchUsersProps = {
  setUsers: (arg: UsersType[]) => void;
  searchQuery: string;
  setError: (arg: { [key: string]: string }) => void;
};

export async function fetchUsers({ setUsers, searchQuery, setError }: FetchUsersProps): Promise<void> {
  try {
    const response = await fetch(`${URL_USERS}?q=${searchQuery}`);
    const apiUsers = await response.json();
    setUsers(apiUsers);
  } catch (err) {
    if (err instanceof Error) {
      setError({ message: err.message });
    }
  }
}
