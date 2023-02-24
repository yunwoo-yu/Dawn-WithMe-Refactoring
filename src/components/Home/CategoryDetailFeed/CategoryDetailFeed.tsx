import { useGetCategoryDetailFeedQuery } from '../../../hooks/category.hooks';
import CategoryFeedItem from '../CategoryFeedItem/CategoryFeedItem';

const CategoryDetailFeed = () => {
  const { data } = useGetCategoryDetailFeedQuery();

  return data && <CategoryFeedItem as='div' data={data.product} />;
};

export default CategoryDetailFeed;
