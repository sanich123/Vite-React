import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_USERS } from 'src/utils/const/const';

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL_USERS}`,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (search = '') => `?q=${search}`,
    }),
  }),
});

export const { useGetUsersQuery } = jsonPlaceholderApi;
