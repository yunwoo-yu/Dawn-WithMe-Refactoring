import { Link } from 'react-router-dom';
import { FeedData } from '../../../types/category';
import CategoryItemWrapper from './styled';
import profileImg from '../../../assets/images/profile-logo.png';

const FeedItem = ({ data }: { data: FeedData }) => {
  const { itemImage, itemName, createdAt, updatedAt, price, link, id, author } =
    data;
  const { accountname, username, image: profileImage } = author;

  const basicProfileImg =
    profileImage === 'http://146.56.183.55:5050/Ellipse.png'
      ? profileImg
      : profileImage;

  const postDate = createdAt.split('-');

  return (
    <CategoryItemWrapper>
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
      <Link className='feed-content-box' to={`/home/detail/${id}`}>
        <p className='feed-text'>{link}</p>
        <img className='feed-img' src={itemImage} alt='게시물 이미지' />
        <p className='feed-date'>
          {postDate[0]}년 {postDate[1]}월 {parseInt(postDate[2], 10)}일
        </p>
      </Link>
    </CategoryItemWrapper>
  );
};

export default FeedItem;
