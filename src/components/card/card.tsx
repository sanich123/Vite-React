/* eslint-disable camelcase */
import React from 'react';
import { UsersType } from 'src/utils/types/types';
import styles from './card.module.scss';

interface ItemCardProps {
  user: UsersType;
  setIsShowMore: (arg: boolean) => void;
  getIdUser: (arg: string) => void;
}

export default function ItemCard({ user, setIsShowMore, getIdUser }: ItemCardProps) {
  const { id, name, username } = user;
  const { card, card__name, card__username, show__moreBtn } = styles;
  return (
    <div className={`user__card ${card}`}>
      <div className={card__name}>{name}</div>
      <div className={card__username}>{username}</div>
      <button
        className={show__moreBtn}
        type="button"
        onClick={() => {
          setIsShowMore(true);
          getIdUser(id.toString());
        }}
      >
        Show more
      </button>
    </div>
  );
}
