import { lazy, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import DefaultLayout, {
  HeaderStyle,
} from '../../../components/common/Layout/DefaultLayout/DefaultLayout';
import RetryErrorBoundary from '../../../components/common/RetryErrorBoundary/RetryErrorBoundary';

import { categoryCreatePostValueAtom } from '../../../recoil/atom';

import HomeCategoryEditWrapper from './styled';

const CategoryCreatePostForm = lazy(
  () => import('../../../components/Home/CategoryCreatePostForm/CategoryCreatePostForm'),
);

const HomeCategoryEdit = () => {
  const postValue = useRecoilValue(categoryCreatePostValueAtom);
  const isValue = !postValue.itemName || !postValue.link || !postValue.price;

  const HomeCategoryEditStyleProps: Partial<HeaderStyle> = {
    isTitle: true,
    isBackButton: true,
    title: '게시글 수정',
    isButton: true,
    buttonText: '수정',
    formId: 'categoryPostEditForm',
    disabled: isValue,
    isTabMenu: false,
  };

  return (
    <DefaultLayout styleProps={HomeCategoryEditStyleProps}>
      <HomeCategoryEditWrapper>
        <RetryErrorBoundary>
          <Suspense>
            <CategoryCreatePostForm isValue={isValue} pageType='edit' />
          </Suspense>
        </RetryErrorBoundary>
      </HomeCategoryEditWrapper>
    </DefaultLayout>
  );
};

export default HomeCategoryEdit;
