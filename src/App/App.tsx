
import { ThemeProvider, createTheme } from '@mui/material/styles';
import About from './About';
import './App.scss';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';
import Portfolio from './Portfolio';
import '@fontsource/alfa-slab-one';
import { Box } from '@mui/material';
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
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          fontFamily: 'Alfa Slab One',
        }}
        className='App'
      >
        <main style={{
          maxWidth: '637px',
          margin: '0 auto',
          padding: '0 10px'
        }}>
          <Header />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
          <Modal />
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default App;
