import { Link } from 'react-router-dom';
import { FeedData } from '../../../types/category';
import CategoryItemWrapper from './styled';
import profileImg from '../../../assets/images/profile-logo.png';

const CategoryItem = ({ data }: { data: FeedData }) => {
  const { itemImage, itemName, createdAt, updatedAt, price, link, id, author } =
    data;
  const { accountname, username, image: profileImage } = author;

  const basicProfileImg =
    profileImage === 'http://146.56.183.55:5050/Ellipse.png'
      ? profileImg
      : profileImage;
  return (
    <CategoryItemWrapper>
      <Link className='profile' to={`/home/detail/${id}`}>
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
    </CategoryItemWrapper>
  );
};

export default CategoryItem;
