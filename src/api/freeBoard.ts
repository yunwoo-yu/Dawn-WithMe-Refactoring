import { accessInstance } from './axiosBase';

export const getMyFreeBoardPostList = async (accountname: string) => {
  const response = await accessInstance.get(`/post/${accountname}/userpost`);

  return response.data;
};

export const getFreeBoardFeedList = async () => {
  const response = await accessInstance.get('/post/feed');

  return response.data;
};

export const setFreeBoardPostHeart = async ({
  postId,
  isHeart,
}: {
  postId: string;
  isHeart: boolean;
}) => {
  const response = isHeart
    ? await accessInstance.delete(`/post/${postId}/unheart`)
    : await accessInstance.post(`/post/${postId}/heart`);

  return response.data;
};
