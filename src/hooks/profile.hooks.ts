import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
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

export const useGetMyProfileDataQuery = (
  options?: UseQueryOptions<MyProfileTypes, AxiosError>,
) => {
  return useQuery<MyProfileTypes, AxiosError>(
    ['myProfileData'],
    getMyProfileData,
    {
      // suspense: false,
      // useErrorBoundary: false,
      ...options,
    },
  );
};

export const useGetUserProfileDataQuery = (
  options?: UseQueryOptions<MyProfileTypes, AxiosError>,
) => {
  const { id } = useParams();

  return useQuery<MyProfileTypes, AxiosError>(
    ['userProfileData', id],
    async () => id && getUserProfileData(id),
    {
      // suspense: false,
      // useErrorBoundary: false,
      enabled: !!id,
      ...options,
    },
  );
};
