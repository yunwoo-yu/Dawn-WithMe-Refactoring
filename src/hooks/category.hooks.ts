import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import {
  createCategoryPost,
  deleteCategoryPost,
  getCategoryDetailProduct,
  getCategoryFeedList,
  getFollowingProduct,
} from '../api/category';
import { categoryCreatePostValueAtom, isShowAlertAtom, isShowModalAtom } from '../recoil/atom';
import { FeedData } from '../types/category';
import useGetFollowingListQuery from './follow.hooks';

interface FollowingUser {
  accountname: string;
}

// 팔로우 되어있는 유저의 어카운트네임을 뽑아 해당 유저의 카테고리 게시물을 모아 배열로 반환해주는 커스텀훅
export const useGetCategoryFeedQuery = () => {
  const { data } = useGetFollowingListQuery();
  const accountName = localStorage.getItem('accountname');

  const followingAccountNames: string[] = data?.map((user: FollowingUser) => user.accountname);

  if (accountName) followingAccountNames.push(accountName);

  return useQuery<FeedData[], AxiosError>(
    ['categoryPost', followingAccountNames],

    () => getFollowingProduct(followingAccountNames),
    { enabled: !!followingAccountNames },
  );
};

export const useGetCategoryDetailFeedQuery = () => {
  const { id } = useParams();

  return useQuery(['categoryDetail', id], () => id && getCategoryDetailProduct(id));
};

export const useGetCategoryFeedListQuery = () => {
  const { id } = useParams();
  const accountname = localStorage.getItem('accountname');

  return useQuery(['categoryList', id || accountname], () => {
    if (id) {
      return getCategoryFeedList(id);
    }
    return accountname && getCategoryFeedList(accountname);
  });
};

export const useCreateCategoryPostMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const accountName = localStorage.getItem('accountname');
  const regStudyPeople = /^[2-8]{1}$/g;
  const { data } = useGetFollowingListQuery();
  const followingAccountNames: string[] = data?.map((user: FollowingUser) => user.accountname);

  if (accountName) followingAccountNames.push(accountName);

  const [postValue, setPostValue] = useRecoilState(categoryCreatePostValueAtom);
  const [errorMessage, setErrorMessage] = useState({
    itemName: '',
    price: '',
    link: '',
    itemImage: '',
  });

  const createCategoryPostMutation = useMutation(createCategoryPost, {
    onSuccess(successData) {
      queryClient.setQueryData(['categoryPost', followingAccountNames], (oldData: any) => {
        return [{ ...successData.product }, ...oldData];
      });
      navigate('/home');
    },
    onError(err) {
      console.log(err);
    },
  });

  const onChangePostValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setPostValue((prev) => ({ ...prev, [name]: value }));

    if (value) {
      if (name === 'price' && !regStudyPeople.test(value)) {
        setErrorMessage((prev) => ({ ...prev, [name]: '2 ~ 8 의 숫자만 입력 가능합니다.' }));
      } else {
        setErrorMessage((prev) => ({ ...prev, [name]: '' }));
      }
    }
  };

  const onBlurErrorMessageHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, name } = e.target;

    if (!value) {
      setErrorMessage((prev) => ({ ...prev, [name]: '필수 정보 입니다.' }));
    }
  };

  const onChangeSelectBoxHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (value === 'study') {
      setPostValue({ ...postValue, itemName: value });
    } else {
      setPostValue({ ...postValue, itemName: value, price: 2 });
    }
  };

  return {
    postValue,
    errorMessage,
    setErrorMessage,
    onChangePostValueHandler,
    createCategoryPostMutation,
    onChangeSelectBoxHandler,
    onBlurErrorMessageHandler,
  };
};

export const useDeleteCategoryPostMutation = () => {
  const [isShowModal, setIsShowModal] = useRecoilState(isShowModalAtom);
  const [isShowAlert, setIsShowAlert] = useRecoilState(isShowAlertAtom);
  const accountName = localStorage.getItem('accountname');
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data } = useGetFollowingListQuery();
  const followingAccountNames: string[] = data?.map((user: FollowingUser) => user.accountname);

  if (accountName) followingAccountNames.push(accountName);

  return useMutation(deleteCategoryPost, {
    async onMutate(deleteData) {
      await queryClient.cancelQueries(['categoryPost', followingAccountNames]);

      const previouseCategoryData = queryClient.getQueryData([
        'categoryPost',
        followingAccountNames,
      ]);

      queryClient.setQueryData(['categoryPost', followingAccountNames], (oldData: any) => {
        return oldData.filter((el: any) => el.id !== deleteData);
      });

      return {
        previouseCategoryData,
      };
    },
    onSuccess(successData) {
      if (successData.message === '삭제되었습니다.') {
        setIsShowModal({ ...isShowModal, isActive: { ...isShowModal.isActive, post: false } });
        setIsShowAlert({ ...isShowAlert, isActive: { ...isShowAlert.isActive, post: false } });
        if (!(location.pathname === '/home')) navigate('/home');
      }
    },
    onError(error, category, context: any) {
      queryClient.setQueryData(
        ['categoryPost', followingAccountNames],
        context.previouseCategoryData,
      );
    },
    onSettled() {
      queryClient.invalidateQueries(['categoryPost', followingAccountNames]);
    },
  });
};
