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
import { ThreeAppActionsProvider, OtherSettingsProvider } from "@app/hooks";

import { App } from "./App.jsx";
import { globalStyles } from "./global-styles.js";
import { getQueryParamsSettings } from "./query-params-settings.js";

const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
    },
  })
);

const main = async () => {
  const settings = getQueryParamsSettings();
  const threeAppActions = await threeAppInit(settings);

  createRoot(document.getElementById("react-root")).render(
    <StrictMode>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <ThreeAppActionsProvider threeAppActions={threeAppActions}>
          <OtherSettingsProvider settings={settings}>
            <App />
          </OtherSettingsProvider>
        </ThreeAppActionsProvider>
      </ThemeProvider>
    </StrictMode>
  );

  threeAppActions.ready();
};

main();
