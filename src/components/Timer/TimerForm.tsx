import useTimer from '../../hooks/common/useTimer';
import Button from '../common/Button/Button';
import TimerFormWrapper from './styled';

const TimerForm = () => {
  const {
    timeValue,
    onChangeTimerHandler,
    onClickStartButtonHandler,
    onClickStopButtonHandler,
    onClickResetButtonHandler,
  } = useTimer();

  return (
    <TimerFormWrapper>
      <input
        type='number'
        placeholder='00'
        id='hour'
        name='hour'
        value={timeValue.hour}
        onChange={onChangeTimerHandler}
        required
      />
      <span>시간</span>
      <input
        type='number'
        placeholder='00'
        value={timeValue.min}
        id='min'
        name='min'
        required
        onChange={onChangeTimerHandler}
      />
      <span>분</span>
      <input
        type='number'
        value={timeValue.sec}
        placeholder='00'
        id='sec'
        name='sec'
        required
        onChange={onChangeTimerHandler}
      />
      <span>초</span>
      <div className='button-box'>
        <Button
          type='button'
          size='large'
          disabled={!timeValue.hour && !timeValue.min && !timeValue.sec}
          onClick={onClickStartButtonHandler}
        >
          공부 시작
        </Button>
        <Button
          type='button'
          size='large'
          disabled={!timeValue.hour && !timeValue.min && !timeValue.sec}
          onClick={onClickStopButtonHandler}
        >
          정지
        </Button>
        <Button
          type='button'
          size='large'
          disabled={!timeValue.hour && !timeValue.min && !timeValue.sec}
          onClick={onClickResetButtonHandler}
        >
          리셋
        </Button>
      </div>
    </TimerFormWrapper>
  );
};

export default TimerForm;
