import { accessInstance } from './axiosBase';

export const getMyFreeBoardPostList = async (accountname: string) => {
  const response = await accessInstance.get(`/post/${accountname}/userpost`);

  return response.data;
};

export const getFreeBoardFeedList = async () => {
  const response = await accessInstance.get('/post/feed/?limit=100');

  return response.data;
};

export const getFreeBoardDatailFeed = async (id: string) => {
  const response = await accessInstance.get(`/post/${id}`);

  return response.data;
};

export const getFreeBoardDetailFeedCommentList = async (id: string) => {
  const response = await accessInstance.get(`/post/${id}/comments`);

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

export const addFreeBoardComment = async ({
  postId,
  comment,
}: {
  postId: string;
  comment: string;
}) => {
  const response = await accessInstance.post(`/post/${postId}/comments`, {
    comment: { content: comment },
  });

  return response.data;
};
