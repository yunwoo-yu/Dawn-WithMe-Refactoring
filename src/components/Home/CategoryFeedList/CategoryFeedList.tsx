import { useGetCategoryFeedQuery } from '../../../hooks/category.hooks';

import { FeedData } from '../../../types/category';
import FeedItem from '../CategoryFeedItem/CategoryFeedItem';

const CategoryFeedList = () => {
  const { data: feedData } = useGetCategoryFeedQuery();

  return (
    <ul>
      {feedData?.map((item: FeedData) => (
        <FeedItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default CategoryFeedList;
