import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import {
  getFreeBoardDatailFeed,
  getFreeBoardDetailFeedCommentList,
  getFreeBoardFeedList,
  getMyFreeBoardPostList,
  setFreeBoardPostHeart,
} from '../api/freeBoard';
import { PostIsHeartTypes } from '../components/FreeBoard/FreeBoardItem/FreeBoardItem';
import {
  FreeBoardCommentListDataTypes,
  FreeBoardListDataTypes,
} from '../types/freeBoard';

export const useGetMyFreeBoardPostListQuery = () => {
  const { id } = useParams();
  const accountname = localStorage.getItem('accountname');

  return useQuery<unknown, Error, FreeBoardListDataTypes>(
    ['myFreeBoardPostList', id || accountname],
    () => {
      if (id) return getMyFreeBoardPostList(id);

      return accountname && getMyFreeBoardPostList(accountname);
    },
    // { suspense: false, useErrorBoundary: false },
  );
};

export const useGetFreeBoardFeedListQuery = () => {
  return useQuery(['freeBoardPostList'], getFreeBoardFeedList, {
    // suspense: false,
    // useErrorBoundary: false,
  });
};

export const useGetFreeBoardDetailFeedQuery = () => {
  const { id } = useParams();

  return useQuery(
    ['freeBoardDatail', id],
    () => id && getFreeBoardDatailFeed(id),
    {
      suspense: false,
      useErrorBoundary: false,
    },
  );
};

export const useGetDetailFeedCommentQuery = () => {
  const { id } = useParams();

  return useQuery<unknown, Error, FreeBoardCommentListDataTypes>(
    ['freeBoardDetailCommentList', id],
    async () => id && getFreeBoardDetailFeedCommentList(id),
    {
      suspense: false,
      useErrorBoundary: false,
    },
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
