import { api } from 'api/api';
import type { SignInUserPayload, SignInUserResponse, VerifyOTPCodePayload, VerifyOTPCodeResponse } from './auth.types';

export const signInUser = (payload: SignInUserPayload) => {
  return api.post<SignInUserResponse>('/auth/signin', payload).then((res) => res.data);
};

export const verifyOTPCode = (payload: VerifyOTPCodePayload) => {
  return api.post<VerifyOTPCodeResponse>('/auth/verify', payload).then((res) => res.data);
};
