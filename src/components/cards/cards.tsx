import React, { Component } from 'react';
import { FormDataValues } from '../../utils/types/form-types';
import './cards.scss';

export default class Cards extends Component<{ data: FormDataValues[] }> {
  render() {
    return (
      <section className="cards">
        {this.props.data.map(
          ({
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
          }) => (
            <div key={`${name}${surname}`} className="cards__item item">
              <img
                src={img.toString()}
                alt={`${imgName}`}
                width="150px"
                height="150px"
                className="item__img"
              />
              <div className="item__surname">
                <span className="item__text">{`${name} ${surname}`}</span>
              </div>
              <div className="item__zipcode">
                <span className="item__text">{`Zipcode: ${zipcode}`}</span>
              </div>
              <div className="item__birthday">
                <span className="item__text">{`Was born at: ${birthday}`}</span>
              </div>
              <div className="item__delivery">
                <span className="item__text">{`Deliver before ${delivery}, at ${time} in ${city}, ${country}`}</span>
              </div>
              <div className="item__sexuality">
                <span className="item__text">{`I'm: ${gender} and ${sexuality}`}</span>
              </div>
              <div className="item__email">
                <span className="item__text">
                  {`Send me emails: ${subscribeEmail === 'on' ? 'yes' : 'no'}`}
                </span>
              </div>
              <div className="item__sms">
                <span className="item__text">
                  {`Send me sms: ${subscribeSms === 'on' ? 'yes' : 'no'}`}
                </span>
              </div>
            </div>
          )
        )}
      </section>
    );
  }
}