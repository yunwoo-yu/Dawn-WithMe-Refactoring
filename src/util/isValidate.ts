import React from 'react';

const isValidate = <T>(
  targetName: string,
  targetValue: string,
  setError: React.Dispatch<React.SetStateAction<T>>,
) => {
  const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(targetValue);
  const regPassword = targetValue.length > 5 && targetValue !== '';
  const regUserName =
    targetValue.length > 1 && targetValue.length < 9 && targetValue !== '';
  const regAccountname = /[a-z0-9A-Z_.]{2,20}$/.test(targetValue);

  switch (targetName) {
    case 'email':
      if (!regEmail) {
        setError((prev: any) => ({
          ...prev,
          [targetName]: '잘못된 이메일 형식입니다.',
        }));
      } else {
        setError((prev: any) => ({
          ...prev,
          [targetName]: '',
        }));
      }

      break;

    case 'password':
      if (!regPassword) {
        setError((prev: any) => ({
          ...prev,
          [targetName]: '비밀번호는 6자 이상이어야 합니다.',
        }));
      } else {
        setError((prev: any) => ({
          ...prev,
          [targetName]: '',
        }));
      }

      break;

    case 'username':
      if (!regUserName) {
        setError((prev: any) => ({
          ...prev,
          [targetName]: '2~10 이내로 입력해 주세요.',
        }));
      } else {
        setError((prev: any) => ({
          ...prev,
          [targetName]: '',
        }));
      }

      break;

    case 'accountname':
      if (!regAccountname) {
        setError((prev: any) => ({
          ...prev,
          [targetName]: '영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다. (1~16)',
        }));
      } else {
        setError((prev: any) => ({
          ...prev,
          [targetName]: '',
        }));
      }

    // no default
  }
};
export default isValidate;
