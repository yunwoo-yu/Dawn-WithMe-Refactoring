import { lazy, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import RetryErrorBoundary from '../../components/common/RetryErrorBoundary/RetryErrorBoundary';

import { categoryCreatePostValueAtom } from '../../recoil/atom';
import HomeCategoryAddWrapper from './styled';

const CategoryCreatePostForm = lazy(
  () => import('../../components/Home/CategoryCreatePostForm/CategoryCreatePostForm'),
);

export const HomeCategoryCreate = () => {
  const postValue = useRecoilValue(categoryCreatePostValueAtom);
  const isValue = !postValue.itemName || !postValue.link || !postValue.price;
  const HomeCategoryAddStyleProps: Partial<HeaderStyle> = {
    isTitle: true,
    isBackButton: true,
    title: '게시글 등록',
    isButton: true,
    buttonText: '등록',
    formId: 'categoryPostAddForm',
    disabled: isValue,
  };

  return (
    <DefaultLayout styleProps={HomeCategoryAddStyleProps}>
      <HomeCategoryAddWrapper>
        <RetryErrorBoundary>
          <Suspense>
            <CategoryCreatePostForm isValue={isValue} />
          </Suspense>
        </RetryErrorBoundary>
      </HomeCategoryAddWrapper>
    </DefaultLayout>
  );
};

export default HomeCategoryCreate;
