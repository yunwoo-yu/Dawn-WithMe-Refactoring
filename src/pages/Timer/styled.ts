import styled from 'styled-components';
import AuthWrapper from '../../components/common/Wrapper/AuthWrapper';

const TimerWrapper = styled(AuthWrapper)`
  h2 {
    margin-top: 50px;
    color: ${(props) => props.theme.colors.colorWhite};
    font-size: ${(props) => props.theme.fontSizes.title};
    margin-bottom: 20px;
  }

  > img {
    width: 100px;
    display: block;
    margin: 30px auto 0;
  }
`;

export default TimerWrapper;
