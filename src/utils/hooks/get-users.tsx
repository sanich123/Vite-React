import { useState } from 'react';
import { UsersType } from '../types/types';

export default function useGetUsers() {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [error, setError] = useState<{ [key: string]: string }>({ message: '' });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const [idUser, getIdUser] = useState('');

  return {
    users,
    error,
    isLoading,
    isShowMore,
    idUser,
    setUsers,
    setError,
    setIsLoading,
    setIsShowMore,
    getIdUser,
  };
}
