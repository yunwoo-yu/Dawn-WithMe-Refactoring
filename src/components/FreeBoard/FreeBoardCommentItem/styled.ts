import styled from 'styled-components';

const FreeBoardCommentItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 0 16px;
  .comment-profile {
    display: flex;
    > a {
      display: flex;
      align-items: center;
      gap: 13px;

      .comment-username {
        color: ${(props) => props.theme.colors.colorBorder};
        font-size: ${(props) => props.theme.fontSizes.base};

        > span {
          color: ${(props) => props.theme.colors.color76};
          font-size: ${(props) => props.theme.fontSizes.small};
          vertical-align: middle;
          margin-left: 6px;
          &::before {
            content: '· ';
          }
        }
      }

      > img {
        width: 36px;
        height: 36px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    > button {
      width: 18px;
      height: 18px;
      margin: auto 0 auto auto;

      > img {
        width: 100%;
      }
    }
  }

  .comment {
    text-align: left;
    margin: 4px 0 0 49px;
    line-height: 18px;
    font-size: ${(props) => props.theme.fontSizes.base};
  }
`;

export default FreeBoardCommentItemWrapper;
