import { ChangeEvent, useEffect, useRef, useState } from 'react';

interface TimerTypes {
  hour: string | number;
  min: string | number;
  sec: string | number;
  isCounter: boolean;
}

const useTimer = () => {
  const [timeValue, setTimeValue] = useState<TimerTypes>({
    hour: '',
    min: '',
    sec: '',
    isCounter: false,
  });
  const { hour, min, sec, isCounter } = timeValue;
  const initialTime = useRef(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isCounter && initialTime.current !== 0) {
      timer = setInterval(() => {
        initialTime.current -= 1;
        setTimeValue((prev) => {
          return {
            ...prev,
            hour: Math.floor(initialTime.current / 60 / 60),
            min: Math.floor((initialTime.current / 60) % 60),
            sec: Math.floor(initialTime.current % 60),
          };
        });
      }, 1000);
    } else if (isCounter && initialTime.current <= 0) {
      setTimeValue({ hour: '', min: '', sec: '', isCounter: false });
      clearInterval(timer);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isCounter, sec]);

  const onChangeTimerHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setTimeValue({ ...timeValue, [name]: value });

    if (value.length > 2) {
      setTimeValue({ ...timeValue, [name]: value.substring(0, 2) });
    }
  };

  const onClickStartButtonHandler = () => {
    initialTime.current =
      Number(hour) * 60 * 60 + Number(min) * 60 + Number(sec);
    setTimeValue({ ...timeValue, isCounter: true });
  };

  const onClickStopButtonHandler = () => {
    setTimeValue((prev) => ({ ...prev, isCounter: false }));
  };

  const onClickResetButtonHandler = () => {
    setTimeValue({ hour: '', min: '', sec: '', isCounter: false });
  };

  return {
    timeValue,
    onChangeTimerHandler,
    onClickStartButtonHandler,
    onClickStopButtonHandler,
    onClickResetButtonHandler,
  };
};

export default useTimer;
