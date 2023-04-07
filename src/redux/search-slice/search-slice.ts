import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL_USERS } from 'src/utils/const/const';
import { UsersType } from 'src/utils/types/types';

export const fetchUsers = createAsyncThunk('searchSlice/fetchUsers', async (searchQuery) => {
  const response = await fetch(`${URL_USERS}?q=${searchQuery}`);
  const data = await response.json();
  return data;
});
export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    search: '',
    users: [] as UsersType[],
    status: 'idle' || 'loading' || 'resolved',
    error: null,
  },
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
    pushUsers: (state, action) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: {
    [fetchUsers.pending as unknown as string]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchUsers.fulfilled as unknown as string]: (state, action) => {
      state.status = 'resolved';
      state.users = action.payload;
    },
    [fetchUsers.rejected as unknown as string]: (state, action) => {},
  },
});

export const { changeSearch, pushUsers } = searchSlice.actions;
export default searchSlice.reducer;
