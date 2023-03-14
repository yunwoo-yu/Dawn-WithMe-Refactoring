import { useMutation, useQuery, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useParams } from 'react-router-dom';
import {
  addFreeBoardComment,
  getFreeBoardDatailFeed,
  getFreeBoardDetailFeedCommentList,
  getFreeBoardFeedList,
  getMyFreeBoardPostList,
  setFreeBoardPostHeart,
} from '../api/freeBoard';
import { PostIsHeartTypes } from '../components/FreeBoard/FreeBoardItem/FreeBoardItem';
import {
  FreeBoardCommentListDataTypes,
  FreeBoardDataHooksTypes,
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
  );
};

export const useGetFreeBoardFeedListQuery = () => {
  return useQuery(['freeBoardPostList'], getFreeBoardFeedList);
};

export const useGetFreeBoardDetailFeedQuery = () => {
  const { id } = useParams();

  return useQuery<unknown, AxiosError, FreeBoardDataHooksTypes>(
    ['freeBoardDatail', id],
    () => id && getFreeBoardDatailFeed(id),
  );
};

export const useGetDetailFeedCommentQuery = (
  options?: UseQueryOptions<FreeBoardCommentListDataTypes, AxiosError>,
) => {
  const { id } = useParams();

  return useQuery<FreeBoardCommentListDataTypes, AxiosError>(
    ['freeBoardDetailCommentList', id],
    async () => id && getFreeBoardDetailFeedCommentList(id),
    {
      ...options,
    },
  );
};

export const useSetFreeBoardPostHeartMutation = (
  setState: React.Dispatch<React.SetStateAction<PostIsHeartTypes>>,
) => {
  return useMutation(setFreeBoardPostHeart, {
    onSuccess(data) {
      setState({
        hearted: data.post.hearted,
        heartCount: data.post.heartCount,
      });
    },
    onError(err: AxiosError) {
      throw Error(err.message || '좋아요 변경에 실패했습니다.');
    },
  });
};

export const useAddFreeBoardCommentMutation = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  return useMutation(addFreeBoardComment, {
    async onMutate(newComment) {
      await queryClient.cancelQueries(['freeBoardDetailCommentList', id]);

      const previouseCommentData = queryClient.getQueryData(['freeBoardDetailCommentList', id]);

      queryClient.setQueryData(['freeBoardDetailCommentList', id], (oldData: any) => {
        return {
          comments: [
            ...oldData.comments,
            {
              content: newComment.comment,
              id: `commentsId${oldData.comments.length + 1}`,
              createdAt: new Date(),
              author: oldData.comments.length + 1,
            },
          ],
        };
      });

      return {
        previouseCommentData,
      };
    },

    onError(_error, _data, context) {
      queryClient.setQueriesData(['freeBoardDetailCommentList', id], context?.previouseCommentData);
    },

    onSettled() {
      queryClient.invalidateQueries(['freeBoardDetailCommentList', id]);
    },
  });
};
