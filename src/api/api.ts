import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { User } from 'entities/user';

export const isApiError = (error: unknown): error is AxiosError => {
  return axios.isAxiosError(error);
};

const api = axios.create({ baseURL: '/' });

const mock = new MockAdapter(api, { delayResponse: 2000 });
const users = [{ id: 1, name: 'Onur Gungor', email: 'onur@gmail.com' }];

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

export { api };
