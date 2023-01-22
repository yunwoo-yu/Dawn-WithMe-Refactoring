import { useState } from 'react';

const useForm = <T extends object>(initialState: T) => {
  const [formData, setFormData] = useState(initialState);

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  return { formData, onChangeInputHandler };
};

export default useForm;
