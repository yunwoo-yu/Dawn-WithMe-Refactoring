import { useCallback, useEffect, useState } from 'react';

const useScreenResize = () => {
  const [heightSize, setHeightSize] = useState(window.innerHeight * 0.01);

  const setScreenSize = () => {
    document.documentElement.style.setProperty('--vh', `${heightSize}px`);
  };

  const setScreenResize = useCallback(() => {
    setHeightSize(window.innerHeight * 0.01);
  }, [heightSize]);

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenResize);
    return () => {
      window.removeEventListener('resize', setScreenResize);
    };
  }, [heightSize]);
};

export default useScreenResize;
