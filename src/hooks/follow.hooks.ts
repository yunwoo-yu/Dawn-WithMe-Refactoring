import { useQuery } from '@tanstack/react-query';
import { getFollowingList } from '../api/follow';

const useGetFollowingListQuery = () => {
  const accountName = localStorage.getItem('accountname');

  return useQuery(['followingList', accountName], () => {
    if (accountName === null) return;
    return getFollowingList(accountName);
  });
};

export default useGetFollowingListQuery;
