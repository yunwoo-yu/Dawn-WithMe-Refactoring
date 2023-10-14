import profileLogo from '../../../assets/images/profile-logo.png';
import ChatUserCardWrapper from './styled';

interface ChatProps {
  status?: string;
  username: string;
  preview: string;
  cont: string;
}

const ChatUserCard = ({ status, username, preview, cont }: ChatProps) => {
  return (
    <ChatUserCardWrapper>
      <div>
        {status === 'alarm' && <span className='none-read' />}
        <img src={profileLogo} alt='프로필 사진' width='36px' />
      </div>
      <div>
        <p className='user-name'>{username}</p>
        <p className='preview-last-chat'>{preview}</p>
      </div>
      <span className='date-last-chat'>{cont}</span>
    </ChatUserCardWrapper>
  );
};

export default ChatUserCard;
