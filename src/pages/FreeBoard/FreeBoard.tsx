import { lazy, Suspense } from 'react';
import PostToggleButton from '../../components/common/Button/PostToggleButton';
import RetryErrorBoundary from '../../components/common/RetryErrorBoundary/RetryErrorBoundary';
import FreeBoardItemSkeleton from '../../components/FreeBoard/FreeBoardItem/FreeBoardItemSkeleton';
import FreeBoardWrapper from './styled';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';

const freeBoardHeaderProps: Partial<HeaderStyle> = {
  title: '자유게시판',
  isBackButton: true,
  isTitle: true,
  isSearch: true,
  formId: 'freeBoardPostAddForm',
};

const FreeBoardList = lazy(() => import('../../components/FreeBoard/FreeBoardList/FreeBoardList'));

const FreeBoard = () => {
  return (
    <DefaultLayout styleProps={freeBoardHeaderProps}>
      <FreeBoardWrapper>
        <RetryErrorBoundary>
          <Suspense fallback={<FreeBoardItemSkeleton />}>
            <FreeBoardList />
            <PostToggleButton postPath='/freeboard/create' />
          </Suspense>
        </RetryErrorBoundary>
      </FreeBoardWrapper>
    </DefaultLayout>
  );
};

export default FreeBoard;
