import { useMutation, useQuery, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ChangeEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  addFreeBoardComment,
  createFreeBaordPost,
  getFreeBoardDatailFeed,
  getFreeBoardDetailFeedCommentList,
  getFreeBoardFeedList,
  getMyFreeBoardPostList,
  setFreeBoardPostHeart,
} from '../api/freeBoard';
import { PostIsHeartTypes } from '../components/FreeBoard/FreeBoardItem/FreeBoardItem';
import { freeBoardCreatePostValueAtom } from '../recoil/atom';
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
  return useQuery<FreeBoardListDataTypes>(['freeBoardPostList'], getFreeBoardFeedList);
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

export const useCreateFreeBoardPostMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [postValue, setPostValue] = useRecoilState(freeBoardCreatePostValueAtom);
  const [errorMessage, setErrorMessage] = useState('');

  const createFreeBoardPostMutation = useMutation(createFreeBaordPost, {
    onSuccess() {
      queryClient.invalidateQueries(['freeBoardPostList', 'myFreeBoardPostList']);
      setPostValue((prev) => ({ ...prev, content: '' }));
      navigate('/freeboard');
    },
  });

  const onChangePostValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;

    setPostValue((prev) => ({ ...prev, [name]: value }));

    if (name === 'content' && !value) {
      setErrorMessage('');
    }
  };

  const onBlurErrorMessageHandler = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;

    if (name === 'content' && !value) {
      setErrorMessage('필수 정보 입니다.');
    }
  };

  return {
    postValue,
    errorMessage,
    setErrorMessage,
    onChangePostValueHandler,
    createFreeBoardPostMutation,
    onBlurErrorMessageHandler,
  };
};
