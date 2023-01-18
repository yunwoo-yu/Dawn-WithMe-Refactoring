import { useMutation } from '@tanstack/react-query';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [loginValue, setLoginValue] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginMutation = useMutation(postUserLogin, {
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

  const onSubmitButtonHandler = (event: KeyboardEvent) => {
    event.preventDefault();
    loginMutation.mutate({ user: loginValue });
  };
  return <div>zzz</div>;
};

export default LoginPage;
