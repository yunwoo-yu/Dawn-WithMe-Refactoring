import React from 'react';
import { AuthPropsBasic, SignupProfileSettingFormTypes } from '../../../types/auth';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Label from '../../common/Label/Label';
import ProfileSettingFormWrapper from './styled';

export interface SignupProps extends AuthPropsBasic {
  formData: SignupProfileSettingFormTypes;
  error: SignupProfileSettingFormTypes;
}

const SignupProfileSettingForm = ({
  formData,
  error,
  onChangeInputHandler,
  onSubmitButtonHandler,
}: SignupProps) => {
  const { username, accountname, intro } = formData;
  const { username: errorUserName, accountname: errorAccountName, isActive } = error;

  const checkValidButton =
    !username || !accountname || !intro || !!errorUserName || !!errorAccountName || isActive;

  return (
    <ProfileSettingFormWrapper onSubmit={onSubmitButtonHandler}>
      <div>
        <Label>사용자 이름</Label>
        <Input
          value={username}
          type='text'
          id='userName'
          name='username'
          onChange={onChangeInputHandler}
          placeholder='2~10자 이내여야 합니다.'
          required
          autoFocus
        />
      </div>
      {errorUserName && <p>{errorUserName}</p>}
      <div>
        <Label>계정 ID</Label>
        <Input
          value={accountname}
          type='text'
          id='userId'
          name='accountname'
          onChange={onChangeInputHandler}
          required
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
        />
      </div>
      {errorAccountName && <p>{errorAccountName}</p>}
      <div>
        <Label>소개</Label>
        <Input
          value={intro}
          type='text'
          id='userIntro'
          name='intro'
          onChange={onChangeInputHandler}
          placeholder='자신을 소개해주세요!'
          required
        />
      </div>
      <Button width='100%' size='large' type='submit' disabled={checkValidButton}>
        다음
      </Button>
    </ProfileSettingFormWrapper>
  );
};

export default SignupProfileSettingForm;
