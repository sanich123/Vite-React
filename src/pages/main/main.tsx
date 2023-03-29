import React, { useEffect, useState } from 'react';
import { Layout } from 'src/components/layout/layout';
import { UsersType } from 'src/utils/types/types';
import Loader from 'src/components/loader/loader';
import Card from 'src/components/card/card';
import { fetchUsers } from 'src/utils/async/async-functions';
import { useForm } from 'react-hook-form';
import { FormDataValues } from 'src/utils/types/form-types';
import { Messages } from 'src/utils/const/const';
import '../../styles/entry.scss';
import './main.scss';

export default function Main() {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetchUsers(setUsers, '');
  }, []);

  async function onSubmit({ search }: FormDataValues) {
    try {
      setIsLoading(true);
      await fetchUsers(setUsers, search);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      setError(true);
    }
  }

  return (
    <Layout>
      <form className="inputs-search-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="search-input" className="input-search-label">
          {Messages.searchLabel}
        </label>
        <input {...register('search')} type="search" id="search-input" className="input-search" placeholder={Messages.searchPlaceholder} />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      {error && <h1>{Messages.didError}</h1>}
      {users.length === 0 && <h1>{Messages.didntFind}</h1>}
      {users.length > 0 && (
        <section className="cards">
          {users.map(({ id, ...rest }) => (
            <Card key={id} user={rest} />
          ))}
        </section>
      )}
    </Layout>
  );
}
