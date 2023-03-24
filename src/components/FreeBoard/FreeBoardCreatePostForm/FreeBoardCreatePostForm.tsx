import { FormEvent } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import useSetImageMutation from '../../../hooks/common/useSetImageMutation';
import { useGetMyProfileDataQuery } from '../../../hooks/profile.hooks';
import FreeBoardCreatePostFormWrapper from './styled';

import uploadIcon from '../../../assets/images/upload-file.png';
import deleteIcon from '../../../assets/images/icon-delete.png';
import { useCreateFreeBoardPostMutation } from '../../../hooks/freeBoard.hooks';
import { errorToast } from '../../../util/toast';

const FreeBoardCreatePostForm = () => {
  const { data } = useGetMyProfileDataQuery();
  const { onClickImageFileModalHandler, imageInputRef, onChangeInputImage, imgSrc, setImgSrc } =
    useSetImageMutation();
  const {
    postValue,
    createFreeBoardPostMutation,
    onChangePostValueHandler,
    onBlurErrorMessageHandler,
  } = useCreateFreeBoardPostMutation();
  const submitValue = {
    ...postValue,
    image: imgSrc.join(','),
  };

  const onClickImgDeleteHandler = (imgString: string) => {
    setImgSrc(imgSrc.filter((el) => el !== imgString));
  };

  const onSubmitButtonHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!postValue.content) {
      return errorToast('게시글 내용을 입력해주세요.');
    }

    createFreeBoardPostMutation.mutate(submitValue);
  };

  return (
    <>
      <FreeBoardCreatePostFormWrapper id='freeBoardPostAddForm' onSubmit={onSubmitButtonHandler}>
        <div className='text-box'>
          <img src={data?.image} alt='프로필 이미지' />
          <ReactTextareaAutosize
            placeholder='게시글 입력하기...'
            value={postValue.content}
            onChange={onChangePostValueHandler}
            onBlur={onBlurErrorMessageHandler}
            id='content'
            name='content'
          />
        </div>
        <ul className='img-box'>
          {imgSrc.map((el) => (
            <li key={el} className={imgSrc.length > 1 ? 'multiple-img' : ''}>
              <img src={el} alt='게시물 이미지' />
              <button type='button' onClick={() => onClickImgDeleteHandler(el)}>
                <img src={deleteIcon} alt='삭제 버튼' />
              </button>
            </li>
          ))}
        </ul>
        <input
          type='file'
          multiple
          accept='image/*'
          id='imageUpload'
          ref={imageInputRef}
          onChange={onChangeInputImage}
        />
      </FreeBoardCreatePostFormWrapper>
      <button type='button' className='upload-button' onClick={onClickImageFileModalHandler}>
        <img src={uploadIcon} alt='이미지 업로드 버튼' />
      </button>
    </>
  );
};

export default FreeBoardCreatePostForm;
