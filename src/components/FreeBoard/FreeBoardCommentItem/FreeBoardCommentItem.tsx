import React from 'react';
import { FreeBoardCommentDataTypes } from '../../../types/freeBoard';
import FreeBoardCommentItemWrapper from './styled';

const FreeBoardCommentItem = ({
  data,
}: {
  data: FreeBoardCommentDataTypes;
}) => {
  const { content, createdAt, author } = data;
  const { username, image } = author;
  console.log(data);
  return (
    <FreeBoardCommentItemWrapper>
      <div className='comment-profile'>
        <img src={image} alt='' />
      </div>
      <div className='comment-content'>
        <p className='comment-username'>{username}</p>
        <p className='comment'>{content}</p>
      </div>
    </FreeBoardCommentItemWrapper>
  );
};

export default FreeBoardCommentItem;
