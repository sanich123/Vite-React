import React, { useEffect, useState } from 'react';
import { Layout } from 'src/components/layout/layout';
import { UsersType } from 'src/utils/types/types';
import InputSearch from 'src/components/search/input-search';
import Loader from 'src/components/loader/loader';
import Card from 'src/components/card/card';
import { fetchUsers } from 'src/utils/async/async-functions';
import { Messages } from 'src/utils/const/const';
import '../../styles/entry.scss';
import './main.scss';
import Modal from 'src/components/modal/modal';

export default function Main() {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const [idUser, getIdUser] = useState('');

  useEffect(() => {
    fetchUsers(setUsers, '');
  }, []);

  return (
    <Layout>
      <InputSearch setIsLoading={setIsLoading} setUsers={setUsers} setError={setError} />
      {isLoading && <Loader />}
      {error && <h1>{Messages.didError}</h1>}
      {users.length === 0 && <h1>{Messages.didntFind}</h1>}
      {isShowMore && <Modal users={users} idUser={idUser} setIsShowMore={setIsShowMore} />}
      <section className="cards">{!isShowMore && users.map((user) => <Card key={user.id} user={user} setIsShowMore={setIsShowMore} getIdUser={getIdUser} />)}</section>
    </Layout>
  );
}
