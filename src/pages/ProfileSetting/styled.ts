import styled, { css } from 'styled-components';
import AuthWrapper from '../../components/common/Wrapper/AuthWrapper';

const ProfileSettingWrapper = styled(AuthWrapper)`
  ${({ theme }) => {
    return css`
      h2 {
        margin-bottom: 12px;
      }

      .profile-subtit {
        margin-bottom: 33px;
        color: ${theme.colors.color76};
        font-weight: 400;
        font-size: ${theme.fontSizes.base};
        line-height: 14px;
      }
    `;
  }}
`;

export const ImgBackground = styled.div<{ backBg: string }>`
  width: 120px;
  height: 120px;
  background: ${({ backBg }) => (backBg ? `url(${backBg})` : '#f2f2f2')};
  background-position: center, center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  position: relative;
  margin: 0 auto;
  border-radius: 50%;

  > input {
    display: none;
  }

  button {
    width: 36px;
    height: 36px;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      display: block;
      margin: 0;
    }
  }
`;

export default ProfileSettingWrapper;
