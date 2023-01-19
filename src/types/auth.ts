import { ChangeEvent } from 'react';

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginProps {
  loginValue: { email: string; password: string };
  onChangeInputHandler(event: ChangeEvent<HTMLInputElement>): void;
  onSubmitButtonHandler(event: React.FormEvent<HTMLFormElement>): void;
  error: string;
}
