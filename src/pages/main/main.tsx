import React, { useState } from 'react';
import { Layout } from 'src/components/layout/layout';
import Modal from 'src/components/modal/modal';
import InputSearch from 'src/components/search/input-search';
import Loader from 'src/components/loader/loader';
import Card from 'src/components/card/card';
import { Messages } from 'src/utils/const/const';
import { useAppSelector } from 'src/redux/hooks/hooks';
import { useGetUsersQuery } from 'src/redux/jsonplaceholder-api/jsonplaceholder-api';
import { UsersType } from 'src/utils/types/types';
import '../../styles/entry.scss';
import './main.scss';

export default function Main() {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const [idUser, getIdUser] = useState('');
  const { search } = useAppSelector(({ searchQuery }) => searchQuery);
  const { data, error, isLoading, isSuccess } = useGetUsersQuery(search);

  return (
    <Layout>
      <InputSearch />
      {isLoading && <Loader />}
      {error && <h1>{`An error occured: ${error}`}</h1>}
      {isSuccess && data.length === 0 && <h1>{Messages.didntFind}</h1>}
      {isShowMore && <Modal users={data} idUser={idUser} setIsShowMore={setIsShowMore} />}
      <section className="cards">
        {data && !isShowMore && data.map((user: UsersType) => <Card key={user.id} user={user} setIsShowMore={setIsShowMore} getIdUser={getIdUser} />)}
      </section>
    </Layout>
  );
}
