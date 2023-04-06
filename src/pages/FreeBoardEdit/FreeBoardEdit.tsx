import { lazy, Suspense } from 'react';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import RetryErrorBoundary from '../../components/common/RetryErrorBoundary/RetryErrorBoundary';
import FreeBoardEditWrapper from './styled';

const freeBoardHeaderProps: Partial<HeaderStyle> = {
  isTitle: true,
  isBackButton: true,
  title: '게시글 수정',
  isButton: true,
  buttonText: '수정',
  formId: 'freeBoardPostEditForm',
  isTabMenu: false,
};

const FreeBoardCreatePostForm = lazy(
  () => import('../../components/FreeBoard/FreeBoardCreatePostForm/FreeBoardCreatePostForm'),
);

const FreeBoardEdit = () => {
  return (
    <DefaultLayout styleProps={freeBoardHeaderProps}>
      <FreeBoardEditWrapper>
        <RetryErrorBoundary>
          <Suspense>
            <FreeBoardCreatePostForm pageType='edit' />
          </Suspense>
        </RetryErrorBoundary>
      </FreeBoardEditWrapper>
    </DefaultLayout>
  );
};

export default FreeBoardEdit;
