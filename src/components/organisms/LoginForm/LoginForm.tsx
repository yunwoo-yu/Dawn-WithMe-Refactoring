import { LoginProps } from '../../../types/auth';
import Button from '../../atoms/Button/Button';
import TextFiledCard from '../../molecules/TextFiledCard/TextFiledCard';
import LoginFormWrapper from './styled';

const LoginForm = ({ propsData }: { propsData: LoginProps }) => {
  const { formData, onChangeInputHandler, onSubmitButtonHandler, error } =
    propsData;
  const { email, password } = formData;

  return (
    <LoginFormWrapper onSubmit={onSubmitButtonHandler}>
      <TextFiledCard
        value={email}
        type='text'
        id='email'
        name='email'
        onChange={onChangeInputHandler}
        autoFocus
        placeholder='이메일을 입력해주세요.'
      >
        이메일
      </TextFiledCard>
      <TextFiledCard
        value={password}
        type='password'
        id='password'
        name='password'
        placeholder='패스워드를 입력해주세요. (6자이상)'
        onChange={onChangeInputHandler}
      >
        패스워드
      </TextFiledCard>
      {error && <p>{error}</p>}
      <Button
        width='100%'
        size='large'
        type='submit'
        disabled={!email || !password}
      >
        로그인
      </Button>
    </LoginFormWrapper>
  );
};

export default LoginForm;
