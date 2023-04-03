import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import MoreIcon from '../../../assets/images/icon-more-vertical.png';
import CategoryItemWrapper from './styled';
import profileImg from '../../../assets/images/profile-logo.png';
import { FeedData } from '../../../types/category';
import { isShowModalAtom, selectBoxValueAtom } from '../../../recoil/atom';
import useModalAndAlert from '../../../hooks/common/useModalAndAlert';

const CategoryFeedItem = ({ data, as }: { data: FeedData; as?: keyof JSX.IntrinsicElements }) => {
  const { itemImage, createdAt, price, link, id, author, itemName } = data;
  const { accountname, username, image: profileImage } = author;
  const selectValue = useRecoilValue(selectBoxValueAtom);
  const modalValue = useRecoilValue(isShowModalAtom);
  const basicProfileImg =
    profileImage === 'http://146.56.183.55:5050/Ellipse.png' ? profileImg : profileImage;
  const { onClickModalOpenHandler } = useModalAndAlert();
  const postDate = createdAt.split('-');

  return (
    <CategoryItemWrapper as={as}>
      <div className='profile-box'>
        <Link
          className='profile'
          to={
            accountname === localStorage.getItem('accountname')
              ? '/myprofile'
              : `/profile/${accountname}`
          }
        >
          <img className='profile-image' src={basicProfileImg} alt='프로필 이미지' />
          <div className='user-box'>
            <p className='user-name'>{username}</p>
            <p className='user-accountname'>@ {accountname}</p>
          </div>
        </Link>
        {localStorage.getItem('accountname') !== accountname && itemName === 'study' && (
          <Link className='participation' to='/chatdetail'>
            참여하기
          </Link>
        )}
        {localStorage.getItem('accountname') === accountname && (
          <button
            type='button'
            className='more-btn'
            onClick={() =>
              onClickModalOpenHandler({
                id: 'category',
                postId: id,
                isActive: { ...modalValue.isActive, post: true },
                modalListText: [
                  { id: 1, text: '삭제' },
                  { id: 2, text: '수정' },
                ],
              })
            }
          >
            <img src={MoreIcon} alt='게시글 더보기 버튼' />
          </button>
        )}
      </div>
      <Link className='feed-content-box' to={`/home/detail/${id}`}>
        <p className='feed-text'>{link}</p>
        <div className='img-box'>
          <img className='feed-img' src={itemImage} alt='게시물 이미지' />
        </div>
      </Link>
      <div className='feed-date-box'>
        {selectValue === 'study' && (
          <p className='personnel'>
            참여 인원 {Math.ceil(price / 2)}/<span>{price}</span>
          </p>
        )}
        <p className='feed-date'>
          {postDate[0]}년 {postDate[1]}월 {parseInt(postDate[2], 10)}일
        </p>
      </div>
    </CategoryItemWrapper>
  );
};

export default CategoryFeedItem;
