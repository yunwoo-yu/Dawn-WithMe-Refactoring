import {
  useGetFreeBoardFeedListQuery,
  useGetMyFreeBoardPostListQuery,
} from '../../../hooks/freeBoard.hooks';
import { FreeBoardDataTypes } from '../../../types/freeBoard';
import FreeBoardItem from '../FreeBoardItem/FreeBoardItem';
import FreeBoardListWrapper from './styled';

const FreeBoardList = () => {
  const { data: postData } = useGetFreeBoardFeedListQuery();
  const { data: myPostData } = useGetMyFreeBoardPostListQuery();
  const freeBoardList =
    postData?.posts &&
    myPostData?.post &&
    postData.posts
      .concat(myPostData.post)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <FreeBoardListWrapper>
      {freeBoardList?.map((item: FreeBoardDataTypes) => (
        <FreeBoardItem data={item} key={item.id} />
      ))}
    </FreeBoardListWrapper>
  );
};

export default FreeBoardList;
