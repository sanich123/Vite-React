import { UsersType } from 'src/utils/types/types';
import React, { useEffect } from 'react';
import setEscListener from 'src/utils/utils';
import styles from './modal.module.scss';

interface ModalProps {
  users: UsersType[];
  idUser: string;
  setIsShowMore: (arg: boolean) => void;
}

export default function Modal({ users, idUser, setIsShowMore }: ModalProps) {
  const [
    {
      email,
      address: { city, street, suite, zipcode },
      phone,
    },
  ] = users.filter(({ id }) => id === Number(idUser));
  const { overlay, modal } = styles;

  useEffect(() => {
    setEscListener(setIsShowMore);
  }, [setIsShowMore]);

  return (
    <>
      <section className={modal}>
        <div className="user__card card">
          <div className="card__email">{email}</div>
          <div className="card__address">
            <div className="card__address--city">{`City: ${city}`}</div>
            <div className="card__address--street">{`Street: ${street}`}</div>
            <div className="card__address--suite">{`Flat: ${suite}`}</div>
            <div className="card__address--zipcode">{`Zipcode: ${zipcode}`}</div>
            <div className="card__address--phone">{`Phone: ${phone}`}</div>
          </div>
          <button type="button" onClick={() => setIsShowMore(false)}>
            ⨉
          </button>
        </div>
      </section>
      <div className={overlay} onClick={() => setIsShowMore(false)}></div>
    </>
  );
}
