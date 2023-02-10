import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useParams } from 'react-router-dom';

import { getCategoryDetailProduct, getFollowingProduct } from '../api/category';
import { FeedData } from '../types/category';
import useGetFollowingListQuery from './follow.hooks';

interface FollowingUser {
  accountname: string;
}

export const useGetCategoryFeedQuery = () => {
  const { data } = useGetFollowingListQuery();

  const followingAccountNames: string[] = data?.map(
    (user: FollowingUser) => user.accountname,
  );

  return useQuery<FeedData[], AxiosError>(
    ['categoryPost', followingAccountNames],
    () => getFollowingProduct(followingAccountNames),
    { enabled: !!followingAccountNames },
  );
};

export const useGetCategoryDetailFeedQuery = () => {
  const { id } = useParams();

  return useQuery(
    ['categoryDetail', id],
    () => id && getCategoryDetailProduct(id),
  );
};
