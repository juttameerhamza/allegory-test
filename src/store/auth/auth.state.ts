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
  reducers: {
    decreaseStep: (state) => {
      state.step = state.step - 1;
    }
  },
  extraReducers(builder) {
    builder.addMatcher(authApiSlice.endpoints.signInUser.matchFulfilled, (state) => {
      state.step = state.step + 1;
    });
    builder.addMatcher(authApiSlice.endpoints.verifyOTPCode.matchFulfilled, (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.user = payload.user;
      state.step = state.step + 1;
    });
  }
});

export const { decreaseStep } = authSlice.actions;

export { authSlice };
