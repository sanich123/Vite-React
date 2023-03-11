import React, { Component } from 'react';
import { UsersType } from 'src/utils/types/types';
import './card.scss';

export default class ItemCard extends Component<{ user: Omit<UsersType, 'id'> }> {
  render() {
    const {
      user: {
        name,
        username,
        email,
        address: { street, suite, city, zipcode },
        phone,
      },
    } = this.props;

    return (
      <>
        <div className="user__card card">
          <div className="card__name">{name}</div>
          <div className="card__username">{username}</div>
          <div className="card__email">{email}</div>
          <div className="card__address">
            <div className="card__address--city">{`City: ${city}`}</div>
            <div className="card__address--street">{`Street: ${street}`}</div>
            <div className="card__address--suite">{`Flat: ${suite}`}</div>

            <div className="card__address--zipcode">{`Zipcode: ${zipcode}`}</div>
          </div>
          <div className="card__phone">{`Phone: ${phone}`}</div>
        </div>
      </>
    );
  }
}
