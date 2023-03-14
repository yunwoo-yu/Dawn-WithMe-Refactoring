import { useMutation } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { url } from '../../api/axiosBase';
import setFeedImagePost from '../../api/common';

interface Event<T = EventTarget> {
  target: T;
}

const useSetImageMutation = () => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [imgSrc, setImgSrc] = useState('');

  const onClickImageFileModalHandler = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const imageUploadMutation = useMutation(setFeedImagePost, {
    onSuccess(data) {
      console.log(data);
      setImgSrc(`${url}/1678808411473.png`);
    },
  });

  const onChangeInputImage = (event: Event<HTMLInputElement>) => {
    const formData = new FormData();
    if (event.target.files) {
      formData.append('image', event.target.files[0]);
    }

    imageUploadMutation.mutate(formData);
  };

  return {
    imageInputRef,
    onClickImageFileModalHandler,
    onChangeInputImage,
    imgSrc,
  };
};

export default useSetImageMutation;
