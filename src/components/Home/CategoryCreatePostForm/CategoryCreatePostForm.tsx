import { FormEvent } from 'react';
import { useCreateCategoryPostMutation } from '../../../hooks/category.hooks';
import useSetImageMutation from '../../../hooks/common/useSetImageMutation';
import CategoryCreatePostFormWrapper from './styled';

import uploadIcon from '../../../assets/images/img-button.png';
import PostImgWrapper from '../../common/Wrapper/PostImgWrapper';
import Input from '../../common/Input/Input';
import Label from '../../common/Label/Label';
import { errorToast } from '../../../util/toast';

interface Props {
  isValue: boolean;
}

const CategoryCreatePostForm = ({ isValue }: Props) => {
  const { onClickImageFileModalHandler, imageInputRef, onChangeInputImage, imgSrc } =
    useSetImageMutation();
  const {
    postValue,
    errorMessage,
    setErrorMessage,
    onChangePostValueHandler,
    onChangeSelectBoxHandler,
    onBlurErrorMessageHandler,
    createCategoryPostMutation,
  } = useCreateCategoryPostMutation();
  const submitValue = {
    itemImage: imgSrc[0],
    ...postValue,
  };

  const onSubmitButtonHandler = (e: FormEvent) => {
    e.preventDefault();

    if (isValue) {
      Object.entries(postValue).forEach((el) => {
        if (!el[1]) {
          setErrorMessage((prev) => ({ ...prev, [el[0]]: '필수 정보 입니다.' }));
        } else {
          setErrorMessage((prev) => ({ ...prev, [el[0]]: '' }));
        }
      });

      return errorToast('게시글 내용을 입력해주세요.');
    }

    createCategoryPostMutation.mutate({ product: submitValue });
  };

  return (
    <CategoryCreatePostFormWrapper onSubmit={onSubmitButtonHandler} id='categoryPostAddForm'>
      <PostImgWrapper backBg={imgSrc[0]}>
        <input
          type='file'
          accept='image/*'
          id='imageUpload'
          ref={imageInputRef}
          onChange={onChangeInputImage}
        />
        <button type='button' onClick={onClickImageFileModalHandler}>
          <img src={uploadIcon} alt='이미지 업로드 버튼' />
        </button>
      </PostImgWrapper>
      <select
        name='itemName'
        id='itemName'
        onChange={onChangeSelectBoxHandler}
        onBlur={onBlurErrorMessageHandler}
        value={postValue.itemName}
      >
        <option value=''>카테고리 선택</option>
        <option value='study'>스터디 구해요!</option>
        <option value='music'>음악 추천 해요!</option>
        <option value='tips'>공부 꿀팁 나눠요!</option>
      </select>
      {errorMessage.itemName && (
        <span className='error-message'>{`* ${errorMessage.itemName}`}</span>
      )}
      <div className='input-box'>
        <Label>내용</Label>
        {errorMessage.link && <span className='error-message'>{`* ${errorMessage.link}`}</span>}
        <Input
          type='text'
          name='link'
          id='link'
          width='100%'
          onChange={onChangePostValueHandler}
          onBlur={onBlurErrorMessageHandler}
          value={postValue.link}
        />
      </div>
      {postValue.itemName === 'study' && (
        <div className='input-box'>
          <Label>모집 인원</Label>
          {errorMessage.price && <span className='error-message'>{`* ${errorMessage.price}`}</span>}
          <Input
            type='text'
            name='price'
            id='price'
            width='100%'
            min={1}
            max={10}
            onChange={onChangePostValueHandler}
            onBlur={onBlurErrorMessageHandler}
            value={postValue.price}
          />
        </div>
      )}
    </CategoryCreatePostFormWrapper>
  );
};

export default CategoryCreatePostForm;
