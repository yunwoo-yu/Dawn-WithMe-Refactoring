import styled, { css } from 'styled-components';

const TopNavBarWarpper = styled.header`
  ${({ theme }) => {
    return css`
      display: flex;
      height: 48px;
      justify-content: space-between;
      align-items: center;
      padding: 12.5px 16px;
      border-bottom: 1px solid ${theme.colors.colorDB};
      background-color: ${theme.colors.colorBg};

      h2 {
        font-size: ${theme.fontSizes.xxl};
        color: ${theme.colors.colorBorder};
        line-height: 22px;
        margin-right: auto;
      }

      button {
        height: 100%;
      }
    `;
  }}
`;

export default TopNavBarWarpper;
