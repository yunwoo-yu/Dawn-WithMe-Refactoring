import {
  useGetDetailFeedCommentQuery,
  useGetFreeBoardDetailFeedQuery,
} from '../../../hooks/freeBoard.hooks';
import FreeBoardCommentItem from '../FreeBoardCommentItem/FreeBoardCommentItem';
import FreeBoardItem from '../FreeBoardItem/FreeBoardItem';
import FreeBoardDetailFeedWrapper from './styled';

const FreeBoardDetailFeed = () => {
  const { data } = useGetFreeBoardDetailFeedQuery();

  const { data: commentData } = useGetDetailFeedCommentQuery();

  return (
    <FreeBoardDetailFeedWrapper>
      {data && <FreeBoardItem as='div' data={data.post} />}
      <ul>
        {commentData?.comments.map((item) => (
          <FreeBoardCommentItem data={item} key={item.id} />
        ))}
      </ul>
    </FreeBoardDetailFeedWrapper>
  );
};

export default FreeBoardDetailFeed;
