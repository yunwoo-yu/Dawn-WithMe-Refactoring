import styled from 'styled-components';
import AuthWrapper from '../../components/common/Wrapper/AuthWrapper';

const SplashWrapper = styled(AuthWrapper)`
  padding: 0;
  background-color: rgb(56, 28, 121);
`;

export const SplashLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;

  img {
    width: 180px;
  }

  img:nth-child(2) {
    width: 180px;
    padding-top: 50px;
  }
`;
export default SplashWrapper;
