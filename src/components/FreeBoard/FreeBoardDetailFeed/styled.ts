import styled from 'styled-components';

const FreeBoardDetailFeedWrapper = styled.div`
  > .freeboard-detail-wrapper {
    padding: 0 16px 20px;
    margin: 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.colorBorder};

    > .profile-box .profile .user-box {
      margin-left: 7px;
    }
  }
  > ul.comment-list {
    margin-top: 20px;
  }
`;

export default FreeBoardDetailFeedWrapper;
