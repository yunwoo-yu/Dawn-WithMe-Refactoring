import { accessInstance } from './axiosBase';

interface MyProfileDataTypes {
  user: {
    username: string;
    accountname: string;
    intro: string;
    image: string;
  };
}

export const getMyProfileData = async () => {
  const response = await accessInstance.get('/user/myinfo');

  return response.data.user;
};

export const getUserProfileData = async (accountName: string) => {
  const response = await accessInstance.get(`/profile/${accountName}`);

  return response.data.profile;
};

export const setMyProfileData = async (formData: MyProfileDataTypes) => {
  const response = await accessInstance.put('/user', formData);

  return response.data;
};
