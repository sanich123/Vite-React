import { UsersType } from 'src/utils/types/types';
import React, { useEffect } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import FocusLock from 'react-focus-lock';
import { setEscListener } from 'src/utils/utils';
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
  const { overlay, modal, closeBtn, card } = styles;

  useEffect(() => {
    setEscListener(setIsShowMore);
  }, [setIsShowMore]);

  return (
    <>
      <section className={modal}>
        <RemoveScroll>
          <FocusLock>
            <div className={card}>
              <div className="card__address">
                <div>{email}</div>
                <div className="card__address--city">{`City: ${city}`}</div>
                <div className="card__address--street">{`Street: ${street}`}</div>
                <div className="card__address--suite">{`Flat: ${suite}`}</div>
                <div className="card__address--zipcode">{`Zipcode: ${zipcode}`}</div>
                <div className="card__address--phone">{`Phone: ${phone}`}</div>
                <button type="button" className={closeBtn} onClick={() => setIsShowMore(false)}>
                  ⨉
                </button>
              </div>
            </div>
          </FocusLock>
        </RemoveScroll>
      </section>
      <div className={overlay} onClick={() => setIsShowMore(false)}></div>
    </>
  );
}
