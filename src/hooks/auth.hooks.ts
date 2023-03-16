import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { uesrSignup, uploadUserImage, userLogin } from '../api/auth';
import { url } from '../api/axiosBase';

import { errorToast, successToast } from '../util/toast';

export const useLoginMutation = (setError: React.Dispatch<React.SetStateAction<string>>) => {
  const navigate = useNavigate();

  return useMutation(userLogin, {
    onSuccess(resData) {
      if (resData.status === 422) {
        setError(`${resData.message}`);
      } else if (resData.message === '잘못된 접근입니다.') {
        setError(`${resData.message}`);
      } else if (resData.status === 404) {
        errorToast(`서버에 문제가 있습니다. 잠시 후 시도해주세요 :(`);
      } else {
        localStorage.setItem('accountname', resData.user.accountname);
        localStorage.setItem('token', resData.user.token);
        navigate('/home');
      }
    },
    onError(err) {
      console.log(err);
      errorToast(`서버에 문제가 있습니다. 잠시 후 시도해주세요 :(`);
    },
  });
};

export const useSignupMutation = () => {
  const navigate = useNavigate();

  return useMutation(uesrSignup, {
    onSuccess(resData) {
      if (resData.message === '회원가입 성공') {
        navigate('/login');
        successToast('회원가입에 성공 했습니다!');
      }
      console.log(resData);
    },
    onError(err: any) {
      console.log(err);
    },
  });
};

export const useImageUploadMutation = (setState: React.Dispatch<React.SetStateAction<string>>) => {
  return useMutation(uploadUserImage, {
    onSuccess(resData) {
      console.log(resData);
      setState(`${url}/${resData.filename}`);
    },
    onError(err: any) {
      errorToast(`${err.response.data.message}`);
      console.log(err);
    },
  });
};
