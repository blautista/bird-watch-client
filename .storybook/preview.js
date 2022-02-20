import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { muiTheme } from "../src/styles/muiTheme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => <ThemeProvider theme={muiTheme}>{Story()}</ThemeProvider>,
];
