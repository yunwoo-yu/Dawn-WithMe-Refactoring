import { useGetMyFreeBoardPostListQuery } from '../../../hooks/freeBoard.hooks';
import FreeBoardItem from '../../FreeBoard/FreeBoardItem/FreeBoardItem';

import ProfileFreeBoardPostListWrapper from './styled';

const ProfileFreeBoardPostList = () => {
  const { data } = useGetMyFreeBoardPostListQuery();

  return (
    <ProfileFreeBoardPostListWrapper>
      {data &&
        data.post?.map((item) => <FreeBoardItem key={item.id} data={item} />)}
    </ProfileFreeBoardPostListWrapper>
  );
};

export default ProfileFreeBoardPostList;
