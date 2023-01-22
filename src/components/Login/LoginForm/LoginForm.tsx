import { LoginProps } from '../../../types/auth';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Label from '../../common/Label/Label';
import LoginFormWrapper from './styled';

const LoginForm = ({ propsData }: { propsData: LoginProps }) => {
  const { formData, onChangeInputHandler, onSubmitButtonHandler, error } =
    propsData;
  const { email, password } = formData;

  return (
    <LoginFormWrapper onSubmit={onSubmitButtonHandler}>
      <div>
        <Label htmlFor='email'>이메일</Label>
        <Input
          type='text'
          id='email'
          name='email'
          value={email}
          onChange={onChangeInputHandler}
          placeholder='이메일을 입력해주세요.'
          autoFocus
        />
      </div>
      <div>
        <Label htmlFor='password'>비밀번호</Label>
        <Input
          value={password}
          type='password'
          id='password'
          name='password'
          placeholder='패스워드를 입력해주세요. (6자이상)'
          onChange={onChangeInputHandler}
        />
      </div>
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
