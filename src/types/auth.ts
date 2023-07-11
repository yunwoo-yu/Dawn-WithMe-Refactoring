import { ChangeEvent, FormEvent } from 'react';

export interface LoginSignupData {
  email?: string;
  password?: string;
  username?: string;
  image?: string;
  accountname?: string;
  intro?: string;
  isActive?: boolean;
}

export interface LoginFormTypes {
  email: string;
  password: string;
}

export interface SignupFormTypes extends LoginFormTypes {
  isActive: boolean;
}

export interface SignupProfileSettingFormTypes extends SignupFormTypes {
  username: string;
  image: string;
  accountname: string;
  intro: string;
}

export interface AuthPropsBasic {
  onChangeInputHandler(event: ChangeEvent<HTMLInputElement>): void;
  onSubmitButtonHandler(event: FormEvent<HTMLFormElement>): void;
}
