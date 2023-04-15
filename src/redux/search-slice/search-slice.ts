import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'src/utils/const/const';
import { UsersType } from 'src/utils/types/types';
import { fetchUsers } from 'src/utils/async/async-functions';

export const searchSliceInitialState = {
  search: '',
  users: [] as UsersType[],
  status: 'idle',
  error: '',
};

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: searchSliceInitialState,
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = Status.loading;
      state.error = '';
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = Status.fulfilled;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = Status.rejected;
      state.error = action.payload as string;
    });
  },
});

export const { changeSearch } = searchSlice.actions;
export default searchSlice.reducer;
