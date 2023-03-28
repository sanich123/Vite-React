import React from 'react';
import { FieldValues } from 'react-hook-form';
import './cards.scss';

export default function Cards({ formData }: { formData: FieldValues[] }) {
  const [{ img: urlImg }] = formData;
  const imgUrl = URL.createObjectURL(urlImg[0]);
  return (
    <section className="cards">
      {formData.map(
        ({
          name,
          surname,
          city,
          zipcode,
          country,
          sexuality,
          gender,
          birthday,
          delivery,
          time,
          subscribeEmail,
          subscribeSms,
        }) => (
          <div key={`${name}${surname}`} className="cards__item item">
            <img
              src={imgUrl}
              alt={`${urlImg[0].name}`}
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
