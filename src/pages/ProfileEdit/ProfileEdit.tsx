import { Suspense, lazy } from 'react';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import RetryErrorBoundary from '../../components/common/RetryErrorBoundary/RetryErrorBoundary';
import ProfileEditWrapper from './styled';

import { useGetMyProfileDataQuery } from '../../hooks/profile.hooks';

const myProfileHeaderProps: Partial<HeaderStyle> = {
  title: '프로필 수정',
  isBackButton: true,
  isTitle: true,
  isButton: true,
  buttonText: '수정',
};

const ProfileImg = lazy(() => import('../../components/Profile/ProfileEditImg/ProfileEditImg'));

const ProfileEdit = () => {
  const { data } = useGetMyProfileDataQuery();

  return (
    <DefaultLayout styleProps={myProfileHeaderProps}>
      <ProfileEditWrapper>
        <RetryErrorBoundary>
          <ProfileImg data={data} />
        </RetryErrorBoundary>
      </ProfileEditWrapper>
    </DefaultLayout>
  );
};

export default ProfileEdit;
