import { Suspense } from 'react';
import DefaultLayout, {
  HeaderStyle,
} from '../../../components/common/Layout/DefaultLayout/DefaultLayout';
import RetryErrorBoundary from '../../../components/common/RetryErrorBoundary/RetryErrorBoundary';
import FreeBoardItemSkeleton from '../../../components/FreeBoard/FreeBoardItem/FreeBoardItemSkeleton';
import ProfileCategoryFeedList from '../../../components/Profile/ProfileCategoryFeedList/ProfileCategoryFeedList';
import ProfileCategoryFeedListSkeleton from '../../../components/Profile/ProfileCategoryFeedList/ProfileCategoryFeedListSkeleton';
import ProfileFreeBoardPostList from '../../../components/Profile/ProfileFreeBoardPostList/ProfileFreeBoardPostList';
import ProfileInfo from '../../../components/Profile/ProfileInfo/ProfileInfo';
import ProfileInfoSkeleton from '../../../components/Profile/ProfileInfo/ProfileInfoSkeleton';
import UserProfileWrapper from './styled';

const userProfileHeaderProps: Partial<HeaderStyle> = {
  title: '프로필',
  isBackButton: true,
  isTitle: true,
  isMoreButton: true,
};

const UserProfile = () => {
  return (
    <DefaultLayout styleProps={userProfileHeaderProps}>
      <UserProfileWrapper>
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
      </UserProfileWrapper>
    </DefaultLayout>
  );
};

export default UserProfile;
