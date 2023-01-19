import { Link } from 'react-router-dom';
import LoginWrapper from './styled';
import { LoginProps } from '../../../types/auth';
import titleLogo from '../../../assets/images/title-logo.png';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import Img from '../../atoms/Img/Img';

const LoginTemplate = ({ propsData }: { propsData: LoginProps }) => {
  return (
    <LoginWrapper>
      <h2>로그인</h2>
      <LoginForm propsData={propsData} />
      <Link to='/signup'>이메일로 회원가입</Link>
      <Img src={titleLogo} width='80px' alt='타이틀 로고' />
    </LoginWrapper>
  );
};

export default LoginTemplate;
