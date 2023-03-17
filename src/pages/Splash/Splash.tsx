import { useEffect, useState } from 'react';
import SplashAnimation from '../../components/Splash/SplashAnimation/SplashAnimation';
import SplashLogin from '../../components/Splash/SplashLogin/SplashLogin';
import SplashWrapper from './styled';

const Splash = () => {
  const [splashTime, setSplashTime] = useState(false);

  useEffect(() => {
    setSplashTime(true);
    const splashTimer = setTimeout(() => {
      setSplashTime(false);
    }, 2000);
    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <SplashWrapper>
      {splashTime && <SplashAnimation />}
      {!splashTime && <SplashLogin />}
    </SplashWrapper>
  );
};

export default Splash;
