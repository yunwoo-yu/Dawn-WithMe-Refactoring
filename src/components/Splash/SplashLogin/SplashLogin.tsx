import { Link } from 'react-router-dom';
import colorLogo from '../../../assets/images/color-full-logo.png';
import titleLogo from '../../../assets/images/title-logo.png';
import Button from '../../common/Button/Button';
import SplashLoginWrapper from './styled';
import iconKakaotalk from '../../../assets/images/icon-kakaotalk.png';
import iconGoogle from '../../../assets/images/icon-google.png';
import iconFacebook from '../../../assets/images/icon-facebook.png';
import { SplashLogoWrapper } from '../../../pages/Splash/styled';

const SplashLogin = () => {
  return (
    <SplashLoginWrapper>
      <div className='star-box'>
        <div className='star' />
        <div className='star' />
        <div className='star' />
        <div className='star' />
        <div className='star' />
        <div className='star' />
        <div className='star' />
      </div>
      <SplashLogoWrapper>
        <img src={colorLogo} alt='로고 캐릭터' />
        <img src={titleLogo} alt='로고 타이틀' />
      </SplashLogoWrapper>
      <div className='login-box'>
        <div className='button-box'>
          <Button width='100%' size='large' type='submit'>
            <img src={iconKakaotalk} width='18px' alt='카카오톡' />
            카카오톡 계정으로 로그인
          </Button>
          <Button width='100%' size='large' type='submit'>
            <img src={iconGoogle} width='18px' alt='구글' />
            구글 계정으로 로그인
          </Button>
          <Button width='100%' size='large' type='submit'>
            <img src={iconFacebook} width='11px' alt='페이스북' />
            페이스북 계정으로 로그인
          </Button>
        </div>
        <Link to='/login'>이메일로 로그인</Link>
        <span>|</span>
        <Link to='/signup'>회원가입</Link>
      </div>
    </SplashLoginWrapper>
  );
};

export default SplashLogin;
