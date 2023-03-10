import React, { Component } from 'react';
import { FormDataValues } from '../types/form-types';
import './cards.scss';

export default class Cards extends Component<{ data: FormDataValues[] }> {
  render() {
    return (
      <section className="cards">
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
            <div key={`${name}${surname}${i}`} className="cards__item item">
              <img src={img.toString()} alt={`${imgName}`} width="80px" height="80px" />
              <div className="item__surname">
                <span className="item__text">{`My family: ${surname}`}</span>
              </div>
              <div className="item__name">
                <span className="item__text">{`My name: ${name}`}</span>
              </div>
              <div className="item__zipcode">
                <span className="item__text">{`My zipcode: ${zipcode}`}</span>
              </div>
              <div className="item__birthday">
                <span className="item__text">{`My birthday: ${birthday}`}</span>
              </div>
              <div className="item__delivery">
                <span className="item__text">{`My delivery: ${delivery}`}</span>
              </div>
              <div className="item__time">
                <span className="item__text">{`My delivery time: ${time}`}</span>
              </div>
              <div className="item__city">
                <span className="item__text">{`My city: ${city}`}</span>
              </div>
              <div className="item__country">
                <span className="item__text">{`My country: ${country}`}</span>
              </div>
              <div className="item__sexuality">
                <span className="item__text">{`I'm :${sexuality}`}</span>
              </div>
              <div className="item__gender">
                <span className="item__text">{`My gender is: ${gender}`}</span>
              </div>
              <div className="item__email">
                <span className="item__text">{`Send me emails: ${
                  subscribeEmail === 'on' ? 'yes' : 'no'
                }`}</span>
              </div>
              <div className="item__sms">
                <span className="item__text">{`Send me sms: ${
                  subscribeSms === 'on' ? 'yes' : 'no'
                }`}</span>
              </div>
            </div>
          )
        )}
      </section>
    );
  }
}
