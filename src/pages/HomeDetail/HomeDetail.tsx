import { lazy, Suspense } from 'react';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import HomeDetailWrapper from './styled';
import CategoryDetailFeedSkeleton from '../../components/Home/CategoryDetailFeed/CategoryDetailFeedSkeleton';
import RetryErrorBoundary from '../../components/common/RetryErrorBoundary/RetryErrorBoundary';

const homeDetailFeedStyleProps: Partial<HeaderStyle> = {
  title: '카테고리 게시물',
  isBackButton: true,
  isTitle: true,
};

const CategoryDetailFeed = lazy(
  () => import('../../components/Home/CategoryDetailFeed/CategoryDetailFeed'),
);

const HomeDetail = () => {
  return (
    <DefaultLayout styleProps={homeDetailFeedStyleProps}>
      <HomeDetailWrapper>
        <RetryErrorBoundary>
          <Suspense fallback={<CategoryDetailFeedSkeleton />}>
            <CategoryDetailFeed />
          </Suspense>
        </RetryErrorBoundary>
      </HomeDetailWrapper>
    </DefaultLayout>
  );
};

export default HomeDetail;
