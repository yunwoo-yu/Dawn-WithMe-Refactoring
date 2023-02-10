import styled from 'styled-components';

const HomeDetailWrapper = styled.section`
  height: 100%;
  padding: 16px 16px 90px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  div {
    margin: 0;
    a.feed-content-box {
      margin-left: 0;

      img.feed-img {
        width: 100%;
        height: 100%;
        max-height: 500px;
      }
    }
  }
`;

export default HomeDetailWrapper;
