import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import getFollowingProduct from '../api/category';
import { FeedData } from '../types/category';
import useGetFollowingListQuery from './follow.hooks';

interface FollowingUser {
  accountname: string;
}

const useGetCategoryFeedQuery = () => {
  const { data } = useGetFollowingListQuery();

  const followingAccountNames: string[] = data?.map(
    (user: FollowingUser) => user.accountname,
  );

  return useQuery<FeedData[], AxiosError>(
    ['categoryPost', followingAccountNames],
    () => {
      return getFollowingProduct(followingAccountNames);
    },
    { enabled: !!followingAccountNames },
  );
};

export default useGetCategoryFeedQuery;
