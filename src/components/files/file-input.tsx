import React from 'react';
import { InputRegisterType } from 'src/utils/types/form-types';

export default function FileInput({ register }: InputRegisterType) {
  return (
    <div className="input__wrapper input-file">
      <label htmlFor="input-file">Send your photo</label>
      <input
        {...register('img')}
        type="file"
        id="input-file"
        accept="image/png, image/jpeg"
        name="img"
        className="input__file"
      />
    </div>
  );
}
