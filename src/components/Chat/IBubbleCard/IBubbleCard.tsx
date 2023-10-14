import { ReactNode } from 'react';

import ChatBubbleCont from '../ChatBubbleCont/ChatBubbleCont';
import IBubbleCardWrapper from './styled';

interface IBubbleCardProps {
  children: ReactNode;
  time: string;
}

const IBubbleCard = ({ children, time }: IBubbleCardProps) => {
  return (
    <IBubbleCardWrapper>
      <div>
        <ChatBubbleCont user='ibubble' time={time}>
          {children}
        </ChatBubbleCont>
      </div>
    </IBubbleCardWrapper>
  );
};

export default IBubbleCard;
