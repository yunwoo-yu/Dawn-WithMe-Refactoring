import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import titleLogo from '../../assets/images/title-logo.png';
import LoginForm from '../../components/Login/LoginForm/LoginForm';
import { useLoginMutation } from '../../hooks/auth.hooks';
import useForm from '../../hooks/useForm';
import LoginWrapper from './styled';

const Login = () => {
  const [error, setError] = useState('');
  const { formData, onChangeInputHandler } = useForm({
    email: '',
    password: '',
  });

  const loginMutation = useLoginMutation(setError);

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

  return (
    <LoginWrapper>
      <h2>로그인</h2>
      <LoginForm propsData={propsData} />
      <Link to='/signup'>이메일로 회원가입</Link>
      <img src={titleLogo} width='80px' alt='타이틀 로고' />
    </LoginWrapper>
  );
};

export default Login;
