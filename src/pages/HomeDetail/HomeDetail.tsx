import { lazy, Suspense } from 'react';
import DefaultLayout from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import { homeStyleProps } from '../Home/Home';
import HomeDetailWrapper from './styled';
import CategoryDetailFeedSkeleton from '../../components/Home/CategoryDetailFeed/CategoryDetailFeedSkeleton';

const homeDetailFeedStyleProps = {
  ...homeStyleProps,
  title: '카테고리 게시물',
};

const CategoryDetailFeed = lazy(
  () => import('../../components/Home/CategoryDetailFeed/CategoryDetailFeed'),
);

const HomeDetail = () => {
  return (
    <DefaultLayout styleProps={homeDetailFeedStyleProps}>
      <HomeDetailWrapper>
        <Suspense fallback={<CategoryDetailFeedSkeleton />}>
          <CategoryDetailFeed />
        </Suspense>
      </HomeDetailWrapper>
    </DefaultLayout>
  );
};

export default HomeDetail;
