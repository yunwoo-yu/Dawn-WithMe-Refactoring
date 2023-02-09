import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Reset } from 'styled-reset';
import { theme } from './styles/theme';
import App from './App';
import GlobalStyled from './styles/Globalstyled';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SkeletonTheme
        baseColor={`${theme.colors.colorNavBg}`}
        highlightColor={`${theme.colors.color76}`}
      >
        <RecoilRoot>
          <Reset />
          <GlobalStyled />
          <App />
        </RecoilRoot>
      </SkeletonTheme>
    </ThemeProvider>
  </React.StrictMode>,
);
