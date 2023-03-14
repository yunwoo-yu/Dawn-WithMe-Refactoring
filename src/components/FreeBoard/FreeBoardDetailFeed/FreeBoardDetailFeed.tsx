import { useGetFreeBoardDetailFeedQuery } from '../../../hooks/freeBoard.hooks';
import FreeBoardItem from '../FreeBoardItem/FreeBoardItem';
import FreeBoardDetailFeedWrapper from './styled';

const FreeBoardDetailFeed = () => {
  const { data } = useGetFreeBoardDetailFeedQuery();

  return (
    <FreeBoardDetailFeedWrapper>
      {data && <FreeBoardItem as='div' data={data.post} />}
    </FreeBoardDetailFeedWrapper>
  );
};

export default FreeBoardDetailFeed;
