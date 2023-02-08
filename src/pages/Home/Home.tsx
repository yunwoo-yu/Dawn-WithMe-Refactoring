import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import CategoryItem from '../../components/common/FeedItem/FeedItem';

import useGetCategoryFeedQuery from '../../hooks/category.hooks';
import { FeedData } from '../../types/category';
import HomeWrapper from './styled';

const Home = () => {
  const styleProps: Partial<HeaderStyle> = {
    title: '카테고리 피드',
    isTitle: true,
    isMoreButton: true,
  };
  const { data: feedData, isLoading } = useGetCategoryFeedQuery();

  if (isLoading) return <p>로딩 중</p>;

  return (
    <DefaultLayout styleProps={styleProps}>
      <HomeWrapper>
        <ul>
          {feedData?.map((item: FeedData) => (
            <CategoryItem key={item.id} data={item} />
          ))}
        </ul>
      </HomeWrapper>
    </DefaultLayout>
  );
};

export default Home;
