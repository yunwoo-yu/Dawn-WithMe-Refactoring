import styled, { css } from 'styled-components';

const CategoryItemWrapper = styled.li`
  width: 100%;
  margin: 20px 0;

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
          margin-left: 12px;

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

      .feed-content-box {
        display: block;
        margin-left: 54px;
        text-align: left;

        .feed-text {
          color: ${theme.colors.colorWhite};
          font-size: ${theme.fontSizes.xl};
          line-height: 18px;
          margin-top: 16px;
        }

        .feed-img {
          width: 100%;
          max-height: 300px;
          margin-top: 16px;
          border-radius: 16px;
          object-fit: cover;
          border: 0.5px solid ${theme.colors.colorNavBg};
        }

        .feed-date {
          color: ${theme.colors.colorBorder};
          font-size: ${theme.fontSizes.small};
          margin-top: 16px;
        }
      }
    `;
  }}
`;

export default CategoryItemWrapper;
