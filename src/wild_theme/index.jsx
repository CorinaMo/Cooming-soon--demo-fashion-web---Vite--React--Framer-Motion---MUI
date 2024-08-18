import { createTheme } from '@mui/material/styles';
import { lightGreen, teal } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: lightGreen[300],
      main: lightGreen[500],
      dark: lightGreen[700],
      darker: lightGreen[900],

    },
    secondary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700],
      darker: teal[900],
    },
  },
});

export default theme;