import { Link } from 'react-router-dom';
import SignupForm from '../../components/Signup/SignupForm';
import { useEmailValidMutation } from '../../hooks/auth.hooks';
import useForm from '../../hooks/useForm';
import SignupWrapper from './styled';

const Signup = () => {
  const { formData, error, onChangeInputHandler } = useForm({
    email: '',
    password: '',
  });

  const emailValidMutation = useEmailValidMutation(formData);

  const onSubmitButtonHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailValidMutation.mutate(formData.email);
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

export default Signup;
