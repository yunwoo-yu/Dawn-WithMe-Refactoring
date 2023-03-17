import styled, { keyframes } from 'styled-components';
import LoginButtonBackground from '../../../assets/images/login-button-background.png';

const twinkleAnimation = keyframes`
    50% {
        transform: scale(0.5);
    }
    100% {
        transform: scale(1);
    }
`;

const loginButtonOn = keyframes`
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
`;

const SplashLoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: no-repeat url(${LoginButtonBackground});
  background-size: 100% 100vh;
  position: relative;
  overflow: auto;
  margin: 0 auto;
  animation: ${loginButtonOn} 2s;

  .star-box {
    > .star {
      position: absolute;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      animation: ${twinkleAnimation} 2s infinite;
      background: rgb(223, 208, 172);
      box-shadow: 0 0 50px rgb(223, 208, 172), 0 0 50px ${({ theme }) => theme.colors.colorWhite},
        0 0 100px ${({ theme }) => theme.colors.colorWhite};

      &:nth-child(1) {
        left: 80px;
        top: 130px;
      }
      &:nth-child(2) {
        left: 130px;
        top: 340px;
      }
      &:nth-child(3) {
        right: 80px;
        top: 400px;
      }
      &:nth-child(4) {
        right: 90px;
        top: 50px;
      }
      &:nth-child(5) {
        right: 150px;
        top: 170px;
      }
      &:nth-child(6) {
        right: 350px;
        top: 50px;
      }
      &:nth-child(7) {
        right: 500px;
        top: 500px;
      }
    }
  }

  .login-box {
    width: 100%;
    height: 319px;
    padding: 50px 34px 82px;
    background-color: ${({ theme }) => theme.colors.colorBg};
    border-radius: 20px 20px 0 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    > span {
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSizes.smallMid};
      line-height: 15px;
      color: ${({ theme }) => theme.colors.colorBorder};
    }

    > a {
      display: inline-block;
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSizes.smallMid};
      color: ${({ theme }) => theme.colors.color76};
      line-height: 15px;
      margin: 20px 12px 0;

      &:hover {
        color: ${({ theme }) => theme.colors.colorMain};
      }
    }

    .button-box {
      display: flex;
      flex-direction: column;

      button {
        position: relative;
        padding: 13px 17px;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        font-weight: 400;
        background-color: transparent;

        > img {
          position: absolute;
          left: 17px;
        }

        &:nth-child(1) {
          border: 1px solid rgb(242, 201, 76);
        }
        &:nth-child(2) {
          border: 1px solid #767676;
        }
        &:nth-child(3) {
          border: 1px solid #2d9cdb;
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default SplashLoginWrapper;
