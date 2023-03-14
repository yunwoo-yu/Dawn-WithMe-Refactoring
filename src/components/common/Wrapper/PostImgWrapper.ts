import styled from 'styled-components';

interface Props {
  backBg: string;
  height: string;
}

const PostImgWrapper = styled.div<Partial<Props>>`
  background: ${({ backBg }) => (backBg ? `url(${backBg})` : '#f2f2f2')};
  background-position: center, center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${(props) => props.height || '300px'};
  border-radius: 12px;
  position: relative;

  > input {
    display: none;
  }

  > button {
    background: none;
    position: absolute;
    height: 36px;
    right: 12px;
    bottom: 12px;
  }
`;

export default PostImgWrapper;
