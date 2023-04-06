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
          width: 80px;
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
          margin: 12px 0 14px;
        }

        .img-box {
          position: relative;
          width: 100%;
          padding-top: calc(100% * (9 / 16));

          .feed-img {
            position: absolute;
            object-fit: cover;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            max-height: 300px;
            border-radius: 16px;
            border: 0.5px solid ${theme.colors.colorNavBg};
          }
        }
      }
      .feed-date-box {
        margin-left: 54px;

        .feed-date {
          display: inline-block;
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

      &.detail {
        .feed-content-box {
          margin-left: 0;
        }

        .feed-date-box {
          margin-left: 0;
        }
      }
    `;
  }}
`;

export default CategoryItemWrapper;
