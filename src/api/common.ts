import { imgInstance } from './axiosBase';

export const setFeedImagePost = async (imgData: FormData) => {
  const response = await imgInstance.post('/image/uploadfile', imgData);

  return response.data;
};

export default setFeedImagePost;
