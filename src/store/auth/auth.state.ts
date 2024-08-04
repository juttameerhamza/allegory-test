import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './auth.types';

const initialState: AuthState = {
  user: null,
  accessToken: null
};

const reducerName = 'auth';

const authReducer = createSlice({
  name: reducerName,
  initialState,
  reducers: {}
});

export { authReducer };
