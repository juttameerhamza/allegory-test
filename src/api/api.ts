import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { User } from 'entities/user';
import { VerifyOTPCodePayload } from './auth/auth.types';

export const isApiError = (error: unknown): error is AxiosError => {
  return axios.isAxiosError(error);
};

const api = axios.create({ baseURL: '/' });

const mock = new MockAdapter(api, { delayResponse: 2000 });
const users = [{ id: 1, name: 'Onur Gungor', email: 'onur@gmail.com', otp: '123456' }];

mock.onGet('/users').reply(200, {
  users
});

mock.onPost('/auth/signin').reply(function (config: AxiosRequestConfig) {
  const data: User = JSON.parse(config.data);
  const user = users.find((user) => user.email === data.email);

  if (user) {
    return [
      200,
      {
        email: user.email,
        message: 'Code sent!'
      }
    ];
  }

  return [
    400,
    {
      message: 'Incorrect email address!'
    }
  ];
});

mock.onPost('/auth/verify').reply(function (config: AxiosRequestConfig) {
  const data: VerifyOTPCodePayload = JSON.parse(config.data);
  const user = users.find((user) => user.email === data.email && user.otp === data.code);

  if (user) {
    return [
      200,
      {
        user,
        accessToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MjI4NDk1MzMsImV4cCI6MTc1NDM4NTUzMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoib251ckBnbWFpbC5jb20iLCJlbWFpbCI6Im9udXJAZ21haWwuY29tIn0.slMKKXfSaJMO1ipBTvIhGQQyrLO7dK4gQy51ocv7Gyk'
      }
    ];
  }

  return [
    400,
    {
      message: 'Incorrect code!'
    }
  ];
});

export { api };
