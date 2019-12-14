import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5d68f5',
    },
    secondary: {
      main: '#00c2cc',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiLink: {
      underlineHover: {
        '&:hover': {
          color: '#00c2cc',
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
