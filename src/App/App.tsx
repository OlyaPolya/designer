import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import About from './pages/Main/About';
import './App.scss';
import Contact from './pages/Main/Contact';
import Footer from './pages/Main/Footer';
import Header from './pages/Main/Header';
import Portfolio from './pages/Main/Portfolio';
import '@fontsource/alfa-slab-one';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#bc4ad7',
    },
  },
  typography: {
    fontFamily: 'Alfa Slab One, Roboto',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Alfa Slab One, Roboto';
          font-style: sans-serif;
          font-display: swap;
          font-weight: 400;
        }`,
    },
    MuiDialog: {
      defaultProps: {
        maxWidth: false,
      },
    },

    // MuiIconButton: {
    //   styleOverrides: {
    //     root: {
    //       '&:hover': {
    //         backgroundColor: 'pink',
    //       },
    //     },
    //   },
    // },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.MuiPaper-root': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          '&.MuiCardMedia-root': {
            backgroundColor: 'black',
          },
        },
      },
    },
  },
});

// .css-4pp0nb-MuiPaper-root-MuiDialog-paper
function App() {
  //  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  return (
    <ThemeProvider theme={theme}>
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
