import { ReactNode } from 'react';
import { ChatBubbleContWrapper, ChatText } from './styled';

interface ChatBubbleContProps {
  user: string;
  children: ReactNode;
  time: string;
}

const ChatBubbleCont = ({ user, children, time }: ChatBubbleContProps) => {
  return (
    <ChatBubbleContWrapper>
      <ChatText user={user}>{children}</ChatText>
      <span className='time'>{time}</span>
    </ChatBubbleContWrapper>
  );
};

export default ChatBubbleCont;
