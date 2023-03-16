import { createGlobalStyle, css } from 'styled-components';

const GlobalStyled = createGlobalStyle`

  :root {
    --vh: 100%;
  }
  
  #root{
    max-width: 600px;
    margin: 0 auto;
    position: relative;
  }

*,html {
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-weight: 400;
  box-sizing: border-box;
  color: #fff;
}

button{
    background: inherit;
    border:none;
    box-shadow:none;
    border-radius:0;
    padding:0;
    overflow:visible;
    cursor:pointer
  }

  a {
    text-decoration: none;
  }

  li{
    list-style: none;
  }

  .hidden {
    position: absolute;
    z-index: -1px;
    display: inline-block;
    overflow: hidden;
    width: 1px;
    height: 1px;
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    word-break: initial;
    word-wrap: initial;
  }

input {
    &:focus {
      outline:none;
    }
    &:-webkit-autofill {
      -webkit-box-shadow: inset 0 0 0 30px #fff inset;
      -webkit-text-fill-color: #fff;
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
    }
    
  }
}
.slick-slider{

  .slick-dots{
    bottom:15px;
    
    ${({ theme }) => {
      return css`
        > li {
          margin: 0 2px;

          ${theme.device.mobile} {
            margin: 0;
          }
          button {
            &::before {
              color: #fff;
              opacity: 1;
            }

            &:hover {
              &::before {
                color: ${theme.colors.colorMain};
              }
            }
          }
        }

        .slick-active {
          button {
            &::before {
              color: ${theme.colors.colorMain};
            }
          }
        }
      `;
    }}

  .slick-slide{
  
    .img-box{
      &:focus{
        outline: none;
      }
    }
  }
}
}

`;

export default GlobalStyled;
