import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupForm from '../../components/Signup/SignupForm';
import { useEmailValidMutation } from '../../hooks/valid.hooks';
import useForm from '../../hooks/common/useForm';
import useValidDebouncing from '../../hooks/common/useValidDebouncing';
import SignupWrapper from './styled';

const Signup = () => {
  const navigate = useNavigate();
  const { formData, error, onChangeInputHandler } = useForm({
    email: '',
    password: '',
    isActive: true,
  });

  const emailValidMutation = useEmailValidMutation();

  const onSubmitButtonHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/profilesetting', {
      state: {
        data: formData,
      },
    });
  };

  useValidDebouncing(emailValidMutation, formData.email);

  const propsData = {
    formData,
    error,
    onChangeInputHandler,
    onSubmitButtonHandler,
  };

  return (
    <main>
      <SignupWrapper>
        <h2>이메일로 회원가입</h2>
        <SignupForm propsData={propsData} />
        <Link to='/login'>로그인 하러가기</Link>
      </SignupWrapper>
    </main>
  );
};

export default React.memo(Signup);
