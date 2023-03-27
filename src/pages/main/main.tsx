import React, { ChangeEvent, useEffect, useState } from 'react';
import { Layout } from 'src/components/layout/layout';
import { UsersType } from 'src/utils/types/types';
import InputSearch from 'src/components/search/input-search';
import Loader from 'src/components/loader/loader';
import Card from 'src/components/card/card';
import { LocalStorageKeys, URL_USERS } from 'src/utils/const/const';
import { applyToLocalStorage, getFromLocalStorage } from 'src/utils/local-storage';
import '../../styles/entry.scss';
import './main.scss';

export default function Main() {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    (async function fetchUsers() {
      const response = await fetch(URL_USERS);
      const apiUsers = await response.json();
      setUsers(apiUsers);
    })();
    if (getFromLocalStorage(LocalStorageKeys.searchValue).length > 0) {
      setSearchQuery(getFromLocalStorage(LocalStorageKeys.searchValue));
    }
  }, []);

  function handleChange({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    setSearchQuery(value);
    applyToLocalStorage(LocalStorageKeys.searchValue, value);
  }
  return (
    <Layout>
      <InputSearch handleChange={handleChange} searchQuery={searchQuery} />
      {users.length === 0 && <Loader />}
      {users.length > 0 && (
        <section className="cards">
          {users.map(
            ({ id, ...rest }) =>
              JSON.stringify(rest).includes(searchQuery) && <Card key={id} user={rest} />
          )}
        </section>
      )}
    </Layout>
  );
}
