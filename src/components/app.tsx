import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import ErrorBoundary from './error.boundary';
import { Header } from './global/header';
import Routes from './routes';

const App = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Routes />
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
