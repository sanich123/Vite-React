import React, { useEffect, useState } from 'react';
import { Layout } from 'src/components/layout/layout';
import Modal from 'src/components/modal/modal';
import InputSearch from 'src/components/search/input-search';
import Loader from 'src/components/loader/loader';
import Card from 'src/components/card/card';
import { Messages, Status } from 'src/utils/const/const';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks/hooks';
import { fetchUsers } from 'src/utils/async/async-functions';
import '../../styles/entry.scss';
import './main.scss';

export default function Main() {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const [idUser, getIdUser] = useState('');
  const { search, users, status, error } = useAppSelector(({ searchQuery }) => searchQuery);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers(search));
  }, [dispatch, search]);

  return (
    <Layout>
      <InputSearch />
      {status === Status.loading && <Loader />}
      {error && <h1>{`An error occured: ${error}`}</h1>}
      {users.length === 0 && <h1>{Messages.didntFind}</h1>}
      {isShowMore && <Modal users={users} idUser={idUser} setIsShowMore={setIsShowMore} />}
      <section className="cards">{status === Status.fulfilled && !isShowMore && users.map((user) => <Card key={user.id} user={user} setIsShowMore={setIsShowMore} getIdUser={getIdUser} />)}</section>
    </Layout>
  );
}
