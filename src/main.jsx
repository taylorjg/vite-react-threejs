import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  GlobalStyles,
  responsiveFontSizes,
} from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { threeAppInit } from "@app/three-app/three-app";

import { App } from "./App.jsx";
import { globalStyles } from "./global-styles.js";

const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
    },
  })
);

const main = async () => {
  const threeAppActions = await threeAppInit();

  createRoot(document.getElementById("react-root")).render(
    <StrictMode>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <App threeAppActions={threeAppActions} />
      </ThemeProvider>
    </StrictMode>
  );

  threeAppActions.ready();
};

main();
