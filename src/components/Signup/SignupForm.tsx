import { SignupProps } from '../../types/auth';
import Button from '../common/Button/Button';
import Input from '../common/Input/Input';
import Label from '../common/Label/Label';
import SignupFormWrapper from './styled';

const SignupForm = ({ propsData }: { propsData: SignupProps }) => {
  const { formData, error, onChangeInputHandler, onSubmitButtonHandler } =
    propsData;
  const { email, password } = formData;
  const { email: errorEmail, password: errorPassword } = error;

  return (
    <SignupFormWrapper onSubmit={onSubmitButtonHandler}>
      <div>
        <Label htmlFor='signupEmail'>이메일</Label>
        <Input
          value={email}
          type='text'
          id='signupEmail'
          name='email'
          onChange={onChangeInputHandler}
          autoFocus
          required
          placeholder='이메일 주소를 입력해 주세요.'
        />
      </div>
      {errorEmail && <p>{errorEmail}</p>}
      <div>
        <Label htmlFor='signupPassword'>비밀번호</Label>
        <Input
          value={password}
          type='password'
          id='signupPassword'
          name='password'
          onChange={onChangeInputHandler}
          autoFocus
          required
          placeholder='비밀번호를 설정해 주세요.'
        />
      </div>
      {errorPassword && <p>{errorPassword}</p>}
      <Button
        width='100%'
        size='large'
        type='submit'
        disabled={!email || !password || !!errorEmail || !!errorPassword}
      >
        다음
      </Button>
    </SignupFormWrapper>
  );
};

export default SignupForm;
