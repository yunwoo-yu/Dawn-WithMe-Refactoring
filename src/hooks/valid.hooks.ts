import { useMutation } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { signupAccountNameValid, signupEmailValid } from '../api/auth';
import errorMessageAtom from '../recoil/atom';

export const useEmailValidMutation = () => {
  const setError = useSetRecoilState(errorMessageAtom);

  return useMutation(signupEmailValid, {
    onSuccess(resData) {
      if (resData.message === '잘못된 접근입니다.') {
        setError((prev) => {
          return { ...prev, email: `${resData.message}`, isActive: true };
        });
      } else if (resData.status === 404) {
        setError((prev) => {
          return {
            ...prev,
            email: `서버에 문제가 있습니다. 잠시 후 시도해주세요 :(`,
            isActive: true,
          };
        });
      } else if (resData.status === 422) {
        setError((prev) => {
          return { ...prev, email: `${resData.message}`, isActive: true };
        });
      } else if (resData.message === '이미 가입된 이메일 주소 입니다.') {
        setError((prev) => {
          return { ...prev, email: `${resData.message}`, isActive: true };
        });
      } else if (resData.message === '사용 가능한 이메일 입니다.') {
        setError((prev) => {
          return { ...prev, email: '', isActive: false };
        });
      }
    },
    onError(err: any) {
      if (err.response.data.status === 422) {
        setError((prev) => {
          return { ...prev, email: err.response.data.message, isActive: true };
        });
      }
    },
  });
};

export const useAccountNameValidMutation = () => {
  const setError = useSetRecoilState(errorMessageAtom);

  return useMutation(signupAccountNameValid, {
    onSuccess(resData, variables) {
      const regAccountname = /[a-zA-Z0-9_.]{1,16}$/.test(variables);

      if (resData.message === '사용 가능한 계정ID 입니다.') {
        if (regAccountname) {
          setError((prev) => {
            return {
              ...prev,
              accountname: '',
              isActive: false,
            };
          });
        } else {
          setError((prev) => {
            return {
              ...prev,
              accountname:
                '영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다. (1~16)',
              isActive: true,
            };
          });
        }
      } else if (resData.message === '이미 가입된 계정ID 입니다.') {
        setError((prev) => {
          return {
            ...prev,
            accountname: `${resData.message}`,
            isActive: true,
          };
        });
      }
      console.log(resData);
    },
    onError(err) {
      console.log(err);
    },
  });
};
