/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Link } from 'react-router-dom';
import { useGetMyProfileDataQuery, useGetUserProfileDataQuery } from '../../../hooks/profile.hooks';

import ProfileInfoWrapper from './styled';

const ProfileInfo = () => {
  const { data: myProfileData } = useGetMyProfileDataQuery();
  const { data: userProfileData } = useGetUserProfileDataQuery();

  const { accountname, username, intro, image, followerCount, followingCount } =
    userProfileData! || myProfileData!;

  return (
    <ProfileInfoWrapper>
      <div className='profile-img-box'>
        <Link to='/followers'>
          <p>{followerCount}</p>
          <p>followers</p>
        </Link>
        <img src={image} alt='프로필 이미지' />
        <Link to='/followings'>
          <p>{followingCount}</p>
          <p>followings</p>
        </Link>
      </div>
      <div className='profile-text-box'>
        <p className='username'>{username}</p>
        <p className='account-name'>@ {accountname}</p>
        <p className='intro'>{intro}</p>
        <Link to='/myprofile/edit'>프로필 수정</Link>
      </div>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;
