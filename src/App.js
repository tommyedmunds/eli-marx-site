import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, Anchor, AppBar } from 'react95';
import original from 'react95/dist/themes/original';
import Nav from './components/Nav';
import NavAppBar from './components/NavAppBar';
import Start from './components/Start';
import Box from './components/Box';

const GlobalStyles = createGlobalStyle`
  ${styleReset}

  body {
    background-color: ${original.desktopBackground};
  }
`;

const App = () => (
  <div
    style={{
      overflowY: 'hidden',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    }}
  >
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <Box />
      <NavAppBar />
      {/* <Start /> */}
    </ThemeProvider>
  </div>
);

export default App;
