import { User } from 'entities/user';

export type SignInUserPayload = {
  email?: string;
  phone?: string;
  password: string;
};

export type SignInUserResponse = { email: string; message: string };

export type VerifyOTPCodePayload = { email: string; code: string };

export type VerifyOTPCodeResponse = {
  user: User;
  accessToken: string;
};
