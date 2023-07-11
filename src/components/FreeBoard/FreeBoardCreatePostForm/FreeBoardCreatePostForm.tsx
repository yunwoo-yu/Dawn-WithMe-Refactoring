import { FormEvent, useEffect } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import useSetImageMutation from '../../../hooks/common/useSetImageMutation';
import { useGetMyProfileDataQuery } from '../../../hooks/profile.hooks';
import FreeBoardCreatePostFormWrapper from './styled';

import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import deleteIcon from '../../../assets/images/icon-delete.png';
import uploadIcon from '../../../assets/images/upload-file.png';
import {
  useCreateFreeBoardPostMutation,
  useEditFreeBoardPostMutation,
  useGetFreeBoardDetailFeedQuery,
} from '../../../hooks/freeBoard.hooks';
import { freeBoardCreatePostValueAtom } from '../../../recoil/atom';
import { errorToast } from '../../../util/toast';

interface Props {
  pageType: 'create' | 'edit';
}

const FreeBoardCreatePostForm = ({ pageType }: Props) => {
  const { id } = useParams();
  const [postValue, setPostValue] = useRecoilState(freeBoardCreatePostValueAtom);
  const { data } = useGetMyProfileDataQuery();
  const { data: editData } = useGetFreeBoardDetailFeedQuery();
  const editFreeBoardPostMutation = useEditFreeBoardPostMutation();
  const { onClickImageFileModalHandler, imageInputRef, onChangeInputImage, imgSrc, setImgSrc } =
    useSetImageMutation();
  const { createFreeBoardPostMutation, onChangePostValueHandler, onBlurErrorMessageHandler } =
    useCreateFreeBoardPostMutation();
  const submitValue = {
    ...postValue,
    image: imgSrc.join(','),
  };

  useEffect(() => {
    if (editData) {
      const { content, image } = editData.post;

      setPostValue({ content, image });
      setImgSrc(image.split(','));
    }

    if (pageType === 'create') {
      setPostValue({ content: '', image: '' });
      setImgSrc([]);
    }
  }, [editData, pageType, setPostValue, setImgSrc]);

  const onClickImgDeleteHandler = (imgString: string) => {
    setImgSrc(imgSrc.filter((el) => el !== imgString));
  };

  const onSubmitButtonHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!postValue.content) {
      return errorToast('게시글 내용을 입력해주세요.');
    }
    if (pageType === 'create') {
      createFreeBoardPostMutation.mutate(submitValue);
    } else {
      editFreeBoardPostMutation.mutate({ post: submitValue, postId: id as string });
    }
  };

  return (
    <>
      <FreeBoardCreatePostFormWrapper
        id={pageType === 'create' ? 'freeBoardPostAddForm' : 'freeBoardPostEditForm'}
        onSubmit={onSubmitButtonHandler}
      >
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
