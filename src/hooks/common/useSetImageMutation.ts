import { useMutation } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { url } from '../../api/axiosBase';
import setFeedImagePost from '../../api/common';

interface Event<T = EventTarget> {
  target: T;
}

const useSetImageMutation = () => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [imgSrc, setImgSrc] = useState<string[]>([]);

  const onClickImageFileModalHandler = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const imageUploadMutation = useMutation(setFeedImagePost, {
    onSuccess(data) {
      console.log(data);
      setImgSrc((prev) => [...prev, `${url}/${data.filename}`]);
    },
    onError(error) {
      toast.error('이미지 업로드에 실패했습니다. 다시 시도해주세요!');
    },
  });

  const onChangeInputImage = (event: Event<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();

        formData.append('image', files[i]);

        imageUploadMutation.mutate(formData);
      }
    }
  };

  return {
    imageInputRef,
    onClickImageFileModalHandler,
    onChangeInputImage,
    imgSrc,
    setImgSrc,
  };
};

export default useSetImageMutation;
