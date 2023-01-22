import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import userLogin from '../api/user';

export const useLoginMutation = (
  setError: React.Dispatch<React.SetStateAction<string>>,
) => {
  const navigate = useNavigate();

  return useMutation(userLogin, {
    onSuccess(resData) {
      if (resData.status === 422) {
        setError(`${resData.message}`);
        return;
      }
      if (resData.message === '잘못된 접근입니다.') {
        setError(`${resData.message}`);
        return;
      }
      localStorage.setItem('accountname', resData.user.accountname);
      localStorage.setItem('token', resData.user.token);
      navigate('/home');
    },
    onError(err: any) {
      setError(`${err.message}`);
    },
  });
};

export const userSignupMutation = () => {
  // return useMutation();
};
