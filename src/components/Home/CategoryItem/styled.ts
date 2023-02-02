import styled, { css } from 'styled-components';

const CategoryItemWrapper = styled.li`
  margin: 20px 16px;
  ${({ theme }) => {
    return css`
      .profile {
        display: flex;
        align-items: center;
        .profile-image {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
        }
        .user-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;

          .user-name {
            color: ${theme.colors.colorBorder};
            font-weight: 500;
            font-size: ${theme.fontSizes.base};
          }

          .user-accountname {
            color: ${theme.colors.color76};
            font-size: ${theme.fontSizes.smallMid};
          }
        }
      }
    `;
  }}
`;

export default CategoryItemWrapper;
