import { createTheme } from "@mui/material/styles";
import "@fontsource/montserrat";
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
      main: "#2b8002",
    },
    secondary: {
      main: "#580280",
    },
  },
  typography: {
    fontFamily: '"Montserrat","Helvetica", "Arial", sans-serif',
  },
});

export default muiTheme;
