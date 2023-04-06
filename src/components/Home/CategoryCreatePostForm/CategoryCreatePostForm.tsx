import { FormEvent, useEffect } from 'react';
import {
  useCreateCategoryPostMutation,
  useEditCategoryPostMutation,
  useGetCategoryDetailFeedQuery,
} from '../../../hooks/category.hooks';
import useSetImageMutation from '../../../hooks/common/useSetImageMutation';
import CategoryCreatePostFormWrapper from './styled';
import uploadIcon from '../../../assets/images/img-button.png';
import PostImgWrapper from '../../common/Wrapper/PostImgWrapper';
import Input from '../../common/Input/Input';
import Label from '../../common/Label/Label';
import { useRecoilState } from 'recoil';
import { categoryCreatePostValueAtom } from '../../../recoil/atom';
import { useParams } from 'react-router-dom';

interface Props {
  isValue: boolean;
  pageType: 'create' | 'edit';
}

const CategoryCreatePostForm = ({ isValue, pageType }: Props) => {
  const [postValue, setPostValue] = useRecoilState(categoryCreatePostValueAtom);
  const { onClickImageFileModalHandler, imageInputRef, onChangeInputImage, imgSrc, setImgSrc } =
    useSetImageMutation();
  const {
    errorMessage,
    setErrorMessage,
    onChangePostValueHandler,
    onChangeSelectBoxHandler,
    onBlurErrorMessageHandler,
    createCategoryPostMutation,
  } = useCreateCategoryPostMutation();
  const editCategoryPostMutation = useEditCategoryPostMutation();
  const { id } = useParams();

  const { data: editData } = useGetCategoryDetailFeedQuery({
    enabled: pageType === 'edit',
  });

  useEffect(() => {
    if (editData) {
      const { itemImage, itemName, link, price } = editData.product;

      setPostValue({ itemName, link, price });
      setImgSrc([itemImage]);
    }

    if (pageType === 'create') {
      setPostValue({ itemName: '', link: '', price: 2 });
      setImgSrc([]);
    }
  }, []);

  const submitValue = {
    itemImage: imgSrc[imgSrc.length - 1],
    ...postValue,
  };

  const onSubmitButtonHandler = (e: FormEvent) => {
    e.preventDefault();

    if (isValue || !imgSrc.length) {
      Object.entries(submitValue).forEach((el) => {
        if (!el[1]) {
          if (el[0] === 'itemImage') {
            setErrorMessage((prev) => ({ ...prev, [el[0]]: '이미지를 선택해 주세요.' }));
            return;
          }
          setErrorMessage((prev) => ({ ...prev, [el[0]]: '필수 정보 입니다.' }));
        } else {
          setErrorMessage((prev) => ({ ...prev, [el[0]]: '' }));
        }
      });

      return;
    }

    if (pageType === 'create') {
      createCategoryPostMutation.mutate({ product: submitValue });
    } else {
      editCategoryPostMutation.mutate({ product: submitValue, productId: id as string });
    }
  };

  return (
    <CategoryCreatePostFormWrapper
      onSubmit={onSubmitButtonHandler}
      id={pageType === 'create' ? 'categoryPostAddForm' : 'categoryPostEditForm'}
    >
      <PostImgWrapper backBg={imgSrc.at(-1)}>
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
      {errorMessage.itemImage && !submitValue.itemImage && (
        <p className='error-message image-error'>{`* ${errorMessage.itemImage}`}</p>
      )}
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
