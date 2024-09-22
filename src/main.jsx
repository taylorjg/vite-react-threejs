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

import { threeAppInit } from "@app/three-app";
import { ThreeAppActionsProvider } from "@app/contexts";

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
  // TODO: get these from query string params
  const initialShapeIndex = 0;
  const initialColourIndex = 0;

  const threeAppActions = await threeAppInit({
    initialShapeIndex,
    initialColourIndex,
  });

  createRoot(document.getElementById("react-root")).render(
    <StrictMode>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <ThreeAppActionsProvider threeAppActions={threeAppActions}>
          <App />
        </ThreeAppActionsProvider>
      </ThemeProvider>
    </StrictMode>
  );

  threeAppActions.ready();
};

main();
