import { useLocation } from 'react-router-dom';
import React, { lazy, Suspense, useRef, useState } from 'react';

import ProfileSettingWrapper, { ImgBackground } from './styled';
import profileImg from '../../assets/images/profile-logo.png';
import profileUploadIcon from '../../assets/images/s-upload-file.png';
import { useAccountNameValidMutation } from '../../hooks/valid.hooks';
import imageClickHandler from '../../util/imageClickHandler';
import useForm from '../../hooks/common/useForm';
import useValidDebouncing from '../../hooks/common/useValidDebouncing';
import { useImageUploadMutation, useSignupMutation } from '../../hooks/auth.hooks';
import RetryErrorBoundary from '../../components/common/RetryErrorBoundary/RetryErrorBoundary';

const SignupProfileSettingForm = lazy(
  () => import('../../components/SignupProfileSetting/ProfileSettingForm/SignupProfileSettingForm'),
);

const SignupProfileSetting = () => {
  const fileRef = useRef(null);
  const location = useLocation();
  const { email, password } = location.state.data;
  const [imgSrc, setImgSrc] = useState('');
  const { formData, onChangeInputHandler } = useForm({
    email,
    password,
    username: '',
    accountname: '',
    image: '',
    intro: '',
    isActive: true,
  });
  const [error, setError] = useState({
    email,
    password,
    username: '',
    accountname: '',
    image: '',
    intro: '',
    isActive: true,
  });

  const imageUploadMutation = useImageUploadMutation(setImgSrc);
  const accountNameMutation = useAccountNameValidMutation(setError);
  const signupMutation = useSignupMutation();

  const onChangeImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imgFormData = new FormData();
    const { files } = event.target;

    if (files) {
      imgFormData.append('image', files[0]);
    }

    imageUploadMutation.mutate(imgFormData);
  };

  const onSubmitButtonHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signupMutation.mutate({ ...formData, image: imgSrc });
  };

  useValidDebouncing(accountNameMutation, formData.accountname);

  return (
    <main>
      <ProfileSettingWrapper>
        <RetryErrorBoundary>
          <Suspense>
            <h2>프로필 설정</h2>
            <p className='profile-subtit'>나중에 언제든지 변경할수있습니다.</p>
            <ImgBackground backBg={imgSrc || profileImg}>
              <input
                type='file'
                accept='image/*'
                id='imageUpload'
                ref={fileRef}
                onChange={onChangeImageUpload}
              />
              <button type='button' onClick={() => imageClickHandler(fileRef)}>
                <img src={profileUploadIcon} alt='프로필 이미지 업로드버튼' />
              </button>
            </ImgBackground>
            <SignupProfileSettingForm
              formData={formData}
              error={error}
              onChangeInputHandler={onChangeInputHandler}
              onSubmitButtonHandler={onSubmitButtonHandler}
            />
          </Suspense>
        </RetryErrorBoundary>
      </ProfileSettingWrapper>
    </main>
  );
};

export default SignupProfileSetting;
