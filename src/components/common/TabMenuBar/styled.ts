import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const TabMenuBarWrapper = styled.article`
  max-width: 600px;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #2f3136;
  z-index: 100;
`;

export const TabNavLink = styled(NavLink)`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      width: 84px;
      height: 100%;
      text-align: center;
      justify-content: center;
      align-items: center;

      p.active {
        color: ${theme.colors.colorMain};
      }

      img {
        width: 18px;
        height: 18px;
        margin-top: 6px;
      }

      p {
        margin-top: 6px;
        font-size: ${theme.fontSizes.smallMid};
        line-height: 14px;
        color: ${theme.colors.color76};
      }
    `;
  }}
`;

export default TabMenuBarWrapper;
