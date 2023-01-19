import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userLogin from '../../api/user';
import LoginTemplate from '../../components/template/LoginTemplate/LoginTemplate';
import useForm from '../../hooks/useForm';
import { LoginData } from '../../types/auth';

const LoginPage = () => {
  const { formData, onChangeInputHandler } = useForm({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginMutation = useMutation(userLogin, {
    onSuccess(resData) {
      console.log(resData);
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
      console.log(err);
    },
  });

  const onSubmitButtonHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginMutation.mutate(formData);
  };

  const propsData = {
    formData,
    onSubmitButtonHandler,
    onChangeInputHandler,
    error,
  };

  return <LoginTemplate propsData={propsData} />;
};

export default LoginPage;
