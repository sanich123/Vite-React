import React, { createElement } from 'react';
import Header from 'src/components/header/header';
import { LocalStorageKeys } from 'src/utils/const/const';
import { applyToLocalStorage, getFromLocalStorage } from 'src/utils/local-storage';
import DateInputs from './dates/date-inputs';
import RadioInputs from './radio/radio-inputs';
import Selects from './selects/selects';
import TextInputs from './text-inputs/text-inputs';
import './forms.scss';
import CheckboxesInputs from './checkboxes/checkboxes';
import FileInput from './files/file-input';

export type FormDataValues = {
  [key: string]: FormDataEntryValue | string;
};

export default class Forms extends React.Component<
  {},
  { data: FormDataValues[]; disabled: boolean }
> {
  fileInput: React.RefObject<HTMLInputElement>;
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  constructor(props: {}) {
    super(props);
    this.state = { data: [], disabled: true };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
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
      if (this.fileInput.current) {
        const { files } = this.fileInput.current;
        if (files) {
          const file = files[0];
          const name = file.name;
          const objectUrl = URL.createObjectURL(file);
          obj['img'] = objectUrl;
          obj['imgName'] = name;
        }
      }
      await this.setState({ data: [...this.state.data, obj] });
      applyToLocalStorage(LocalStorageKeys.formData, this.state.data);
    }
  }

  handleChange(e: Event) {
    console.log(e);
  }

  componentDidMount() {
    const savedData = getFromLocalStorage(LocalStorageKeys.formData);
    if (savedData) {
      this.setState({ data: savedData });
    }
    this.nameInput.current?.addEventListener('input', ({ target }) => {
      if (target instanceof HTMLInputElement) {
        console.log(target.value);
      }
    });
    this.surnameInput.current?.addEventListener('input', ({ target }) => {
      if (target instanceof HTMLInputElement) {
        console.log(target.value);
      }
    });
  }

  render() {
    return (
      <>
        <Header />
        <form
          onSubmit={this.handleSubmit}
          method="post"
          encType="multipart/form-data"
          className="form"
        >
          <TextInputs nameInput={this.nameInput} surnameInput={this.surnameInput} />
          <DateInputs />
          <Selects />
          <RadioInputs />
          <CheckboxesInputs />
          <FileInput fileInput={this.fileInput} />

          <button type="submit" disabled={this.state.disabled}>
            Submit the data
          </button>
        </form>
        {this.state.data.length > 0 &&
          this.state.data.map(
            ({ name, surname, cities, zipcode, countries, sexuality, gender, img, imgName }, i) => (
              <div key={`${name}${surname}${i}`}>
                <img src={img.toString()} alt={`${imgName}`} />
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
