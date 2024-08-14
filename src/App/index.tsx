import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import About from './components/About/index';
import './App.scss';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import Portfolio from './components/Portfolio/index';
import '@fontsource/alfa-slab-one';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import appTheme from './types/theme';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box className='App'>
        <header>
          <Header />
        </header>
        <main>
          <About />
          <Portfolio />
          <Contact />
        </main>
        <footer>
          <Footer />
          <div id='detail'>
            <Outlet />
          </div>
        </footer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
