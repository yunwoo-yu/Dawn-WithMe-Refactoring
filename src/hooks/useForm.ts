import React, { useState } from 'react';
import isValidate from '../util/isValidate';

const useForm = <T extends object>(initialState: T) => {
  const [formData, setFormData] = useState<T>({ ...initialState });
  const [error, setError] = useState<T>({ ...initialState });

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    isValidate(name, value, setError);
  };

  return { formData, error, onChangeInputHandler };
};

export default useForm;
