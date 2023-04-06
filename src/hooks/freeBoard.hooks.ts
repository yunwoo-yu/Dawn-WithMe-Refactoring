import { useMutation, useQuery, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ChangeEvent, SetStateAction, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  addFreeBoardComment,
  createFreeBaordPost,
  deleteFreeBoardPost,
  editFreeBoardPost,
  getFreeBoardDatailFeed,
  getFreeBoardDetailFeedCommentList,
  getFreeBoardFeedList,
  getMyFreeBoardPostList,
  setFreeBoardPostHeart,
} from '../api/freeBoard';
import { PostIsHeartTypes } from '../components/FreeBoard/FreeBoardItem/FreeBoardItem';
import { freeBoardCreatePostValueAtom, isShowAlertAtom, isShowModalAtom } from '../recoil/atom';
import {
  FreeBoardCommentListDataTypes,
  FreeBoardDataHooksTypes,
  FreeBoardListDataTypes,
  FreeBoardListMyDataTypes,
  FreeBoardDataTypes,
} from '../types/freeBoard';

interface FeedData {
  post: FreeBoardDataTypes;
}

export const useGetMyFreeBoardPostListQuery = () => {
  const { id } = useParams();
  const accountname = localStorage.getItem('accountname');

  return useQuery<unknown, Error, FreeBoardListMyDataTypes>(
    ['myFreeBoardPostList', id || accountname],
    () => {
      if (id) return getMyFreeBoardPostList(id);

      return accountname && getMyFreeBoardPostList(accountname);
    },
  );
};

export const useGetFreeBoardFeedListQuery = (
  options?: UseQueryOptions<FreeBoardListDataTypes, AxiosError>,
) => {
  return useQuery<FreeBoardListDataTypes, AxiosError>(['freeBoardPostList'], getFreeBoardFeedList, {
    ...options,
  });
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
  const accountname = localStorage.getItem('accountname');
  const queryClient = useQueryClient();

  return useMutation(addFreeBoardComment, {
    async onMutate(newComment) {
      await queryClient.cancelQueries(['freeBoardDetailCommentList', id || accountname]);

      const previouseCommentData = queryClient.getQueryData([
        'freeBoardDetailCommentList',
        id || accountname,
      ]);

      queryClient.setQueryData(
        ['freeBoardDetailCommentList', id || accountname],
        (oldData: any) => {
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
        },
      );

      return {
        previouseCommentData,
      };
    },

    onError(_error, _data, context) {
      queryClient.setQueriesData(
        ['freeBoardDetailCommentList', id || accountname],
        context?.previouseCommentData,
      );
    },

    onSettled() {
      queryClient.invalidateQueries(['freeBoardDetailCommentList', id || accountname]);
    },
  });
};

export const useCreateFreeBoardPostMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [postValue, setPostValue] = useRecoilState(freeBoardCreatePostValueAtom);
  const [errorMessage, setErrorMessage] = useState('');

  const accountname = localStorage.getItem('accountname');

  const createFreeBoardPostMutation = useMutation(createFreeBaordPost, {
    onSuccess() {
      queryClient.refetchQueries(['myFreeBoardPostList', accountname]);
      setPostValue((prev) => ({ ...prev, content: '' }));
      navigate('/freeboard', { replace: true });
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
    errorMessage,
    setErrorMessage,
    onChangePostValueHandler,
    createFreeBoardPostMutation,
    onBlurErrorMessageHandler,
  };
};

export const useDeleteFreeBoardPostMutation = () => {
  const [isShowModal, setIsShowModal] = useRecoilState(isShowModalAtom);
  const [isShowAlert, setIsShowAlert] = useRecoilState(isShowAlertAtom);
  const queryClient = useQueryClient();
  const { id } = useParams();
  const accountname = localStorage.getItem('accountname');

  return useMutation(deleteFreeBoardPost, {
    async onMutate(deleteData) {
      await queryClient.cancelQueries(['myFreeBoardPostList', id || accountname]);

      const previouseCategoryData = queryClient.getQueryData([
        'myFreeBoardPostList',
        id || accountname,
      ]);

      queryClient.setQueryData(['myFreeBoardPostList', id || accountname], (oldData: any) => {
        return oldData.post.filter((el: any) => el.id !== deleteData);
      });

      return {
        previouseCategoryData,
      };
    },
    onSuccess(successData) {
      if (successData.data.message === '삭제되었습니다.') {
        setIsShowModal({ ...isShowModal, isActive: { ...isShowModal.isActive, post: false } });
        setIsShowAlert({
          ...isShowAlert,
          isActive: { header: false, comment: false, post: false },
        });
      }
    },
    onError(error, category, context: any) {
      queryClient.setQueryData(
        ['myFreeBoardPostList', id || accountname],
        context.previouseCategoryData,
      );
    },
    onSettled() {
      queryClient.invalidateQueries(['myFreeBoardPostList', id || accountname]);
    },
  });
};

export const useEditFreeBoardPostMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const accountname = localStorage.getItem('accountname');
  const { id } = useParams();

  return useMutation(editFreeBoardPost, {
    onSuccess(successData) {
      queryClient.invalidateQueries(['myFreeBoardPostList', accountname]);
      queryClient.invalidateQueries(['freeBoardDatail', id]);
      navigate('/freeboard', { replace: true });
    },
    onError(err) {
      console.log(err);
    },
  });
};
