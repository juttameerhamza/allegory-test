import { createSlice } from '@reduxjs/toolkit';
import { authApiSlice } from './auth.api';
import { AuthState } from './auth.types';

const initialState: AuthState = {
  user: null,
  accessToken: null,
  step: 1
};

const reducerName = 'auth';

const authSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(authApiSlice.endpoints.signInUser.matchFulfilled, (state) => {
      state.step = state.step + 1;
    });
  }
});

export { authSlice };
