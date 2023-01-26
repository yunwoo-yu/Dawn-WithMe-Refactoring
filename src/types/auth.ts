import { ChangeEvent } from 'react';

export interface LoginSignupData {
  email?: string;
  password?: string;
  username?: string;
  image?: string;
  accountname?: string;
  intro?: string;
  isActive?: boolean;
}

export interface LoginProps {
  formData: LoginSignupData;
  onChangeInputHandler(event: ChangeEvent<HTMLInputElement>): void;
  onSubmitButtonHandler(event: React.FormEvent<HTMLFormElement>): void;
  error: string;
}

export interface SignupProps {
  formData: LoginSignupData;
  onChangeInputHandler(event: ChangeEvent<HTMLInputElement>): void;
  onSubmitButtonHandler(event: React.FormEvent<HTMLFormElement>): void;
  error: LoginSignupData;
}
