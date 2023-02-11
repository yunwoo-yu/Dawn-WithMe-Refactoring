import styled, { css } from 'styled-components';

const CategoryItemWrapper = styled.li`
  width: 100%;
  margin: 20px 0;
  text-align: left;

  ${({ theme }) => {
    return css`
      .profile-box {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .participation {
          display: inline-block;
          height: 36px;
          font-size: ${theme.fontSizes.base};
          padding: 10px 12px;
          border: 1px solid ${theme.colors.colorWhite};
          border-radius: 18px;
          line-height: 14px;
          &:hover {
            background-color: ${theme.colors.colorMain};
            border: 1px solid ${theme.colors.colorMain};
          }
        }

        .more-btn {
          width: 18px;
          height: 18px;

          > img {
            width: 100%;
          }
        }

        .profile {
          display: inline-flex;
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
            gap: 4px;
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
      }
      .feed-content-box {
        display: block;
        margin-left: 54px;
        text-align: left;

        .feed-text {
          color: ${theme.colors.colorWhite};
          font-size: ${theme.fontSizes.xl};
          line-height: 18px;
          margin-top: 12px;
        }

        .feed-img {
          width: 100%;
          max-height: 300px;
          margin-top: 14px;
          border-radius: 16px;
          object-fit: cover;
          border: 0.5px solid ${theme.colors.colorNavBg};
        }

        .feed-date {
          color: ${theme.colors.colorBorder};
          font-size: ${theme.fontSizes.small};
          margin-top: 16px;
        }

        .personnel {
          font-size: ${theme.fontSizes.base};
          margin: 16px 0;

          & {
            text-align: right;
          }
          span {
            color: ${theme.colors.colorMain};
          }
        }
      }
    `;
  }}
`;

export default CategoryItemWrapper;
