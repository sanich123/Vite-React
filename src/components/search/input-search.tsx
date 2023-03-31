import React from 'react';
import { useForm } from 'react-hook-form';
import { fetchUsers } from 'src/utils/async/async-functions';
import { Messages } from 'src/utils/const/const';
import { FormDataValues } from 'src/utils/types/form-types';
import { UsersType } from 'src/utils/types/types';
import './input-search.scss';

type FormSearchProps = {
  setIsLoading: (arg: boolean) => void;
  setError: (arg: { [key: string]: string }) => void;
  setUsers: (arg: UsersType[]) => void;
};

export default function InputSearch({ setIsLoading, setError, setUsers }: FormSearchProps) {
  const { register, handleSubmit } = useForm();

  async function onSubmit({ search }: FormDataValues) {
    if (typeof search === 'string') {
      try {
        setIsLoading(true);
        await fetchUsers({ setUsers, searchQuery: search, setError });
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        if (err instanceof Error) {
          setError({ message: err.message });
        }
      }
    }
  }

  return (
    <form className="inputs-search-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="search-input" className="input-search-label">
        {Messages.searchLabel}
      </label>
      <input {...register('search')} type="search" id="search-input" className="input-search" placeholder={Messages.searchPlaceholder} />
      <button type="submit">Search</button>
    </form>
  );
}
