import styled, { css } from 'styled-components';
import AuthWrapper from '../../components/common/Wrapper/AuthWrapper';

const HomeWrapper = styled(AuthWrapper)`
  padding: 0 0 120px 0;
  overflow-y: scroll;

  ul {
    margin: 0 16px;
  }
`;

export default HomeWrapper;
