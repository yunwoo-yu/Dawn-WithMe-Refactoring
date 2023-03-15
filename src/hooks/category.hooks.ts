import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import {
  createCategoryPost,
  getCategoryDetailProduct,
  getCategoryFeedList,
  getFollowingProduct,
} from '../api/category';
import { categoryCreatePostValueAtom } from '../recoil/atom';
import { FeedData } from '../types/category';
import useGetFollowingListQuery from './follow.hooks';

interface FollowingUser {
  accountname: string;
}

// 팔로우 되어있는 유저의 어카운트네임을 뽑아 해당 유저의 카테고리 게시물을 모아 배열로 반환해주는 커스텀훅
export const useGetCategoryFeedQuery = () => {
  const { data } = useGetFollowingListQuery();

  const followingAccountNames: string[] = data?.map((user: FollowingUser) => user.accountname);

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
  const [postValue, setPostValue] = useRecoilState(categoryCreatePostValueAtom);
  const [errorMessage, setErrorMessage] = useState({
    itemName: '',
    price: '',
    link: '',
    itemImage: '',
  });
  const regStudyPeople = /^[2-8]{1}$/g;

  const createCategoryPostMutation = useMutation(createCategoryPost, {
    onSuccess() {
      queryClient.invalidateQueries(['categoryPost']);
      navigate('/home');
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
