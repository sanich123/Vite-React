import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import changeSearchReducer from './search-slice/search-slice';
import saveDataFromForm from './form-slice/form-slice';
import { jsonPlaceholderApi } from './jsonplaceholder-api/jsonplaceholder-api';

const rootReducer = combineReducers({
  searchQuery: changeSearchReducer,
  formData: saveDataFromForm,
  [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
