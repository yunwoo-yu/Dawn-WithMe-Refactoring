import { useGetMyFreeBoardPostList } from '../../../hooks/freeBoard.hooks';
import FreeBoardItem from '../../FreeBoard/FreeBoardItem/FreeBoardItem';

import ProfileFreeBoardPostListWrapper from './styled';

const ProfileFreeBoardPostList = () => {
  const { data } = useGetMyFreeBoardPostList();

  return (
    <ProfileFreeBoardPostListWrapper>
      <ul>
        {data &&
          data.post.map((item) => <FreeBoardItem key={item.id} data={item} />)}
      </ul>
    </ProfileFreeBoardPostListWrapper>
  );
};

export default ProfileFreeBoardPostList;
