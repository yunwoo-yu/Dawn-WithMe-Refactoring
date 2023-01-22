import styled from 'styled-components';
import AuthFormWrapper from '../common/Wrapper/AuthFormWrapper';

const SignupFormWrapper = styled(AuthFormWrapper)`
  div {
    padding-top: 10px;
    &:first-child {
      margin-bottom: 6px;
    }
  }
  input {
  }
  p {
    margin: 6px 0;
  }
`;

export default SignupFormWrapper;
