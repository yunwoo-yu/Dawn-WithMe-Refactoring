import { accessInstance } from './axiosBase';

const getFollowingList = async (accountName: string) => {
  const response = await accessInstance.get(
    `/profile/${accountName}/following?limit=1000`,
  );

  return response.data;
};

export default getFollowingList;
