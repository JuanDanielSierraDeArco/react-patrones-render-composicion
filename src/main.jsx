import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App saludo="HI" nombre="Juan Da" />
  </StrictMode>,
);
