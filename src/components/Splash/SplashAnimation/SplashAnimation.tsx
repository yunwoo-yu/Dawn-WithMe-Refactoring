import colorLogo from '../../../assets/images/color-full-logo.png';
import titleLogo from '../../../assets/images/title-logo.png';
import { SplashLogoWrapper } from '../../../pages/Splash/styled';
import SplashAnimationWrapper from './styled';

const SplashAnimation = () => {
  return (
    <SplashAnimationWrapper>
      <div className='splash-box'>
        <SplashLogoWrapper>
          <img src={colorLogo} alt='로고 캐릭터' />
          <img src={titleLogo} alt='로고 타이틀' />
        </SplashLogoWrapper>
        <div className='splash-sun' />
      </div>
    </SplashAnimationWrapper>
  );
};

export default SplashAnimation;
