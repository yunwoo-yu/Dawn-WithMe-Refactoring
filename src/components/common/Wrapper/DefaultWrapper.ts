import styled, { css } from 'styled-components';

const DefaultMainWrapper = styled.main`
  max-width: 600px;
  height: calc((var(--vh, 1vh) * 100) - 48px);
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorBg};
    `;
  }}
`;

export default DefaultMainWrapper;
