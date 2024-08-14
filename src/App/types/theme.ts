import { createTheme } from '@mui/material/styles';

const appTheme = createTheme({
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

export default appTheme;
