import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Vehicles from "../pages/Vehicles";
import Drivers from "../pages/Drivers";
import Dispatch from "../pages/Dispatch";
import Trips from "../pages/Trips";
import Fuel from "../pages/Fuel";
import Maintenance from "../pages/Maintenance";
import Expenses from "../pages/Expenses";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/dispatch" element={<Dispatch />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/fuel" element={<Fuel />} />
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;