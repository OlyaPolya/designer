import { createTheme } from '@mui/material/styles';
// import { red } from '../../../public/fonts/';
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
    allVariants: {
      fontFamily: 'DelaGothicOne',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'DelaGothicOne';
          font-style: sans-serif;
          font-display: swap;
          font-weight: 400;
          src: url("../../../public/fonts/DelaGothicOne-Regular.ttf");
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
