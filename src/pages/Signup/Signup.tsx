import React, { lazy, Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useEmailValidMutation } from '../../hooks/valid.hooks';
import useForm from '../../hooks/common/useForm';
import useValidDebouncing from '../../hooks/common/useValidDebouncing';
import SignupWrapper from './styled';
import RetryErrorBoundary from '../../components/common/RetryErrorBoundary/RetryErrorBoundary';

const SignupForm = lazy(() => import('../../components/Signup/SignupForm'));

const Signup = () => {
  const navigate = useNavigate();
  const { formData, onChangeInputHandler } = useForm({
    email: '',
    password: '',
    isActive: true,
  });
  const [error, setError] = useState({
    email: '',
    password: '',
    isActive: true,
  });

  const emailValidMutation = useEmailValidMutation(setError);

  const onSubmitButtonHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/profilesetting', {
      state: {
        data: formData,
      },
    });
  };

  useValidDebouncing(emailValidMutation, formData.email);

  return (
    <main>
      <SignupWrapper>
        <RetryErrorBoundary>
          <Suspense>
            <h2>이메일로 회원가입</h2>
            <SignupForm
              formData={formData}
              error={error}
              onChangeInputHandler={onChangeInputHandler}
              onSubmitButtonHandler={onSubmitButtonHandler}
            />
            <Link to='/login'>로그인 하러가기</Link>
          </Suspense>
        </RetryErrorBoundary>
      </SignupWrapper>
    </main>
  );
};

export default React.memo(Signup);
