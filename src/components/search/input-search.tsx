import React from 'react';
import { useForm } from 'react-hook-form';
import { FormDataValues } from 'src/utils/types/form-types';
import { changeSearch } from 'src/redux/search-slice/search-slice';
import { Messages } from 'src/utils/const/const';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks/hooks';
import './input-search.scss';
import { fetchUsers } from 'src/utils/async/async-functions';

export default function InputSearch() {
  const { search: searchString } = useAppSelector(({ searchQuery }) => searchQuery);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      search: searchString,
    },
  });

  async function onSubmit({ search }: FormDataValues) {
    if (typeof search === 'string') {
      dispatch(changeSearch(getValues().search));
      dispatch(fetchUsers(search));
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
