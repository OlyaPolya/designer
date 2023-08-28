import { Box, ThemeProvider, Typography, createTheme } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';

const theme2 = createTheme({
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

function About() {
  return (
    <ThemeProvider theme={theme2}>
      <Box component='div' sx={{ backgroundColor: 'inherit', margin: '10px auto', fontFamily: 'Alfa Slab One' }} id='about'>
        <Typography variant='h3' sx={{ color: 'white', textAlign: 'left', lineHeight: 1, marginBottom: '20px' }}>
          Great Display Ads
          <br />
          Motion Designer
        </Typography>
        <Typography sx={{ color: 'white', textAlign: 'left', lineHeight: 1, fontSize: '14px', fontFamily: 'Roboto' }}>
          Hello, I'm Vitaly Polyansky and I'm an expert in creating animated HTML5 Display Ads. I'm trusted to work on master-animations for many of Top100 USA brands, TV Channels and AAA+ games. Solid 17 years experience, accuracy and quick
          turnaround are my core strengths. Will be happy to help your in resolving your business needs. Feel free to get in touch with me.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default About;































