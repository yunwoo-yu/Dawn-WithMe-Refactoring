import { lazy, Suspense } from 'react';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import RetryErrorBoundary from '../../components/common/RetryErrorBoundary/RetryErrorBoundary';
import FreeBoardItemSkeleton from '../../components/FreeBoard/FreeBoardItem/FreeBoardItemSkeleton';
import ProfileCategoryFeedListSkeleton from '../../components/Profile/ProfileCategoryFeedList/ProfileCategoryFeedListSkeleton';
import ProfileInfoSkeleton from '../../components/Profile/ProfileInfo/ProfileInfoSkeleton';
import MyProfileWrapper from './styled';

const myProfileHeaderProps: Partial<HeaderStyle> = {
  title: '프로필',
  isBackButton: true,
  isTitle: true,
  isMoreButton: true,
};

const ProfileInfo = lazy(() => import('../../components/Profile/ProfileInfo/ProfileInfo'));

const ProfileCategoryFeedList = lazy(
  () => import('../../components/Profile/ProfileCategoryFeedList/ProfileCategoryFeedList'),
);

const ProfileFreeBoardPostList = lazy(
  () => import('../../components/Profile/ProfileFreeBoardPostList/ProfileFreeBoardPostList'),
);

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
          <Suspense fallback={<FreeBoardItemSkeleton />}>
            <ProfileFreeBoardPostList />
          </Suspense>
        </RetryErrorBoundary>
      </MyProfileWrapper>
    </DefaultLayout>
  );
};

export default MyProfile;
