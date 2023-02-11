import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getMyProfileData, getUserProfileData } from '../api/profile';

export interface MyProfileTypes {
  accountname: string;
  follower: string[];
  followerCount: number;
  following: string[];
  followingCount: number;
  image: string;
  intro: string;
  isfollow: boolean;
  username: string;
  _id: string;
}

export const useGetMyProfileDataQuery = () => {
  return useQuery(['myProfileData'], getMyProfileData, {
    // suspense: false,
    // useErrorBoundary: false,
  });
};

export const useGetUserProfileDataQuery = () => {
  const { id } = useParams();

  return useQuery(['userProfileData', id], () => id && getUserProfileData(id), {
    // suspense: false,
    // useErrorBoundary: false,
    enabled: !!id,
  });
};
