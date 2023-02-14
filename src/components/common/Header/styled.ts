import styled, { css } from 'styled-components';

const TopNavBarWarpper = styled.header`
  ${({ theme }) => {
    return css`
      display: flex;
      height: 48px;
      justify-content: space-between;
      align-items: center;
      padding: 11.5px 16px;
      border-bottom: 1px solid ${theme.colors.colorDB};
      background-color: ${theme.colors.colorBg};

      h2 {
        font-size: ${theme.fontSizes.xxl};
        color: ${theme.colors.colorBorder};
        line-height: 24px;
        margin-right: auto;
      }

      .back-button {
        width: 24px;
        margin-right: 8px;
      }

      button {
        height: 100%;

        img {
          width: 24px;
          height: 24px;
        }
      }

      select {
        position: relative;
        width: 100px;
        height: 46px;
        background-color: ${theme.colors.colorBg};
        font-size: ${theme.fontSizes.xl};
        padding-left: 16px;
        margin-left: -16px;
        color: ${theme.colors.colorWhite};
        border: none;
        outline: none;
      }

      a {
        height: 100%;
      }
    `;
  }}
`;

export default TopNavBarWarpper;
