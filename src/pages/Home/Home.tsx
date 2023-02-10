import React, { Suspense } from 'react';
import CategoryFeedItemSkeleton from '../../components/Home/CategoryFeedItem/CategoryFeedItemSkeleton';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';

import HomeWrapper from './styled';

export const homeStyleProps: Partial<HeaderStyle> = {
  title: '카테고리 피드',
  isTitle: true,
  isMoreButton: true,
};
const CategoryFeedList = React.lazy(
  () => import('../../components/Home/CategoryFeedList/CategoryFeedList'),
);

const Home = () => {
  return (
    <DefaultLayout styleProps={homeStyleProps}>
      <HomeWrapper>
        <Suspense fallback={<CategoryFeedItemSkeleton />}>
          <CategoryFeedList />
        </Suspense>
      </HomeWrapper>
    </DefaultLayout>
  );
};

export default Home;
