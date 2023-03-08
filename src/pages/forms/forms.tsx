import React, { RefObject, createRef, FormEvent } from 'react';
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
import Cards from './cards/cards';
import { INITIAL_STATE } from 'src/utils/const/texts';

export type FormDataValues = {
  [key: string]: FormDataEntryValue | string;
};

export type FormState = {
  data: FormDataValues[];
  disabled: boolean;
  success: boolean;
  inputsState: FormDataValues;
};

export default class Forms extends React.Component<{}, FormState> {
  fileInput: RefObject<HTMLInputElement>;
  nameInput: RefObject<HTMLInputElement>;
  surnameInput: RefObject<HTMLInputElement>;
  zipcodeInput: RefObject<HTMLInputElement>;
  birthdayInput: RefObject<HTMLInputElement>;
  deliveryInput: RefObject<HTMLInputElement>;
  timeInput: RefObject<HTMLInputElement>;
  countryInput: RefObject<HTMLSelectElement>;
  cityInput: RefObject<HTMLSelectElement>;
  homosexualInput: RefObject<HTMLInputElement>;
  lesbianinput: RefObject<HTMLInputElement>;
  heteroInput: RefObject<HTMLInputElement>;
  maleInput: RefObject<HTMLInputElement>;
  femaleInput: RefObject<HTMLInputElement>;
  emailEnabledInput: RefObject<HTMLInputElement>;
  smsEnabledInput: RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      disabled: true,
      success: false,
      inputsState: INITIAL_STATE,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = createRef();
    this.nameInput = createRef();
    this.surnameInput = createRef();
    this.zipcodeInput = createRef();
    this.birthdayInput = createRef();
    this.deliveryInput = createRef();
    this.timeInput = createRef();
    this.countryInput = createRef();
    this.cityInput = createRef();
    this.homosexualInput = createRef();
    this.lesbianinput = createRef();
    this.heteroInput = createRef();
    this.maleInput = createRef();
    this.femaleInput = createRef();
    this.emailEnabledInput = createRef();
    this.smsEnabledInput = createRef();
  }

  async handleSubmit(e: FormEvent<HTMLFormElement>) {
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
      this.setState({success: true});
      setTimeout(() => this.setState({success: false}), 2000)
    }
  }

  componentDidMount() {
    const savedData = getFromLocalStorage(LocalStorageKeys.formData);
    if (savedData) {
      this.setState({ data: savedData });
    }
    [
      this.nameInput.current,
      this.surnameInput.current,
      this.zipcodeInput.current,
      this.birthdayInput.current,
      this.deliveryInput.current,
      this.timeInput.current,
      this.countryInput.current,
      this.cityInput.current,
      this.homosexualInput.current,
      this.lesbianinput.current,
      this.heteroInput.current,
      this.maleInput.current,
      this.femaleInput.current,
      this.fileInput.current,
      this.emailEnabledInput.current,
      this.smsEnabledInput.current,
    ].map((input) =>
      input?.addEventListener('change', ({ target }) => {
        if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement) {
          const { value, name } = target;
          if (name === 'subscribeEmail') {
            this.emailEnabledInput.current?.checked
              ? this.setState({ inputsState: { ...this.state.inputsState, [name]: 'on' } })
              : this.setState({
                  inputsState: { ...this.state.inputsState, [name]: 'off' },
                });
          } else if (name === 'subscribeSms') {
            this.smsEnabledInput.current?.checked
              ? this.setState({
                  inputsState: { ...this.state.inputsState, [name]: 'on' },
                })
              : this.setState({
                  inputsState: { ...this.state.inputsState, [name]: 'off' },
                });
          } else {
            this.setState({ inputsState: { ...this.state.inputsState, [name]: value } });
          }

          const values = Object.values(this.state.inputsState);
          if (values.every((value) => value)) {
            this.setState({ disabled: false });
          }
          console.log(this.state.inputsState);
        }
      })
    );
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
          <TextInputs
            inputs={{
              name: this.nameInput,
              surname: this.surnameInput,
              zipcode: this.zipcodeInput,
            }}
          />
          <DateInputs
            inputs={{
              birthday: this.birthdayInput,
              delivery: this.deliveryInput,
              time: this.timeInput,
            }}
          />
          <Selects countryInput={this.countryInput} cityInput={this.cityInput} />
          <RadioInputs
            inputs={{
              homosexual: this.homosexualInput,
              lesbian: this.lesbianinput,
              hetero: this.heteroInput,
              male: this.maleInput,
              female: this.femaleInput,
            }}
          />
          <CheckboxesInputs
            emailEnabledInput={this.emailEnabledInput}
            smsEnabledInput={this.smsEnabledInput}
          />
          <FileInput fileInput={this.fileInput} />
          <button type="submit" disabled={this.state.disabled}>
            Submit the data
          </button>
          {this.state.success && <div>Поздравляем вас, отправка формы произошла весьма успешно</div>}
        </form>
        {this.state.data.length > 0 && <Cards data={this.state.data} />}
      </>
    );
  }
}
