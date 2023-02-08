import styled, { css } from 'styled-components';
import AuthWrapper from '../../components/common/Wrapper/AuthWrapper';

const HomeWrapper = styled(AuthWrapper)`
  ${({ theme }) => {
    return css`
      padding: 0 0 120px 0;
      overflow: scroll;

      ul {
      }
    `;
  }}
`;

export default HomeWrapper;
