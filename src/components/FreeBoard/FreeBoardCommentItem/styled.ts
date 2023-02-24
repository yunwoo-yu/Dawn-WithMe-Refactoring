import styled from 'styled-components';

const FreeBoardCommentItemWrapper = styled.li`
  display: flex;

  .comment-profile {
    > img {
      width: 36px;
      height: 36px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

export default FreeBoardCommentItemWrapper;
