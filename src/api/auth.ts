import { LoginSignupData } from '../types/auth';
import { instance } from './axiosBase';

export const userLogin = async (loginData: LoginSignupData) => {
  const response = await instance.post('/user/login', { user: loginData });

  return response.data;
};

export const userEmailValid = async (signupData: string) => {
  const response = await instance.post('/user/emailvalid', {
    user: { email: signupData },
  });

  return response.data;
};
