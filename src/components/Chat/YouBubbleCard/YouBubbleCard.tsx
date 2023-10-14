import YouBubbleCardWrapper from './styled';
import profileLogo from '../../../assets/images/profile-logo.png';
import { ReactNode } from 'react';
import ChatBubbleCont from '../ChatBubbleCont/ChatBubbleCont';

interface YouBubbleCardProps {
  children: ReactNode;
  time: string;
}

const YouBubbleCard = ({ children, time }: YouBubbleCardProps) => {
  return (
    <YouBubbleCardWrapper>
      <img src={profileLogo} width='42px' alt='프로필이미지' />
      <div>
        {/* <span type='username' /> */}
        <ChatBubbleCont user='yoububble' time={time}>
          {children}
        </ChatBubbleCont>
      </div>
    </YouBubbleCardWrapper>
  );
};

export default YouBubbleCard;
