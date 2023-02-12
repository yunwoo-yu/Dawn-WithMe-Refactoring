import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import {
  getMyFreeBoardPostList,
  setFreeBoardPostHeart,
} from '../api/freeBoard';
import { PostIsHeartTypes } from '../components/FreeBoard/FreeBoardItem/FreeBoardItem';
import { FreeBoardListDataTypes } from '../types/freeBoard';

export const useGetMyFreeBoardPostList = () => {
  const { id } = useParams();
  const accountname = localStorage.getItem('accountname');

  return useQuery<unknown, Error, FreeBoardListDataTypes>(
    ['freeBoardPostList', id || accountname],
    () => {
      if (id) return getMyFreeBoardPostList(id);

      return accountname && getMyFreeBoardPostList(accountname);
    },
    { suspense: false, useErrorBoundary: false },
  );
};

export const useSetFreeBoardPostHeartMutation = (
  setState: React.Dispatch<React.SetStateAction<PostIsHeartTypes>>,
) => {
  return useMutation(setFreeBoardPostHeart, {
    onSuccess(data) {
      console.log(data);

      setState({
        hearted: data.post.hearted,
        heartCount: data.post.heartCount,
      });
    },
    onError(err) {
      console.log(err);
    },
  });
};
