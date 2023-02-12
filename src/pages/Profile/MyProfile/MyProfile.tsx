import { Suspense } from 'react';
import DefaultLayout, {
  HeaderStyle,
} from '../../../components/common/Layout/DefaultLayout/DefaultLayout';
import RetryErrorBoundary from '../../../components/common/RetryErrorBoundary/RetryErrorBoundary';
import ProfileCategoryFeedList from '../../../components/Profile/ProfileCategoryFeedList/ProfileCategoryFeedList';
import ProfileCategoryFeedListSkeleton from '../../../components/Profile/ProfileCategoryFeedList/ProfileCategoryFeedListSkeleton';
import ProfileFreeBoardPostList from '../../../components/Profile/ProfileFreeBoardPostList/ProfileFreeBoardPostList';
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
          <Suspense fallback={<ProfileCategoryFeedListSkeleton />}>
            <ProfileCategoryFeedList />
          </Suspense>
          <ProfileFreeBoardPostList />
        </RetryErrorBoundary>
      </MyProfileWrapper>
    </DefaultLayout>
  );
};

export default MyProfile;
