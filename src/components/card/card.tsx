import React from 'react';
import { UsersType } from 'src/utils/types/types';

export default class Card extends React.Component<{ user: Omit<UsersType, 'id'> }> {
  render() {
    const {
      user: {
        name,
        username,
        email,
        address: {
          street,
          suite,
          city,
          zipcode,
          geo: { lat, lng },
        },
        phone,
        website,
        company: { name: companyName, catchPhrase, bs },
      },
    } = this.props;

    return (
      <>
        <div>{name}</div>
        <div>{username}</div>
        <div>{email}</div>
        <div>{street}</div>
        <div>{suite}</div>
        <div>{city}</div>
        <div>{zipcode}</div>
        <div>{lat}</div>
        <div>{lng}</div>
        <div>{phone}</div>
        <div>{website}</div>
        <div>{companyName}</div>
        <div>{catchPhrase}</div>
        <div>{bs}</div>
      </>
    );
  }
}
