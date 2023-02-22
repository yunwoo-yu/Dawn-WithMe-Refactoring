import { useGetFreeBoardDetailFeedQuery } from '../../../hooks/freeBoard.hooks';
import FreeBoardCommentList from '../FreeBoardCommentList/FreeBoardCommentList';
import FreeBoardItem from '../FreeBoardItem/FreeBoardItem';

const FreeBoardDetailFeed = () => {
  const { data } = useGetFreeBoardDetailFeedQuery();

  console.log(data);

  return (
    <>
      {data && <FreeBoardItem data={data.post} />}
      <FreeBoardCommentList />
    </>
  );
};

export default FreeBoardDetailFeed;
