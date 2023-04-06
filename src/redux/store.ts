import { configureStore } from '@reduxjs/toolkit';
import changeSearchReducer from './search-slice/search-slice';
import saveDataFromForm from './form-slice/form-slice';

export const store = configureStore({
  reducer: {
    searchQuery: changeSearchReducer,
    formData: saveDataFromForm,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
