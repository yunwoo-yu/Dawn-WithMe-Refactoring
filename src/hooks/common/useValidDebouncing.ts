import { UseMutationResult } from '@tanstack/react-query';
import debounce from 'lodash/debounce';
import { useCallback, useEffect } from 'react';

const useValidDebouncing = (
  mutationFn: UseMutationResult<any, any, string, unknown>,
  formData: string,
) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceMutation = useCallback(
    debounce((data) => {
      mutationFn.mutate(data);
    }, 500),
    [],
  );

  useEffect(() => {
    if (formData) {
      debounceMutation(formData);
    }
  }, [formData, debounceMutation]);
};

export default useValidDebouncing;
