import { createSlice } from '@reduxjs/toolkit';
import { UsersType } from 'src/utils/types/types';

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    search: '',
    users: [] as UsersType[],
  },
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
    pushUsers: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { changeSearch, pushUsers } = searchSlice.actions;
export default searchSlice.reducer;
