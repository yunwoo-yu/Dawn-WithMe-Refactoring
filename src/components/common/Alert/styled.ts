import styled from 'styled-components';

const AlertWrapper = styled.article`
  width: 254px;
  height: 122px;
  background-color: ${({ theme }) => theme.colors.colorBg};
  color: ${({ theme }) => theme.colors.colorBorder};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.colorBorder};
  z-index: 9999;
  display: flex;
  flex-wrap: wrap;

  p {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.colorBorder};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 500;
    line-height: 73px;
    text-align: center;
  }
  button {
    width: 126px;
    height: 46px;
    display: block;
    border-radius: 0 0 0 10px;
    color: ${({ theme }) => theme.colors.colorBorder};

    &:last-child {
      border-radius: 0 0 10px 0;
      border-left: 1px solid ${({ theme }) => theme.colors.colorBorder};
      color: ${({ theme }) => theme.colors.colorWarning};
    }
  }
`;
export default AlertWrapper;
