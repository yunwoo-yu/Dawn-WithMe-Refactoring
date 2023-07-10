import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

const useScreenResize = () => {
  const [heightSize, setHeightSize] = useState(window.innerHeight * 0.01);

  const setScreenSize = useCallback(() => {
    document.documentElement.style.setProperty('--vh', `${heightSize}px`);
  }, [heightSize]);

  const setScreenResize = debounce(() => {
    setHeightSize(window.innerHeight * 0.01);
  }, 500);

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenResize);

    return () => {
      window.removeEventListener('resize', setScreenResize);
    };
  }, [setScreenSize, setScreenResize]);
};

export default useScreenResize;
