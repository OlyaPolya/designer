
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

const theme = createTheme({
  typography: {
    fontFamily: 'Alfa Slab One',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Alfa Slab One';
          font-style: cursive;
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
          maxWidth: '617px',
          margin: '0 auto',
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
