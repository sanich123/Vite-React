import React from 'react';
import { useForm } from 'react-hook-form';
import { FetchUsersProps, fetchUsers } from 'src/utils/async/async-functions';
import { LocalStorageKeys, Messages } from 'src/utils/const/const';
import { errorHandler } from 'src/utils/errors/errors';
import { FormDataValues } from 'src/utils/types/form-types';
import { applyToLocalStorage, getFromLocalStorage } from 'src/utils/local-storage';
import './input-search.scss';

type FormSearchProps = {
  setIsLoading: (arg: boolean) => void;
};

export default function InputSearch({ setIsLoading, setError, setUsers }: Pick<FetchUsersProps, 'setError' | 'setUsers'> & FormSearchProps) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      search: getFromLocalStorage(LocalStorageKeys.searchValue),
    },
  });

  async function onSubmit({ search }: FormDataValues) {
    if (typeof search === 'string') {
      try {
        setIsLoading(true);
        await fetchUsers({ setUsers, searchQuery: search, setError });
        setIsLoading(false);
        applyToLocalStorage(LocalStorageKeys.searchValue, search);
      } catch (err) {
        setIsLoading(false);
        errorHandler({ err, stateErrorHandler: setError });
      }
    }
  }

  return (
    <form className="inputs-search-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="search-input" className="input-search-label">
        {Messages.searchLabel}
      </label>
      <input {...register('search')} type="search" id="search-input" className="input-search" placeholder={Messages.searchPlaceholder} />
    </form>
  );
}
