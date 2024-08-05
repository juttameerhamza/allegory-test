import { User } from 'entities/user';

export type AuthState = {
  user: User | null;
  accessToken: string | null;
  step: number;
};
