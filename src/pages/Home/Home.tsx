import { lazy, Suspense } from 'react';
import PostToggleButton from '../../components/common/Button/PostToggleButton';
import CategoryFeedItemSkeleton from '../../components/Home/CategoryFeedItem/CategoryFeedItemSkeleton';
import RetryErrorBoundary from '../../components/common/RetryErrorBoundary/RetryErrorBoundary';
import HomeWrapper from './styled';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';

export const homeStyleProps: Partial<HeaderStyle> = {
  isSelectBox: true,
  isMoreButton: true,
};

const CategoryFeedList = lazy(
  () => import('../../components/Home/CategoryFeedList/CategoryFeedList'),
);

const Home = () => {
  return (
    <DefaultLayout styleProps={homeStyleProps}>
      <HomeWrapper>
        <RetryErrorBoundary>
          <Suspense fallback={<CategoryFeedItemSkeleton />}>
            <CategoryFeedList />
            <PostToggleButton postPath='/home/category/create' />
          </Suspense>
        </RetryErrorBoundary>
      </HomeWrapper>
    </DefaultLayout>
  );
};

export default Home;
