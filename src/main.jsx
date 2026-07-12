import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { VehicleProvider } from "./context/VehicleContext";
import { DriverProvider } from "./context/DriverContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VehicleProvider>
          <DriverProvider>
            <App />
          </DriverProvider>
        </VehicleProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);