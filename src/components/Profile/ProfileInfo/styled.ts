import styled, { css } from 'styled-components';

const ProfileInfoWrapper = styled.div`
  ${({ theme }) => {
    return css`
      padding: 30px 0 26px;
      color: ${theme.colors.colorWhite};
      border-bottom: 1px solid ${theme.colors.colorBorder};
      margin-bottom: 6px;

      .profile-img-box {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        > a {
          color: ${theme.colors.colorWhite};
          font-size: ${theme.fontSizes.xxl};
          text-align: center;
          line-height: 23px;
          > p {
            font-weight: 700;
            &:last-child {
              font-size: ${theme.fontSizes.small};
              color: ${theme.colors.color76};
              line-height: 12px;
              font-weight: 400;
            }
          }
        }

        > img {
          width: 110px;
          height: 110px;
          border-radius: 50%;
        }
      }

      .profile-text-box {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        margin-top: 30px;
        .username {
          line-height: 20px;
          color: ${theme.colors.colorMain};
          font-size: ${theme.fontSizes.xl};
          margin-bottom: 6px;
        }

        .account-name {
          color: ${theme.colors.color76};
          font-size: ${theme.fontSizes.smallMid};
          margin-bottom: 16px;
          line-height: 14px;
        }

        .intro {
          color: ${theme.colors.colorDB};
          font-size: ${theme.fontSizes.base};
          margin-bottom: 24px;
        }

        > a {
          display: block;
          width: 120px;
          margin: 0 auto;
          padding: 8px 0;
          background-color: ${theme.colors.colorMain};
          color: ${theme.colors.colorWhite};
          font-size: ${theme.fontSizes.base};
          line-height: 18px;
          border-radius: 17px;
        }
      }
    `;
  }}
`;

export default ProfileInfoWrapper;
