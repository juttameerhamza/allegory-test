export type SignInUserPayload = {
  email?: string;
  phone?: string;
  password: string;
};

// export type SignInUserResponse = {
//   user: User;
//   accessToken: string;
// };

export type SignInUserResponse = { message: string };
