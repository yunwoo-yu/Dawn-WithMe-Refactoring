import React from 'react';
import { Link } from 'react-router-dom';
import { FreeBoardCommentDataTypes } from '../../../types/freeBoard';
import FreeBoardCommentItemWrapper from './styled';
import moreIcon from '../../../assets/images/s-icon-more-vertical.png';

const FreeBoardCommentItem = ({
  data,
}: {
  data: FreeBoardCommentDataTypes;
}) => {
  const { content, createdAt, author } = data;
  const { username, image, accountname } = author;
  console.log(data);

  return (
    <FreeBoardCommentItemWrapper>
      <div className='comment-profile'>
        <Link to={`/profile/${accountname}`}>
          <img src={image} alt='프로필 이미지' />
          <p className='comment-username'>{username}</p>
        </Link>
        <button type='button'>
          <img src={moreIcon} alt='댓글 더보기 버튼' />
        </button>
      </div>
      <p className='comment'>{content}</p>
    </FreeBoardCommentItemWrapper>
  );
};

export default FreeBoardCommentItem;
