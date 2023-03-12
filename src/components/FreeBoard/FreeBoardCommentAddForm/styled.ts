import styled from 'styled-components';

const FreeBoardCommentAddFormWrapper = styled.form`
  width: 100%;
  height: 60px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  background-color: ${(props) => props.theme.colors.colorBg};
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.colors.colorBorder};
  padding: 12px 16px;
  font-size: ${(props) => props.theme.fontSizes.base};

  > img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  > input {
    background-color: ${(props) => props.theme.colors.colorBg};
    border: none;
    line-height: 18px;
    margin-left: 18px;

    &::placeholder {
      color: ${(props) => props.theme.colors.colorBorder};
    }
  }

  > button {
    margin-left: auto;
    color: ${(props) => props.theme.colors.colorBorder};

    &.active {
      color: ${(props) => props.theme.colors.colorMain};
    }
  }
`;

export default FreeBoardCommentAddFormWrapper;
