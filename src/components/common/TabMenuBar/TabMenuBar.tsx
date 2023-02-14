import { useLocation } from 'react-router-dom';

import homeImg from '../../../assets/images/icon-home.png';
import homeImgOn from '../../../assets/images/icon-home-fill.png';
import noticeImg from '../../../assets/images/icon-notice.png';
import noticeImgOn from '../../../assets/images/icon-notice-fill.png';
import messageImg from '../../../assets/images/icon-message-circle.png';
import messageImgOn from '../../../assets/images/icon-message-circle-fill.png';
import profileImg from '../../../assets/images/icon-user.png';
import profileImgOn from '../../../assets/images/icon-user-fill.png';
import TabMenuBarWrapper, { TabNavLink } from './styled';

const TabMenu = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <TabMenuBarWrapper>
      <TabNavLink to='/home'>
        <img
          src={pathname === '/home' ? homeImgOn : homeImg}
          alt='홈 이동 버튼'
        />
        <p className={pathname === '/home' ? 'active' : ''}>홈</p>
      </TabNavLink>
      <TabNavLink to='/freeboard'>
        <img
          src={pathname === '/feed' ? noticeImgOn : noticeImg}
          alt='자유게시판 이동 버튼'
        />
        <p className={pathname === '/feed' ? 'active' : ''}>자유게시판</p>
      </TabNavLink>
      <TabNavLink to='/chat'>
        <img
          src={pathname === '/chat' ? messageImgOn : messageImg}
          alt='채팅창 이동 버튼'
        />
        <p className={pathname === '/chat' ? 'active' : ''}>채팅</p>
      </TabNavLink>
      <TabNavLink to='/myprofile'>
        <img
          src={pathname === '/myprofile' ? profileImgOn : profileImg}
          alt='프로필 이동 버튼'
        />
        <p className={pathname === '/myprofile' ? 'active' : ''}>프로필</p>
      </TabNavLink>
    </TabMenuBarWrapper>
  );
};

export default TabMenu;
