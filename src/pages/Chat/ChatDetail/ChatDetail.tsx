import { ChangeEvent, FormEvent, useState } from 'react';
import imgBoard from '../../../assets/images/img-board.jpeg';
import ChatInput from '../../../components/Chat/ChatInput/ChatInput';
import IBubbleCard from '../../../components/Chat/IBubbleCard/IBubbleCard';
import YouBubbleCard from '../../../components/Chat/YouBubbleCard/YouBubbleCard';
import DefaultLayout, {
  HeaderStyle,
} from '../../../components/common/Layout/DefaultLayout/DefaultLayout';
import { ChatDetailWrapper } from './styled';

const chatHeaderProps: Partial<HeaderStyle> = {
  title: '',
  isBackButton: true,
  isTabMenu: false,
};

const ChatDetail = () => {
  const [chatValue, setChatValue] = useState({ image: '', text: '' });

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setChatValue((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitButtonHandler = (event: FormEvent) => {
    event.preventDefault();

    setChatValue((prev) => ({ ...prev, text: '' }));
  };

  return (
    <DefaultLayout styleProps={chatHeaderProps}>
      <ChatDetailWrapper>
        <IBubbleCard time='12:05'>윤카우님, 안녕하세요!</IBubbleCard>
        <IBubbleCard time='12:05'>스터디 참여하고 싶부엉요😲</IBubbleCard>
        <YouBubbleCard time='12:07'>
          안녕하세요 김부엉쓰님 오랜만입니다~ 오늘은 공부 몇시간 계획하셨나요?
        </YouBubbleCard>
        <IBubbleCard time='12:08'>3시간 달려보고싶부엉요!!</IBubbleCard>
        <YouBubbleCard time='12:09'>
          네🙂 김부엉쓰님 화이팅입니다~ 공부하시고 나서, 타이머 인증 부탁드립니다.
        </YouBubbleCard>
        <img className='set-image-bubble' src={imgBoard} width='240px' alt='' />
        <ChatInput
          chatValue={chatValue}
          onChange={onChangeInputHandler}
          onSubmit={onSubmitButtonHandler}
        />
      </ChatDetailWrapper>
    </DefaultLayout>
  );
};

export default ChatDetail;
