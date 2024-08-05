import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  isApiError,
  signInUser,
  SignInUserPayload,
  SignInUserResponse,
  verifyOTPCode,
  VerifyOTPCodePayload,
  VerifyOTPCodeResponse
} from 'api';

const authApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    signInUser: builder.mutation<SignInUserResponse, SignInUserPayload>({
      queryFn: async (payload) => {
        return signInUser(payload)
          .then((data) => {
            return {
              data
            };
          })
          .catch((error) => {
            if (isApiError(error)) {
              return {
                error: error.response?.data
              };
            }

            return {
              error
            };
          });
      }
    }),
    verifyOTPCode: builder.mutation<VerifyOTPCodeResponse, VerifyOTPCodePayload>({
      queryFn: async (payload) => {
        return verifyOTPCode(payload)
          .then((data) => {
            return {
              data
            };
          })
          .catch((error) => {
            if (isApiError(error)) {
              return {
                error: error.response?.data
              };
            }

            return {
              error
            };
          });
      }
    })
  })
});

export const { useSignInUserMutation, useVerifyOTPCodeMutation } = authApiSlice;

export { authApiSlice };
