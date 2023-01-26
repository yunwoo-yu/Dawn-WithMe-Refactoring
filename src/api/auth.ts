import { LoginSignupData } from '../types/auth';
import { imgInstance, instance } from './axiosBase';

export const userLogin = async (loginData: LoginSignupData) => {
  const response = await instance.post('/user/login', { user: loginData });

  return response.data;
};

export const signupEmailValid = async (signupData: string) => {
  const response = await instance.post('/user/emailvalid', {
    user: { email: signupData },
  });

  return response.data;
};

export const uploadUserImage = async (image: FormData) => {
  const response = await imgInstance.post('/image/uploadfile', image);

  return response.data;
};

export const signupAccountNameValid = async (signupData: string) => {
  const response = await instance.post('/user/accountnamevalid', {
    user: { accountname: signupData },
  });

  return response.data;
};

export const uesrSignup = async (signData: LoginSignupData) => {
  console.log(signData);
  const response = await instance.post('/user', {
    user: { ...signData },
  });

  return response.data;
};
