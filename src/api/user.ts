import { LoginData } from '../types/auth';
import { instance } from './axiosBase';

const userLogin = async (loginData: LoginData) => {
  const response = await instance.post('/user/login', { user: loginData });

  return response.data;
};

export default userLogin;
