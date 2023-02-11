import React, { Suspense } from 'react';
import DefaultLayout, {
  HeaderStyle,
} from '../../../components/common/Layout/DefaultLayout/DefaultLayout';
import RetryErrorBoundary from '../../../components/common/RetryErrorBoundary/RetryErrorBoundary';
import ProfileCategoryFeedList from '../../../components/Profile/ProfileCategoryFeedList/ProfileCategoryFeedList';
import ProfileInfo from '../../../components/Profile/ProfileInfo/ProfileInfo';
import ProfileInfoSkeleton from '../../../components/Profile/ProfileInfo/ProfileInfoSkeleton';
import MyProfileWrapper from './styled';

const myProfileHeaderProps: Partial<HeaderStyle> = {
  title: '프로필',
  isBackButton: true,
  isTitle: true,
  isMoreButton: true,
};

const MyProfile = () => {
  return (
    <DefaultLayout styleProps={myProfileHeaderProps}>
      <MyProfileWrapper>
        <RetryErrorBoundary>
          <Suspense fallback={<ProfileInfoSkeleton />}>
            <ProfileInfo />
          </Suspense>
          <ProfileCategoryFeedList />
        </RetryErrorBoundary>
      </MyProfileWrapper>
    </DefaultLayout>
  );
};

export default MyProfile;
