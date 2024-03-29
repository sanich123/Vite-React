import React, { useEffect, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import TextInputs from 'src/components/text-inputs/text-inputs';
import DateInputs from 'src/components/dates/date-inputs';
import Selects from 'src/components/selects/selects';
import FileInput from 'src/components/files/file-input';
import RadioInputs from 'src/components/radio/radio-inputs';
import CheckboxesInputs from 'src/components/checkboxes/checkboxes';
import Header from 'src/components/header/header';
import Cards from 'src/components/cards/cards';
import { INITIAL_STATE, Messages } from 'src/utils/const/const';
import './forms.scss';

export default function Forms() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm();
  const [success, setSuccessSending] = useState(false);
  const [formData, setFormData] = useState<FieldValues[]>([]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(INITIAL_STATE);
    }
  }, [isSubmitSuccessful, reset]);

  function onSubmit(data: FieldValues) {
    const { img } = data;
    const stringUrl = URL.createObjectURL(img[0]);
    const imgAlt = img[0].name;
    data.img = stringUrl;
    data.imgAlt = imgAlt;
    setFormData([...formData, data]);
    setSuccessSending(true);
    setTimeout(() => setSuccessSending(false), 2000);
  }

  return (
    <>
      <Header />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <TextInputs register={register} errors={errors} />
        <DateInputs register={register} errors={errors} />
        <Selects register={register} errors={errors} />
        <FileInput register={register} errors={errors} />
        <RadioInputs register={register} errors={errors} />
        <CheckboxesInputs register={register} />
        <button type="submit" className="submit-btn">
          Submit
        </button>
        {success && <div className="success-message">{Messages.successSent}</div>}
        {formData.length > 0 && <Cards formData={formData} />}
      </form>
    </>
  );
}
