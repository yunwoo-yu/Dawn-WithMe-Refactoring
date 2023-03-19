import styled from 'styled-components';

const FreeBoardCreatePostFormWrapper = styled.form`
  /* display: flex;
  flex-wrap: wrap; */
  position: relative;
  padding: 0 16px;

  .text-box {
    width: 100%;
    height: 100%;
    display: flex;

    > img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }

    textarea {
      width: 100%;
      padding: 0;
      margin-left: 16px;
      background-color: ${({ theme }) => theme.colors.colorBg};
      border: none;
      resize: none;

      &:focus {
        outline: none;
      }
    }
  }

  #imageUpload {
    display: none;
  }

  > ul {
    width: 100%;
    display: flex;
    padding: 16px 0 0 54px;
    gap: 12px;
    overflow-x: scroll;

    li {
      width: 100%;
      height: 240px;
      position: relative;

      &.multiple-img {
        min-width: 168px;
        width: 168px;
        height: 126px;
      }

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }

      > button {
        position: absolute;
        width: 22px;
        height: 25px;
        top: 0;
        right: 0;

        > img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export default FreeBoardCreatePostFormWrapper;
