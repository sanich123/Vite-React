import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL_USERS } from '../const/const';

export const fetchUsers = createAsyncThunk('searchSlice/fetchUsers', async (search: string, { rejectWithValue }) => {
  try {
    const response = await fetch(`${URL_USERS}?q=${search}`);
    if (!response.ok) {
      throw new Error('Server error');
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
