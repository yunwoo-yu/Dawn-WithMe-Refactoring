import styled from 'styled-components';
import AuthWrapper from '../../../components/common/Wrapper/AuthWrapper';

const MyProfileWrapper = styled(AuthWrapper)`
  padding: 0;
  overflow-y: scroll;
  text-align: left;
  padding-bottom: 120px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default MyProfileWrapper;
