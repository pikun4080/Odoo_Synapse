import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DispatchProvider } from "./context/DispatchContext";
import "./index.css";
import { TripsProvider } from "./context/TripsContext";
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

<DispatchProvider>

<TripsProvider>

<App/>

</TripsProvider>

</DispatchProvider>

</DriverProvider>

</VehicleProvider>

</AuthProvider>
    </BrowserRouter>
  </StrictMode>
);