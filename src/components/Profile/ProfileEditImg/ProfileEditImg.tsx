import { ChangeEvent, MouseEvent, Ref, RefObject, useEffect, useRef, useState } from 'react';
import { MyProfileTypes } from '../../../hooks/profile.hooks';
import ProfileImgWrapper from './styled';
import { useImageUploadMutation } from '../../../hooks/auth.hooks';
import { ImgBackground } from '../../../pages/SignupProfileSetting/styled';
import profileUploadIcon from '../../../assets/images/s-upload-file.png';
import profileImg from '../../../assets/images/profile-logo.png';

interface ProfileImgProps {
  data: MyProfileTypes | undefined;
}

const ProfileImg = ({ data }: ProfileImgProps) => {
  const [imgSrc, setImgSrc] = useState('');
  const [userData, setUserData] = useState<MyProfileTypes | undefined>();
  const fileRef = useRef<HTMLInputElement | null>(null);
  const imageUploadMutation = useImageUploadMutation(setImgSrc);
  const basicProfileImg = imgSrc === 'http://146.56.183.55:5050/Ellipse.png' ? profileImg : imgSrc;

  const onChangeImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();

    if (event.target.files) {
      formData.append('image', event.target.files[0]);
      imageUploadMutation.mutate(formData);
    }
  };

  const onClickImgHandler = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  useEffect(() => {
    if (data) {
      setImgSrc(data.image);
    }
  }, []);

  return (
    <ProfileImgWrapper>
      <ImgBackground backBg={basicProfileImg}>
        <input
          type='file'
          accept='image/*'
          id='imageUpload'
          ref={fileRef}
          onChange={onChangeImageUpload}
        />
        <button type='button' onClick={onClickImgHandler}>
          <img src={profileUploadIcon} alt='업로드 버튼' />
        </button>
      </ImgBackground>
    </ProfileImgWrapper>
  );
};

export default ProfileImg;
