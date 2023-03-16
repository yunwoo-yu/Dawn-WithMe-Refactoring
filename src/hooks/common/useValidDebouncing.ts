import { UseMutationResult } from '@tanstack/react-query';
import { debounce } from 'lodash';
import { useCallback, useEffect } from 'react';

const useValidDebouncing = (
  mutationFn: UseMutationResult<any, any, string, unknown>,
  formData: string,
) => {
  const debounceEmailValidMutation = useCallback(
    debounce((data) => {
      mutationFn.mutate(data);
    }, 500),
    [],
  );

  useEffect(() => {
    if (formData) {
      debounceEmailValidMutation(formData);
    }
  }, [formData, debounceEmailValidMutation]);
};

export default useValidDebouncing;
