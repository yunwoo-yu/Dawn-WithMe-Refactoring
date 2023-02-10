import styled, { css } from 'styled-components';

const ErrorBoundaryWrapper = styled.article`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 100%;
      display: flex;
      color: ${theme.colors.colorWhite};
      justify-content: center;
      align-items: center;
      flex-direction: column;

      button {
        padding: 12px;
        background-color: ${theme.colors.colorMain};
        color: ${theme.colors.colorWhite};
        border-radius: 12px;
        margin-top: 16px;
      }
    `;
  }}
`;

export default ErrorBoundaryWrapper;
