import { ChangeEvent, useState } from 'react';

const useForm = <T extends object>(initialState: T) => {
  const [formData, setFormData] = useState<T>({ ...initialState });

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return { formData, onChangeInputHandler };
};

export default useForm;
