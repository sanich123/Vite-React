import React, { useEffect, useState } from 'react';
import { Layout } from 'src/components/layout/layout';
import { UsersType } from 'src/utils/types/types';
import InputSearch from 'src/components/search/input-search';
import Loader from 'src/components/loader/loader';
import Card from 'src/components/card/card';
import { LocalStorageKeys } from 'src/utils/const/const';
import { applyToLocalStorage, getFromLocalStorage } from 'src/utils/local-storage';
import '../../styles/entry.scss';
import './main.scss';
import { fetchUsers } from 'src/utils/async/async-functions';

export default function Main() {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchUsers(setUsers);
    if (getFromLocalStorage(LocalStorageKeys.searchValue).length > 0) {
      setSearchQuery(getFromLocalStorage(LocalStorageKeys.searchValue));
    }
  }, []);

  return (
    <Layout>
      <InputSearch
        handleChange={({ target: { value } }) => {
          setSearchQuery(value);
          applyToLocalStorage(LocalStorageKeys.searchValue, value);
        }}
        searchQuery={searchQuery}
      />
      {users.length === 0 && <Loader />}
      {users.length > 0 && <section className="cards">{users.map(({ id, ...rest }) => JSON.stringify(rest).includes(searchQuery) && <Card key={id} user={rest} />)}</section>}
    </Layout>
  );
}
