import { ChangeEvent } from 'react';

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginProps {
  formData: LoginData;
  onChangeInputHandler(event: ChangeEvent<HTMLInputElement>): void;
  onSubmitButtonHandler(event: React.FormEvent<HTMLFormElement>): void;
  error: string;
}
