import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { errorMessageAtom } from '../../recoil/atom';
import isValidate from '../../util/isValidate';

const useForm = <T extends object>(initialState: T) => {
  const [formData, setFormData] = useState<T>({ ...initialState });
  const [error, setError] = useRecoilState(errorMessageAtom);

  useEffect(() => {
    setError({ ...initialState });
  }, []);

  const onChangeInputHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setFormData({ ...formData, [name]: value });
      isValidate(name, value, setError);
    },
    [formData],
  );

  return { formData, error, onChangeInputHandler };
};

export default useForm;
