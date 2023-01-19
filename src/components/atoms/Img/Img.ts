import styled from 'styled-components';

const Img = styled.img<{ width: string }>`
  width: ${(props) => props.width};
`;

export default Img;
