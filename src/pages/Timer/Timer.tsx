import { useState, useEffect, useRef } from 'react';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import TimerForm from '../../components/Timer/TimerForm';
import TimerWrapper from './styled';
import titleLogo from '../../assets/images/title-logo.png';

const TimerHeaderProps: Partial<HeaderStyle> = {
  title: '타이머',
  isBackButton: true,
  isTitle: true,
  isMoreButton: true,
};

const Timer = () => {
  return (
    <DefaultLayout styleProps={TimerHeaderProps}>
      <TimerWrapper>
        <h2>새벽 타이머</h2>
        <p className='sub-title'>
          타이머를 설정하고 집중해서 공부 해보세요! 🔥
        </p>
        <TimerForm />
        <img src={titleLogo} alt='로고' />
      </TimerWrapper>
    </DefaultLayout>
  );
};

export default Timer;
