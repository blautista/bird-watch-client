import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    [key: string]: any; //
  }
  interface Theme {
    [key: string]: any; //
  }
}

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#e53935",
      light: "#ff6f60",
    },
    secondary: {
      main: "#4e342e",
    },
  },
  typography: {
    fontFamily: '"Helvetica", "Arial", sans-serif',
  },
});

export default muiTheme;
