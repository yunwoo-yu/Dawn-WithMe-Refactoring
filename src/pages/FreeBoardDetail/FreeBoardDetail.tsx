import { lazy, Suspense } from 'react';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import RetryErrorBoundary from '../../components/common/RetryErrorBoundary/RetryErrorBoundary';
import FreeBoardDetailFeedSkeleton from '../../components/FreeBoard/FreeBoardDetailFeed/FreeBoardDetailFeedSkeleton';
import FreeBoardDetailWrapper from './styled';

const freeBoardDetailHeaderProps: Partial<HeaderStyle> = {
  title: '자유게시판 게시물',
  isTitle: true,
  isBackButton: true,
  isMoreButton: true,
  isTabMenu: false,
};

const FreeBoardDetailFeed = lazy(
  () => import('../../components/FreeBoard/FreeBoardDetailFeed/FreeBoardDetailFeed'),
);
const FreeBoardCommentList = lazy(
  () => import('../../components/FreeBoard/FreeBoardCommentList/FreeBoardCommentList'),
);
const FreeBoardCommentAddForm = lazy(
  () => import('../../components/FreeBoard/FreeBoardCommentAddForm/FreeBoardCommentAddForm'),
);

const FreeBoardDetail = () => {
  return (
    <DefaultLayout styleProps={freeBoardDetailHeaderProps}>
      <FreeBoardDetailWrapper>
        <RetryErrorBoundary>
          <Suspense fallback={<FreeBoardDetailFeedSkeleton />}>
            <FreeBoardDetailFeed />
            <FreeBoardCommentList />
            <FreeBoardCommentAddForm />
          </Suspense>
        </RetryErrorBoundary>
      </FreeBoardDetailWrapper>
    </DefaultLayout>
  );
};

export default FreeBoardDetail;
