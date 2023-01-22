import React from 'react';

const isValidate = <T>(
  targetName: string,
  targetValue: string,
  setError: React.Dispatch<React.SetStateAction<T>>,
) => {
  const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const regPassword = targetValue.length > 5 && targetValue !== '';

  switch (targetName) {
    case 'email':
      if (!regEmail.test(targetValue)) {
        setError((prev: any) => ({
          ...prev,
          [targetName]: '이메일 형식이 아닙니다.',
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

    // no default
  }
};
export default isValidate;
