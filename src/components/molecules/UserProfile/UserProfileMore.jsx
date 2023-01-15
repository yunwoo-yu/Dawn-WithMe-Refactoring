import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import Img from '../../atoms/Img/Img';
import MoreIcon from '../../../assets/images/icon-more-vertical.png';
import { ProfileMoreWrapper } from './styled';

const UserProfileMore = ({ data, onClickMoreHandler }) => {
  const myAccountName = localStorage.getItem('accountname');
  const { author } = data;

  return (
    <ProfileMoreWrapper>
      <Link
        to={
          myAccountName === author.accountname
            ? `/myprofile`
            : `/userprofile/${author.accountname}`
        }
      >
        <UserProfile
          src={author.image}
          userName={author.username}
          userId={author.accountname}
        />
      </Link>
      <button
        type='button'
        onClick={() => {
          onClickMoreHandler(data.id, author.accountname);
        }}
      >
        <Img src={MoreIcon} alt='게시글 설정' width='18px' height='18px' />
      </button>
    </ProfileMoreWrapper>
  );
};

export default UserProfileMore;
