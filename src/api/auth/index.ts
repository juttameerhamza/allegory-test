import { api } from 'api/api';
import type { SignInUserPayload, SignInUserResponse } from './auth.types';

export const signInUser = (payload: SignInUserPayload) => {
  return api.post<SignInUserResponse>('/auth/signin', payload).then((res) => res.data);
};
