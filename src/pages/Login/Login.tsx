import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../hooks/auth.hooks';
import useForm from '../../hooks/common/useForm';

import titleLogo from '../../assets/images/title-logo.png';
import RetryErrorBoundary from '../../components/common/RetryErrorBoundary/RetryErrorBoundary';
import LoginWrapper from './styled';

const LoginForm = lazy(() => import('../../components/Login/LoginForm/LoginForm'));

const Login = () => {
  const { formData, onChangeInputHandler } = useForm({
    email: '',
    password: '',
  });

  const loginMutation = useLoginMutation();

  const onSubmitButtonHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginMutation.mutate(formData);
  };

  return (
    <main>
      <LoginWrapper>
        <RetryErrorBoundary>
          <Suspense>
            <h2>로그인</h2>
            <LoginForm
              formData={formData}
              onSubmitButtonHandler={onSubmitButtonHandler}
              onChangeInputHandler={onChangeInputHandler}
            />
            <Link to='/signup'>이메일로 회원가입</Link>
            <img src={titleLogo} width='80px' alt='타이틀 로고' />
          </Suspense>
        </RetryErrorBoundary>
      </LoginWrapper>
    </main>
  );
};

export default Login;
