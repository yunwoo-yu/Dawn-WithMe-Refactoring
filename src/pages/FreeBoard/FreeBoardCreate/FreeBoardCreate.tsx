import { lazy, Suspense } from 'react';
import DefaultLayout, {
  HeaderStyle,
} from '../../../components/common/Layout/DefaultLayout/DefaultLayout';
import RetryErrorBoundary from '../../../components/common/RetryErrorBoundary/RetryErrorBoundary';
import FreeBoardCreateWrapper from './styled';

const freeBoardHeaderProps: Partial<HeaderStyle> = {
  isTitle: true,
  isBackButton: true,
  title: '게시글 등록',
  isButton: true,
  buttonText: '등록',
  formId: 'freeBoardPostAddForm',
  isTabMenu: false,
};

const FreeBoardCreatePostForm = lazy(
  () => import('../../../components/FreeBoard/FreeBoardCreatePostForm/FreeBoardCreatePostForm'),
);

const FreeBoardCreate = () => {
  return (
    <DefaultLayout styleProps={freeBoardHeaderProps}>
      <FreeBoardCreateWrapper>
        <RetryErrorBoundary>
          <Suspense>
            <FreeBoardCreatePostForm pageType='create' />
          </Suspense>
        </RetryErrorBoundary>
      </FreeBoardCreateWrapper>
    </DefaultLayout>
  );
};

export default FreeBoardCreate;
