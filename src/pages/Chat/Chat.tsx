import { Link } from 'react-router-dom';
import ChatUserCard from '../../components/Chat/ChatUserCard/ChatUserCard';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import ChatWrapper from './styled';

const chatHeaderProps: Partial<HeaderStyle> = {
  title: '',
  isBackButton: true,
};

const Chat = () => {
  return (
    <DefaultLayout styleProps={chatHeaderProps}>
      {/* <HeaderWrapper>
        <TopNavBar cont='back' more />
      </HeaderWrapper> */}
      <ChatWrapper>
        <ol>
          <Link to='/chatdetail'>
            <ChatUserCard status='alarm' username='윤카우' preview='사진' cont='22.12.20' />
          </Link>
          <ChatUserCard
            status='alarm'
            username='김만득'
            preview='코딩 10시간 성공! 수고하셨습니다'
            cont='22.12.19'
          />
          <ChatUserCard
            username='아산의짱'
            preview='오늘부터 아산의 공부짱은 접니다.'
            cont='22.12.17'
          />
          <ChatUserCard username='10정만점의열정' preview='화이팅~' cont='22.12.15' />
        </ol>
      </ChatWrapper>
      {/* <TabMenu /> */}
    </DefaultLayout>
  );
};

export default Chat;
