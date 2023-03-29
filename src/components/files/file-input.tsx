import React from 'react';
import { InputRegisterType } from 'src/utils/types/form-types';

export default function FileInput({ register, errors }: InputRegisterType) {
  return (
    <div className="input__wrapper input-file">
      <label htmlFor="input-file">Send your photo</label>
      <input {...register('img', { required: true })} type="file" id="input-file" accept="image/png, image/jpeg, image/jpg" name="img" className="input__file" />
      {errors['img'] && <span className="errors-span">This field is required</span>}
    </div>
  );
}
