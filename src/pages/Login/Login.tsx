import { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../hooks/auth.hooks';
import useForm from '../../hooks/common/useForm';

import LoginWrapper from './styled';
import titleLogo from '../../assets/images/title-logo.png';
import RetryErrorBoundary from '../../components/common/RetryErrorBoundary/RetryErrorBoundary';

const LoginForm = lazy(() => import('../../components/Login/LoginForm/LoginForm'));

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
    <main>
      <LoginWrapper>
        <RetryErrorBoundary>
          <Suspense>
            <h2>로그인</h2>
            <LoginForm propsData={propsData} />
            <Link to='/signup'>이메일로 회원가입</Link>
            <img src={titleLogo} width='80px' alt='타이틀 로고' />
          </Suspense>
        </RetryErrorBoundary>
      </LoginWrapper>
    </main>
  );
};

export default Login;
