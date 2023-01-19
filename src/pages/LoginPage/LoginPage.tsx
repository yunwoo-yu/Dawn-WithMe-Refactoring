import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userLogin from '../../api/user';
import LoginTemplate from '../../components/template/LoginTemplate/LoginTemplate';
import { LoginData } from '../../types/auth';

const LoginPage = () => {
  const [loginValue, setLoginValue] = useState<LoginData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginMutation = useMutation(userLogin, {
    onSuccess(data: any) {
      if (data.status === 422) {
        setError(`${data.message}`);

        return;
      }
      localStorage.setItem('accountname', data.user.accountname);
      localStorage.setItem('token', data.user.token);
      navigate('/home');
    },
    onError(err) {
      console.log(err);
    },
  });

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginValue({ ...loginValue, [name]: value });
  };

  const onSubmitButtonHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginMutation.mutate(loginValue);
  };
  return (
    <LoginTemplate
      onChangeInputHandler={onChangeInputHandler}
      onSubmitButtonHandler={onSubmitButtonHandler}
      loginValue={loginValue}
      error={error}
    />
  );
};

export default LoginPage;
