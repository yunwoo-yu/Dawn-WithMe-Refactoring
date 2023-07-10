import { UseMutationResult } from '@tanstack/react-query';
import { debounce } from 'lodash';
import { useEffect } from 'react';

const useValidDebouncing = (
  mutationFn: UseMutationResult<any, any, string, unknown>,
  formData: string,
) => {
  const debounceMutation = debounce((data) => {
    mutationFn.mutate(data);
  }, 500);

  useEffect(() => {
    if (formData) {
      debounceMutation(formData);
    }
  }, [formData, debounceMutation]);
};

export default useValidDebouncing;
