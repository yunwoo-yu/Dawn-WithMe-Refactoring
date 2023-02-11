import styled, { css } from 'styled-components';

const ProfileCategoryFeedListWrapper = styled.div`
  padding: 20px 16px;
  ${({ theme }) => {
    return css`
      border-top: 1px solid ${theme.colors.colorBorder};
      border-bottom: 1px solid ${theme.colors.colorBorder};

      select {
        position: relative;
        width: 100px;
        padding: 8px 0;
        background-color: ${theme.colors.colorBg};
        font-size: ${theme.fontSizes.xl};
        color: ${theme.colors.colorWhite};
        border: 1px solid ${theme.colors.color76};
        outline: none;
        margin: 12px 0;
      }

      ul {
        display: flex;
        overflow-x: scroll;

        gap: 10px;
        &::-webkit-scrollbar {
          display: none;
        }

        .feed-item {
          img {
            width: 140px;
            height: 90px;
            object-fit: cover;
            border-radius: 8px;
          }

          p {
            width: 130px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            margin-top: 6px;
            text-align: left;
            font-size: ${theme.fontSizes.base};
            line-height: 18px;
            &:last-child {
              margin-top: 4px;
            }
          }

          .personnel {
            color: ${theme.colors.colorMain};
            font-size: ${theme.fontSizes.smallMid};
            line-height: 15px;
          }
        }
      }
    `;
  }}
`;

export default ProfileCategoryFeedListWrapper;
