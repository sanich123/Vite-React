import React, { Component, RefObject, createRef, FormEvent } from 'react';
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
import { getValuesFromForm, resetInputs, validateInputsState } from './utils';
import { FormState } from './types/form-types';

export default class Forms extends Component<{}, FormState> {
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
    this.setCheckboxes = this.setCheckboxes.bind(this);
    this.setListener = this.setListener.bind(this);
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
  getInputs() {
    return {
      name: this.nameInput,
      surname: this.surnameInput,
      zipcode: this.zipcodeInput,
      birthday: this.birthdayInput,
      delivery: this.deliveryInput,
      time: this.timeInput,
      country: this.countryInput,
      city: this.cityInput,
      homosexual: this.homosexualInput,
      lesbian: this.lesbianinput,
      hetero: this.heteroInput,
      sexuality: this.heteroInput,
      male: this.maleInput,
      female: this.femaleInput,
      gender: this.maleInput,
      subscribeSms: this.smsEnabledInput,
      subscribeEmail: this.emailEnabledInput,
      img: this.fileInput,
    };
  }
  async handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { target } = e;
    if (target instanceof HTMLFormElement) {
      const obj = getValuesFromForm(target, this.fileInput);
      await this.setState({ data: [...this.state.data, obj] });
      applyToLocalStorage(LocalStorageKeys.formData, this.state.data);
      this.setState({ success: true });
      resetInputs(this.getInputs(), INITIAL_STATE);
      setTimeout(() => this.setState({ success: false }), 2000);
      this.setState({ disabled: true, inputsState: INITIAL_STATE });
    }
  }
  setCheckboxes(checkbox: RefObject<HTMLInputElement>, name: string) {
    if (checkbox.current) {
      checkbox.current.checked
        ? this.setState({ inputsState: { ...this.state.inputsState, [name]: 'on' } })
        : this.setState({ inputsState: { ...this.state.inputsState, [name]: 'off' } });
    }
  }
  setListener(input: RefObject<HTMLInputElement | HTMLSelectElement>) {
    if (input.current) {
      return input.current.addEventListener('change', ({ target }) => {
        if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement) {
          const { value, name } = target;
          if (name === 'subscribeEmail' || name === 'subscribeSms') this.setCheckboxes(this.getInputs()[name], name);
          else this.setState({ inputsState: { ...this.state.inputsState, [name]: value } });
          if (validateInputsState(this.state.inputsState)) this.setState({ disabled: false });
        }
      });
    }
  }
  componentDidMount() {
    const savedData = getFromLocalStorage(LocalStorageKeys.formData);
    if (savedData) this.setState({ data: savedData });
    Object.values(this.getInputs()).map((input) => this.setListener(input));
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
          <FileInput fileInput={this.fileInput} />
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
            disabled={this.state.disabled}
          />
          <button type="submit" disabled={this.state.disabled} className="submit-btn">
            Submit
          </button>
          {this.state.success && (
            <div>Поздравляем вас, отправка формы произошла весьма успешно</div>
          )}
        </form>
        {this.state.data.length > 0 && <Cards data={this.state.data} />}
      </>
    );
  }
}
