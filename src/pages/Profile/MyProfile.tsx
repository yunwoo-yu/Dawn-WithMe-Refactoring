import React from 'react';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';

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
      <MyProfileWrapper>zz</MyProfileWrapper>
    </DefaultLayout>
  );
};

export default MyProfile;
