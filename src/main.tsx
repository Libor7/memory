/** CUSTOM COMPONENTS */
import App from "@src/App";

/** LIBRARIES */
import { ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/** STYLES */
import "@src/index.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@src/theme/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
