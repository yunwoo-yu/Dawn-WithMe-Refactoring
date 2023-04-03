import { CreateCategoryPostData, FeedData } from '../types/category';
import { accessInstance } from './axiosBase';

export const getFollowingProduct = async (accountNameList: string[]) => {
  const result: FeedData[] = [];

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

export const getCategoryFeedList = async (id: string) => {
  const response = await accessInstance.get(`/product/${id}`);

  return response.data;
};

export const createCategoryPost = async (postData: { product: CreateCategoryPostData }) => {
  const response = await accessInstance.post('/product', postData);

  return response.data;
};

export const deleteCategoryPost = async (productId: string) => {
  const response = await accessInstance.delete(`/product/${productId}`);

  return response.data;
};
