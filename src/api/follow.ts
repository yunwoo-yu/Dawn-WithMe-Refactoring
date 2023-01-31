import { accessInstance } from './axiosBase';

export const getFollowingList = async (accountName: string) => {
  const response = await accessInstance.get(
    `/profile/${accountName}/following?limit=1000`,
  );

  return response.data;
};

export const getFollowerList = async (accountName: string) => {
  const response = await accessInstance.get(
    `/profile/${accountName}/following?limit=1000`,
  );

  return response.data;
};
