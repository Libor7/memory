/** CUSTOM COMPONENTS */
import App from "@src/App";

/** LIBRARIES */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/** STYLES */
import "@src/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
