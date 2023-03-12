import { useState } from 'react';
import {
  useGetDetailFeedCommentQuery,
  useGetFreeBoardDetailFeedQuery,
} from '../../../hooks/freeBoard.hooks';
import { useGetMyProfileDataQuery } from '../../../hooks/profile.hooks';
import {
  FreeBoardCommentDataTypes,
  FreeBoardCommentListDataTypes,
} from '../../../types/freeBoard';
import FreeBoardCommentAddForm from '../FreeBoardCommentAddForm/FreeBoardCommentAddForm';
import FreeBoardCommentItem from '../FreeBoardCommentItem/FreeBoardCommentItem';
import FreeBoardItem from '../FreeBoardItem/FreeBoardItem';
import FreeBoardDetailFeedWrapper from './styled';

const FreeBoardDetailFeed = () => {
  const { data } = useGetFreeBoardDetailFeedQuery();
  const [sortedCommentData, setSortedCommentData] =
    useState<FreeBoardCommentDataTypes[]>();
  const { data: _commentData } = useGetDetailFeedCommentQuery({
    suspense: false,
    useErrorBoundary: false,
    onSuccess(comments: FreeBoardCommentListDataTypes) {
      setSortedCommentData(comments.comments.reverse());
    },
  });
  const { data: myProfile } = useGetMyProfileDataQuery({
    suspense: false,
    useErrorBoundary: false,
  });

  return (
    <FreeBoardDetailFeedWrapper>
      {data && <FreeBoardItem as='div' data={data.post} />}
      <ul className='comment-list'>
        {sortedCommentData?.map((item: FreeBoardCommentDataTypes) => (
          <FreeBoardCommentItem data={item} key={item.id} />
        ))}
      </ul>
      <FreeBoardCommentAddForm profileImg={myProfile?.image} />
    </FreeBoardDetailFeedWrapper>
  );
};

export default FreeBoardDetailFeed;
