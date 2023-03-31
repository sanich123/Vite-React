import { URL_USERS } from '../const/const';
import { errorHandler } from '../errors/errors';
import { UsersType } from '../types/types';

export type FetchUsersProps = {
  setUsers: (arg: UsersType[]) => void;
  searchQuery: string;
  setError: (arg: { [key: string]: string }) => void;
};

export async function fetchUsers({ setUsers, searchQuery, setError }: FetchUsersProps): Promise<void> {
  try {
    const response = await fetch(`${URL_USERS}?q=${searchQuery}`);
    if (response.ok) {
      const apiUsers = await response.json();
      setUsers(apiUsers);
    } else {
      throw new Error('Some error occured');
    }
  } catch (err) {
    errorHandler({ err, stateErrorHandler: setError });
  }
}
