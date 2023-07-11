import { ChangeEvent } from 'react';
import { LoginFormTypes } from '../../../types/auth';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Label from '../../common/Label/Label';
import LoginFormWrapper from './styled';

export interface LoginProps {
  formData: LoginFormTypes;
  onChangeInputHandler(event: ChangeEvent<HTMLInputElement>): void;
  onSubmitButtonHandler(event: React.FormEvent<HTMLFormElement>): void;
}

const LoginForm = ({ formData, onChangeInputHandler, onSubmitButtonHandler }: LoginProps) => {
  const { email, password } = formData;

  return (
    <LoginFormWrapper onSubmit={onSubmitButtonHandler}>
      <div>
        <Label htmlFor='loginEmail'>이메일</Label>
        <Input
          type='text'
          id='loginEmail'
          name='email'
          value={email}
          onChange={onChangeInputHandler}
          placeholder='이메일을 입력해주세요.'
          required
          autoFocus
        />
      </div>
      <div>
        <Label htmlFor='loginPassword'>비밀번호</Label>
        <Input
          value={password}
          type='password'
          id='loginPassword'
          name='password'
          placeholder='패스워드를 입력해주세요. (6자이상)'
          required
          onChange={onChangeInputHandler}
        />
      </div>
      <Button width='100%' size='large' type='submit' disabled={!email || !password}>
        로그인
      </Button>
    </LoginFormWrapper>
  );
};

export default LoginForm;
