import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    common: {
      black: '#01060E',
      white: '#F5F5F5',
    },
    primary: {
      main: '#D90831',
    },
    secondary: {
      main: '#266B88',
      light: '#7FAEC1',
    },
    grey: {
      800: '#404751',
    },
  },
});

export default theme;
