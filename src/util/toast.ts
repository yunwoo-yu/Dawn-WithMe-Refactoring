import { toast } from 'react-toastify';

export const errorToast = (text: string) => {
  toast.error(text, {
    position: 'top-center',
    autoClose: 1000,
    theme: 'dark',
  });
};

export const successToast = (text: string) => {
  toast.success(text, {
    position: 'top-center',
    autoClose: 1000,
    theme: 'dark',
  });
};
