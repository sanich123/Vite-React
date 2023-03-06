import React from 'react';
import Header from 'src/components/header/header';

type FormDataType = {
  key: string | number;
  value: FormDataEntryValue;
};

interface DataType {
  data: { [key: string]: FormDataEntryValue }[];
}
export default class Forms extends React.Component<{}, DataType> {
  constructor(props: {}) {
    super(props);
    this.state = { data: [{}] };
  }

  render() {
    return (
      <>
        <Header />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const { target } = e;
            if (target instanceof HTMLFormElement) {
              const formData = new FormData(target);
              let obj: { [key: string]: FormDataEntryValue } = {};
              for (let [key, value] of formData) {
                obj[key] = value;
              }
              this.setState(({ data: [...this.state.data, obj] }));
              console.log(this.state.data);
            }
          }}
          method="post"
          encType="multipart/form-data"
        >
          <label htmlFor="input-name">Name</label>
          <input type="text" name="name" id="input-name" required defaultValue={'Vladimir'} />
          <label htmlFor="input-surname">Surname</label>
          <input type="text" name="surname" id="input-surname" required defaultValue={'Putin'} />
          <label htmlFor="input-zipcode">Zipcode</label>
          <input type="text" name="zipcode" id="input-zipcode" defaultValue={'Kremlin'} />
          <label htmlFor="input-birthday">Birthday</label>
          <input type="date" name="birthday" id="input-birthday" />
          <label htmlFor="input-select-countries">Delivery</label>
          <select name="countries" id="input-select-countries" defaultValue={'Russia'} required>
            <option value="Russia">Russia</option>
            <option value="China">China</option>
            <option value="USA">USA</option>
          </select>
          <select name="cities" id="input-select-cities" defaultValue={'Moscow'} required>
            <option value="Moscow">Moscow</option>
            <option value="Toronto">Toronto</option>
            <option value="Samara">Samara</option>
          </select>
          <label htmlFor="radio-homosexual">I'm homosexual</label>
          <input type="radio" name="sexuality" id="radio-homosexual" defaultChecked />
          <label htmlFor="radio-lesbian">I'm lesbian</label>
          <input type="radio" name="sexuality" id="radio-lesbian" />
          <label htmlFor="radio-hetero">I'm fucking hetero</label>
          <input type="radio" name="sexuality" id="radio-hetero" />
          <label htmlFor="radio-male">I'm male</label>
          <input type="radio" name="gender" id="radio-female" />
          <label htmlFor="radio-female">I'm female</label>
          <input type="radio" name="gender" id="radio-female" defaultChecked />
          <input type="checkbox" name="subscribe-email" id="checkbox-subscribe-email" />
          <label htmlFor="checkbox-subscribe-email">Send me emails</label>
          <input type="checkbox" name="subscribe-sms" id="checkbox-subscribe-sms" defaultChecked />
          <label htmlFor="checkbox-subscribe-sms">Send me sms</label>
          <label htmlFor="input-file">Send your photo</label>
          <input type="file" id="input-file" accept="image/png, image/jpeg" />
          <button type="submit">Submit the data</button>
        </form>
      </>
    );
  }
}
