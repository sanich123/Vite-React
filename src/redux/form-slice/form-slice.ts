import { createSlice } from '@reduxjs/toolkit';
import { FieldValues } from 'react-hook-form';

export const formSlice = createSlice({
  name: 'formSlice',
  initialState: {
    formData: [] as FieldValues[],
  },
  reducers: {
    pushData: (state, action) => {
      state.formData.push(action.payload);
    },
  },
});

export const { pushData } = formSlice.actions;
export default formSlice.reducer;
