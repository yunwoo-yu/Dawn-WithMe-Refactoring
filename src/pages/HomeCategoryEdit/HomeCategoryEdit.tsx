import React from 'react';
import { useRecoilValue } from 'recoil';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import { categoryCreatePostValueAtom } from '../../recoil/atom';

const HomeCategoryEdit = () => {
  const postValue = useRecoilValue(categoryCreatePostValueAtom);
  const isValue = !postValue.itemName || !postValue.link || !postValue.price;

  const HomeCategoryAddStyleProps: Partial<HeaderStyle> = {
    isTitle: true,
    isBackButton: true,
    title: '게시글 수정',
    isButton: true,
    buttonText: '수정',
    formId: 'categoryPostEditForm',
    disabled: isValue,
    isTabMenu: false,
  };

  return <DefaultLayout styleProps={HomeCategoryAddStyleProps}>zz</DefaultLayout>;
};

export default HomeCategoryEdit;
