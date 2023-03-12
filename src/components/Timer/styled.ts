import styled from 'styled-components';

const TimerFormWrapper = styled.form`
  > input {
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.colorBg};
    color: ${(props) => props.theme.colors.colorMain};
    font-size: ${(props) => props.theme.fontSizes.xl};
    width: 50px;
    height: 30px;
    text-align: center;
    margin-top: 30px;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  span {
    color: ${(props) => props.theme.colors.color76};
  }

  .button-box {
    display: flex;
    gap: 10px;
    margin-top: 30px;
    > button {
      flex: 1;
      border-radius: 22px;
    }
  }
`;

export default TimerFormWrapper;
