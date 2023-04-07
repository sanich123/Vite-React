import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import changeSearchReducer from './search-slice/search-slice';
import saveDataFromForm from './form-slice/form-slice';

const rootReducer = combineReducers({
  searchQuery: changeSearchReducer,
  formData: saveDataFromForm,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
