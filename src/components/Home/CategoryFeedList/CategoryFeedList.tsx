import { useRecoilValue } from 'recoil';
import { useGetCategoryFeedQuery } from '../../../hooks/category.hooks';
import { selectBoxValueAtom } from '../../../recoil/atom';

import { FeedData } from '../../../types/category';
import FeedItem from '../CategoryFeedItem/CategoryFeedItem';

const CategoryFeedList = () => {
  const selectValue = useRecoilValue(selectBoxValueAtom);
  const { data: feedData } = useGetCategoryFeedQuery();

  const filteredFeedList = feedData
    ?.filter((el) => el.itemName === selectValue)
    .sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return (
    <ul>
      {filteredFeedList?.map((item: FeedData) => (
        <FeedItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default CategoryFeedList;
