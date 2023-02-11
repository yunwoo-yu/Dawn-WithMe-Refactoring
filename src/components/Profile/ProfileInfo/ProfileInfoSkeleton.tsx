import React from 'react';
import Skeleton from 'react-loading-skeleton';
import ProfileInfoWrapper from './styled';

const ProfileInfoSkeleton = () => {
  return (
    <ProfileInfoWrapper>
      <div className='profile-img-box'>
        <div>
          <Skeleton width={60} height={20} />
          <Skeleton width={60} height={10} />
        </div>
        <Skeleton width={110} height={110} borderRadius={110} />
        <div>
          <Skeleton width={60} height={20} />
          <Skeleton width={60} height={10} />
        </div>
      </div>
      <div className='profile-text-box'>
        <Skeleton className='username' width={100} height={18} />
        <Skeleton className='account-name' width={120} height={10} />
        <Skeleton className='intro' width={200} height={14} />
        <Skeleton width={120} height={34} borderRadius={17} />
      </div>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfoSkeleton;
