import React, { useState } from 'react';
import './forms.scss';
import { useForm, FieldValues } from 'react-hook-form';
import TextInputs from 'src/components/text-inputs/text-inputs';
import DateInputs from 'src/components/dates/date-inputs';
import Selects from 'src/components/selects/selects';
import FileInput from 'src/components/files/file-input';
import RadioInputs from 'src/components/radio/radio-inputs';
import CheckboxesInputs from 'src/components/checkboxes/checkboxes';
import Cards from 'src/components/cards/cards';
import { Layout } from 'src/components/layout/layout';

export default function Forms() {
  const { register, handleSubmit } = useForm();
  const [success, setSuccessSending] = useState(false);
  const [formData, setFormData] = useState<FieldValues[]>([]);

  function onSubmit(data: FieldValues) {
    setFormData([...formData, data]);
    setSuccessSending(true);
    setTimeout(() => setSuccessSending(false), 3000);
  }

  return (
    <Layout>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <TextInputs register={register} />
        <DateInputs register={register} />
        <Selects register={register} />
        <FileInput register={register} />
        <RadioInputs register={register} />
        <CheckboxesInputs register={register} />
        <button type="submit" className="submit-btn">
          Submit
        </button>
        {success && (
          <div className="success-message">
            Поздравляем вас, отправка формы произошла весьма успешно
          </div>
        )}

        {formData.length > 0 && <Cards formData={formData} />}
      </form>
    </Layout>
  );
}
