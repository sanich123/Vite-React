/* eslint-disable arrow-body-style */
import React, { useEffect, useRef, useState } from 'react';
import { Layout } from 'src/components/layout/layout';
import { UsersType } from 'src/utils/types/types';
import InputSearch from 'src/components/search/input-search';
import Loader from 'src/components/loader/loader';
import Card from 'src/components/card/card';
import { LocalStorageKeys } from 'src/utils/const/const';
import '../../styles/entry.scss';
import './main.scss';
import { fetchUsers } from 'src/utils/async/async-functions';

export default function Main() {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem(LocalStorageKeys.searchValue) || '');
  const searchRef = useRef<string>(searchQuery);

  useEffect(() => {
    searchRef.current = searchQuery;
  }, [searchQuery]);

  useEffect(() => {
    fetchUsers(setUsers);
    window.addEventListener('beforeunload', () => localStorage.setItem(LocalStorageKeys.searchValue, searchRef.current), { once: true });
  }, []);

  return (
    <Layout>
      <InputSearch handleChange={({ target: { value } }) => setSearchQuery(value)} searchQuery={searchQuery} />
      {users.length === 0 && <Loader />}
      {users.length > 0 && <section className="cards">{users.map(({ id, ...rest }) => JSON.stringify(rest).includes(searchQuery) && <Card key={id} user={rest} />)}</section>}
    </Layout>
  );
}
