import React, { useEffect } from 'react';
import { Layout } from 'src/components/layout/layout';
import Modal from 'src/components/modal/modal';
import useGetUsers from 'src/utils/hooks/get-users';
import InputSearch from 'src/components/search/input-search';
import Loader from 'src/components/loader/loader';
import Card from 'src/components/card/card';
import { fetchUsers } from 'src/utils/async/async-functions';
import { Messages } from 'src/utils/const/const';
import '../../styles/entry.scss';
import './main.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { pushUsers } from 'src/redux/search-slice/search-slice';

export default function Main() {
  const { users, error, isLoading, isShowMore, idUser, setUsers, setError, setIsLoading, setIsShowMore, getIdUser } = useGetUsers();
  const { search } = useSelector(({ searchQuery }: RootState) => searchQuery);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUsers({ setUsers, searchQuery: search, setError });
  }, [setUsers, setError, search]);

  useEffect(() => {
    dispatch(pushUsers(users));
  }, [users, dispatch]);

  return (
    <Layout>
      <InputSearch setIsLoading={setIsLoading} setUsers={setUsers} setError={setError} />
      {isLoading && <Loader />}
      {error.message && <h1>{error.message}</h1>}
      {users.length === 0 && <h1>{Messages.didntFind}</h1>}
      {isShowMore && <Modal users={users} idUser={idUser} setIsShowMore={setIsShowMore} />}
      <section className="cards">{!isLoading && !isShowMore && users.map((user) => <Card key={user.id} user={user} setIsShowMore={setIsShowMore} getIdUser={getIdUser} />)}</section>
    </Layout>
  );
}
