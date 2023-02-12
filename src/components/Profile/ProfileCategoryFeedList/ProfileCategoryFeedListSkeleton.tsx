import React from 'react';
import Skeleton from 'react-loading-skeleton';
import ProfileCategoryFeedListWrapper from './styled';

const ProfileCategoryFeedListSkeleton = () => {
  return (
    <ProfileCategoryFeedListWrapper>
      <Skeleton width={110} height={16} />
      <div className='select-wrapper'>
        <Skeleton width={100} height={41} />
      </div>
      <ul>
        <li className='feed-item'>
          <Skeleton width={140} height={90} />
          <Skeleton className='feed-text' height={18} />
          <Skeleton height={14} />
        </li>
        <li className='feed-item'>
          <Skeleton width={140} height={90} />
          <Skeleton className='feed-text' height={18} />
          <Skeleton height={14} />
        </li>
        <li className='feed-item'>
          <Skeleton width={140} height={90} />
          <Skeleton className='feed-text' height={18} />
          <Skeleton height={14} />
        </li>
        <li className='feed-item'>
          <Skeleton width={140} height={90} />
          <Skeleton className='feed-text' height={18} />
          <Skeleton height={14} />
        </li>
      </ul>
    </ProfileCategoryFeedListWrapper>
  );
};

export default ProfileCategoryFeedListSkeleton;
