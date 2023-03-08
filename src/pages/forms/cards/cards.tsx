import React, { Component } from 'react';
import { FormDataValues } from '../forms';

export default class Cards extends Component<{ data: FormDataValues[] }> {
  render() {
    return (
      <>
        {this.props.data.map(
          (
            {
              name,
              surname,
              city,
              zipcode,
              country,
              sexuality,
              gender,
              img,
              imgName,
              birthday,
              delivery,
              time,
              subscribeEmail,
              subscribeSms,
            },
            i
          ) => (
            <div key={`${name}${surname}${i}`}>
              <img src={img.toString()} alt={`${imgName}`} />
              <div>{`My family: ${surname}`}</div>
              <div>{`My name: ${name}`}</div>
              <div>{`My zipcode: ${zipcode}`}</div>
              <div>{`My birthday: ${birthday}`}</div>
              <div>{`My delivery: ${delivery}`}</div>
              <div>{`My delivery time: ${time}`}</div>
              <div>{`My city: ${city}`}</div>
              <div>{`My country: ${country}`}</div>
              <div>{`I'm :${sexuality}`}</div>
              <div>{`My gender is: ${gender}`}</div>
              <div>{`Send me emails: ${subscribeEmail === 'on' ? 'yes' : 'no'}`}</div>
              <div>{`Send me sms: ${subscribeSms === 'on' ? 'yes' : 'no'}`}</div>
            </div>
          )
        )}
      </>
    );
  }
}
