import { useEffect, useState } from 'react';
import { useGetDetailFeedCommentQuery } from '../../../hooks/freeBoard.hooks';
import { FreeBoardCommentDataTypes } from '../../../types/freeBoard';
import FreeBoardCommentItem from '../FreeBoardCommentItem/FreeBoardCommentItem';
import FreeBoardCommentListWrapper from './styled';

const FreeBoardCommentList = () => {
  const [sortedCommentData, setSortedCommentData] = useState<
    FreeBoardCommentDataTypes[]
  >([]);
  const { data: commentData } = useGetDetailFeedCommentQuery();

  useEffect(() => {
    if (commentData) {
      setSortedCommentData(() => commentData?.comments.reverse());
    }
  }, [commentData]);

  return (
    <FreeBoardCommentListWrapper className='comment-list'>
      {sortedCommentData.map((item: FreeBoardCommentDataTypes) => (
        <FreeBoardCommentItem data={item} key={item.id} />
      ))}
    </FreeBoardCommentListWrapper>
  );
};

export default FreeBoardCommentList;
