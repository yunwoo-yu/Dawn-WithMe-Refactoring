import { useGetCategoryDetailFeedQuery } from '../../../hooks/category.hooks';
import CategoryFeedItem from '../CategoryFeedItem/CategoryFeedItem';

const CategoryDetailFeed = () => {
  const { data } = useGetCategoryDetailFeedQuery();

  return <CategoryFeedItem data={data.product} />;
};

export default CategoryDetailFeed;
