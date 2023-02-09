import { FeedData } from '../types/category';
import { accessInstance } from './axiosBase';

export const getFollowingProduct = async (accountNameList: string[]) => {
  const accountName = localStorage.getItem('accountname');
  const result: FeedData[] = [];

  if (accountName) {
    accountNameList.push(accountName);
  }

  const promises = accountNameList.map(async (username) => {
    const response = await accessInstance.get(`/product/${username}`);

    if (response.data.data) {
      response.data.product.forEach((el: FeedData) => result.push(el));
    }
  });

  await Promise.all(promises);

  return result;
};

export const getCategoryDetailProduct = async (id: string) => {
  const response = await accessInstance.get(`/product/detail/${id}`);

  return response.data;
};
