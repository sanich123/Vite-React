import React, { Component, RefObject, createRef, FormEvent } from 'react';
import Header from 'src/components/header/header';
import DateInputs from '../../components/dates/date-inputs';
import RadioInputs from '../../components/radio/radio-inputs';
import Selects from '../../components/selects/selects';
import TextInputs from '../../components/text-inputs/text-inputs';
import CheckboxesInputs from '../../components/checkboxes/checkboxes';
import FileInput from '../../components/files/file-input';
import Cards from '../../components/cards/cards';
import { LocalStorageKeys, InputKeys } from 'src/utils/const/const';
import { applyToLocalStorage, getFromLocalStorage } from 'src/utils/local-storage';
import { INITIAL_STATE } from 'src/utils/const/texts';
import { getValuesFromForm, resetInputs, validateInputsState } from './form-utils';
import { FormState } from '../../utils/types/form-types';
import './forms.scss';

export default class Forms extends Component<Record<string, never>, FormState> {
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

  constructor(props: Record<string, never>) {
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
      await this.setState((state) => ({ data: [...state.data, obj] }));
      applyToLocalStorage(LocalStorageKeys.formData, this.state.data);
      this.setState({ success: true });
      resetInputs(this.getInputs(), INITIAL_STATE);
      setTimeout(() => this.setState({ success: false }), 3000);
      this.setState({ disabled: true, inputsState: INITIAL_STATE });
    }
  }

  setCheckboxes(checkbox: RefObject<HTMLInputElement>, name: string) {
    if (checkbox.current) {
      if (checkbox.current.checked) {
        this.setState((state) => ({ inputsState: { ...state.inputsState, [name]: 'on' } }));
      } else {
        this.setState((state) => ({ inputsState: { ...state.inputsState, [name]: 'off' } }));
      }
    }
  }

  setListener(input: RefObject<HTMLInputElement | HTMLSelectElement>) {
    if (input.current) {
      return input.current.addEventListener('change', ({ target }) => {
        if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement) {
          const { value, name } = target;
          if (name === InputKeys.subscribeEmail || name === InputKeys.subscribeSms) {
            {
              this.setCheckboxes(this.getInputs()[name], name);
            }
          } else {
            this.setState((state) => ({ inputsState: { ...state.inputsState, [name]: value } }));
          }
          if (validateInputsState(this.state.inputsState)) {
            this.setState({ disabled: false });
          }
        }
      });
    }
  }

  componentDidMount() {
    const savedData = getFromLocalStorage(LocalStorageKeys.formData);
    if (savedData) {
      this.setState({ data: savedData });
    }
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
            <div className="success-message">
              Поздравляем вас, отправка формы произошла весьма успешно
            </div>
          )}
        </form>
        {this.state.data.length > 0 && <Cards data={this.state.data} />}
      </>
    );
  }
}
