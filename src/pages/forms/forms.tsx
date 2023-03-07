import React from 'react';
import Header from 'src/components/header/header';
import { LocalStorageKeys } from 'src/utils/const/const';
import { applyToLocalStorage, getFromLocalStorage } from 'src/utils/local-storage';
import DateInputs from './dates/date-inputs';
import Selects from './selects/selects';
import TextInputs from './text-inputs/text-inputs';

export type FormDataValues = {
  [key: string]: FormDataEntryValue;
};

export default class Forms extends React.Component<{}, { data: FormDataValues[] }> {
  constructor(props: {}) {
    super(props);
    this.state = { data: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { target } = e;
    if (target instanceof HTMLFormElement) {
      const formData = new FormData(target);
      const obj: FormDataValues = {};
      for (let [key, value] of formData) {
        obj[key] = value;
      }
      await this.setState({ data: [...this.state.data, obj] });
      applyToLocalStorage(LocalStorageKeys.formData, this.state.data);
      console.log(this.state.data);
    }
  }

  componentDidMount() {
    const savedData = getFromLocalStorage(LocalStorageKeys.formData);
    if (savedData) {
      this.setState({ data: savedData });
    }
  }

  render() {
    return (
      <>
        <Header />
        <form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
          <TextInputs />
          <DateInputs/>
          <Selects />
          <label htmlFor="radio-homosexual">I'm homosexual</label>
          <input
            type="radio"
            name="sexuality"
            id="radio-homosexual"
            value="homosexual"
            defaultChecked
          />
          <label htmlFor="radio-lesbian">I'm lesbian</label>
          <input type="radio" name="sexuality" id="radio-lesbian" value="lesbian" />
          <label htmlFor="radio-hetero">I'm fucking hetero</label>
          <input type="radio" name="sexuality" id="radio-hetero" value="hetero" />
          <label htmlFor="radio-male">I'm male</label>
          <input type="radio" name="gender" id="radio-female" value="male" />
          <label htmlFor="radio-female">I'm female</label>
          <input type="radio" name="gender" id="radio-female" value="female" defaultChecked />

          <input type="checkbox" name="subscribe-email" id="checkbox-subscribe-email" />
          <label htmlFor="checkbox-subscribe-email">Send me emails</label>
          <input type="checkbox" name="subscribe-sms" id="checkbox-subscribe-sms" defaultChecked />
          <label htmlFor="checkbox-subscribe-sms">Send me sms</label>
          <label htmlFor="input-file">Send your photo</label>
          <input type="file" id="input-file" accept="image/png, image/jpeg" />
          <button type="submit">Submit the data</button>
        </form>
        {this.state.data.length > 0 &&
          this.state.data.map(
            ({ name, surname, cities, zipcode, countries, sexuality, gender }, i) => (
              <div key={`${name}${surname}${i}`}>
                <div>{`${surname}`}</div>
                <div>{`${cities}`}</div>
                <div>{`${countries}`}</div>
                <div>{`${zipcode}`}</div>
                <div>{`${sexuality}`}</div>
                <div>{`${gender}`}</div>
              </div>
            )
          )}
      </>
    );
  }
}
