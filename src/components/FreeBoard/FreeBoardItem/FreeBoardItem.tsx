import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FreeBoardDataTypes } from '../../../types/freeBoard';
import FreeBoardItemWrapper from './styled';
import profileImg from '../../../assets/images/profile-logo.png';
import moreIcon from '../../../assets/images/icon-more-vertical.png';
import heartIcon from '../../../assets/images/icon-heart.png';
import heartOnIcon from '../../../assets/images/icon-heart-on.png';
import commentIcon from '../../../assets/images/icon-message-comment.png';
import { useSetFreeBoardPostHeartMutation } from '../../../hooks/freeBoard.hooks';

export interface PostIsHeartTypes {
  hearted: boolean;
  heartCount: number;
}

const FreeBoardItem = ({ data }: { data: FreeBoardDataTypes }) => {
  const {
    createdAt,
    id,
    content,
    commentCount,
    heartCount,
    hearted,
    image,
    author,
  } = data;

  const { accountname, username, image: profileImage } = author;
  const basicProfileImg =
    profileImage === 'http://146.56.183.55:5050/Ellipse.png'
      ? profileImg
      : profileImage;
  const postDate = createdAt.split('-');
  const [isHeart, setIsHeart] = useState({ hearted, heartCount });

  const SetFreeBoardPostHeartMutation =
    useSetFreeBoardPostHeartMutation(setIsHeart);

  const onClickIsHeartHandler = () => {
    SetFreeBoardPostHeartMutation.mutate({
      postId: id,
      isHeart: isHeart.hearted,
    });
  };

  return (
    <FreeBoardItemWrapper>
      <div className='profile-box'>
        <Link className='profile' to={`/profile/${accountname}`}>
          <img
            className='profile-image'
            src={basicProfileImg}
            alt='프로필 이미지'
          />
          <div className='user-box'>
            <p className='user-name'>{username}</p>
            <p className='user-accountname'>@ {accountname}</p>
          </div>
        </Link>

        {localStorage.getItem('accountname') === accountname && (
          <button type='button' className='more-btn'>
            <img src={moreIcon} alt='게시글 더보기 버튼' />
          </button>
        )}
      </div>
      <Link className='feed-content-box' to={`/freeboard/detail/${id}`}>
        <p className='feed-text'>{content}</p>
        <div className='img-box'>
          {image.split(',').map((imgSrc) => (
            <img
              key={imgSrc}
              className='feed-img'
              src={imgSrc}
              alt='게시물 이미지'
            />
          ))}
        </div>
      </Link>
      <div className='feed-date-box'>
        <div className='comment-heart-box'>
          <button
            type='button'
            className='heart-btn'
            onClick={onClickIsHeartHandler}
          >
            <img
              src={isHeart.hearted ? heartOnIcon : heartIcon}
              alt='하트 아이콘'
            />
            <span>{isHeart.heartCount}</span>
          </button>
          <Link to={`/freeboard/detail/${id}`} className='comment-box'>
            <img src={commentIcon} alt='댓글 아이콘' />
            <span>{commentCount}</span>
          </Link>
        </div>
        <p className='feed-date'>
          {postDate[0]}년 {postDate[1]}월 {parseInt(postDate[2], 10)}일
        </p>
      </div>
    </FreeBoardItemWrapper>
  );
};

export default FreeBoardItem;
