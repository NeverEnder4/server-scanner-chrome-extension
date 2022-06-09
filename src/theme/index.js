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
  typography: {
    h1: {
      fontSize: 26,
      fontWeight: 'bold',
      letterSpacing: 1,
      fontFamily: 'Paytone One, sans-serif',
    },
    body1: {
      fontSize: 12,
    },
    body2: {
      fontSize: 12,
      fontWeight: 'bold',
    },
  },
  components: {
    MuiFab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'primary' && {
            backgroundColor: theme.palette.common.black,
            '&:hover': {
              backgroundColor: theme.palette.grey[900],
            },
          }),
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const styles = {};
          if (ownerState.variant === 'body1' || ownerState.variant === 'body2') {
            styles.color = theme.palette.common.white;
          }

          if (ownerState.variant === 'h1') {
            styles.color = theme.palette.primary.main;
          }

          return styles;
        },
      },
    },
  },
});

export default theme;
