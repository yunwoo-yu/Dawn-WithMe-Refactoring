import styled, { css } from 'styled-components';
import CategoryItemWrapper from '../../Home/CategoryFeedItem/styled';

const FreeBoardItemWrapper = styled(CategoryItemWrapper)`
  ${({ theme }) => {
    return css`
      margin: 0 0 20px 0;

      .comment-heart-box {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 12px;

        .heart-btn,
        .comment-box {
          display: flex;
          align-items: center;

          > img {
            width: 20px;
            height: 20px;
            margin-right: 6px;
          }

          > span {
            font-size: ${theme.fontSizes.smallMid};
            color: ${theme.colors.colorBorder};
          }
        }
      }
    `;
  }}
`;

export default FreeBoardItemWrapper;
