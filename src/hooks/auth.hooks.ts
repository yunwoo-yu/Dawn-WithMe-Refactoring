import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { userEmailValid, userLogin } from '../api/auth';
import { errorToast } from '../util/toast';

export const useLoginMutation = (
  setError: React.Dispatch<React.SetStateAction<string>>,
) => {
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
    },
  });
};

export const useEmailValidMutation = (data: object) => {
  const navigate = useNavigate();

  return useMutation(userEmailValid, {
    onSuccess(resData) {
      if (resData.message === '잘못된 접근입니다.') {
        errorToast(`${resData.message}`);
      } else if (resData.status === 404) {
        errorToast(`서버에 문제가 있습니다. 잠시 후 시도해주세요 :(`);
      } else if (resData.message === '이미 가입된 이메일 주소 입니다.') {
        errorToast(`${resData.message}`);
      } else if (resData.message === '사용 가능한 이메일 입니다.') {
        navigate('/profilesetting', {
          state: {
            data: { ...data },
          },
        });
      }
    },
    onError(err) {
      console.log(err);
    },
  });
};
