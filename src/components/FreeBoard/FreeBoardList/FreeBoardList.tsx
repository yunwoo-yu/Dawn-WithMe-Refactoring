import { useGetFreeBoardFeedList } from '../../../hooks/freeBoard.hooks';
import { FreeBoardDataTypes } from '../../../types/freeBoard';
import FreeBoardItem from '../FreeBoardItem/FreeBoardItem';
import FreeBoardListWrapper from './styled';

const FreeBoardList = () => {
  const { data } = useGetFreeBoardFeedList();

  console.log(data);

  return (
    <FreeBoardListWrapper>
      {data?.posts.map((item: FreeBoardDataTypes) => (
        <FreeBoardItem data={item} key={item.id} />
      ))}
    </FreeBoardListWrapper>
  );
};

export default FreeBoardList;
