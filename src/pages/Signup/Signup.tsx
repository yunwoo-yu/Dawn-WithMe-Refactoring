import _, { debounce } from 'lodash';
import React, { useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupForm from '../../components/Signup/SignupForm';
import { useEmailValidMutation } from '../../hooks/auth.hooks';
import useForm from '../../hooks/useForm';
import SignupWrapper from './styled';

const Signup = () => {
  const navigate = useNavigate();
  const { formData, error, onChangeInputHandler } = useForm({
    email: '',
    password: '',
  });

  const emailValidMutation = useEmailValidMutation();

  const debounceEmailValidMutation = useCallback(
    debounce((data) => {
      emailValidMutation.mutate(data);
    }, 500),
    [],
  );

  useEffect(() => {
    if (formData.email) {
      debounceEmailValidMutation(formData.email);
    }
  }, [formData.email]);

  const onSubmitButtonHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/profilesetting', {
      state: {
        data: formData,
      },
    });
  };

  const propsData = {
    formData,
    error,
    onChangeInputHandler,
    onSubmitButtonHandler,
  };
  return (
    <SignupWrapper>
      <h2>이메일로 회원가입</h2>
      <SignupForm propsData={propsData} />
      <Link to='/login'>로그인 하러가기</Link>
    </SignupWrapper>
  );
};

export default React.memo(Signup);
