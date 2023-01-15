import styled, { css } from 'styled-components';

const CategoryDetailFeedWrapper = styled.div`
  padding: 16px 16px 90px 16px;
  ${({ theme }) => {
    return css`
      .title,
      .people {
        font-size: ${theme.fontSizes.base};
        color: ${theme.colors.colorWhite};
        margin: 16px 0;
      }
      p {
        &:nth-child(4) {
          text-align: right;
        }

        > span {
          color: ${theme.colors.colorMain};
        }
      }

      .people,
      .date {
        margin-top: 20px;
      }
      img {
        max-height: 500px;
        object-fit: contain;
      }
      .date {
        display: block;
        color: ${theme.colors.colorBorder};
        font-size: ${theme.fontSizes.small};
      }
    `;
  }}
`;

export default CategoryDetailFeedWrapper;
