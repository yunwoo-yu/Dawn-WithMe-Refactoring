import { Suspense } from 'react';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import RetryErrorBoundary from '../../components/common/RetryErrorBoundary/RetryErrorBoundary';
import ProfileEditWrapper from './styled';

const myProfileHeaderProps: Partial<HeaderStyle> = {
  title: '프로필 수정',
  isBackButton: true,
  isTitle: true,
  isButton: true,
  buttonText: '수정',
};

const ProfileEdit = () => {
  return (
    <DefaultLayout styleProps={myProfileHeaderProps}>
      <ProfileEditWrapper>
        <RetryErrorBoundary>
          <Suspense></Suspense>
        </RetryErrorBoundary>
      </ProfileEditWrapper>
    </DefaultLayout>
  );
};

export default ProfileEdit;
