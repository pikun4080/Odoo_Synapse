import { createContext, useContext, useState } from "react";

const VehicleContext = createContext();

export function VehicleProvider({ children }) {

  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      registration: "MH12AB2345",
      model: "Tata Ace",
      type: "Mini Truck",
      capacity: 1200,
      status: "Available",
    },
    {
      id: 2,
      registration: "GJ05KL9876",
      model: "Ashok Leyland Dost",
      type: "LCV",
      capacity: 1800,
      status: "On Trip",
    },
    {
      id: 3,
      registration: "RJ14ZX1122",
      model: "Mahindra Bolero Pickup",
      type: "Pickup",
      capacity: 1500,
      status: "In Shop",
    },
  ]);

  // ==========================
  // ADD VEHICLE
  // ==========================

  const addVehicle = (vehicle) => {

    const exists = vehicles.find(
      (v) =>
        v.registration.toLowerCase() ===
        vehicle.registration.toLowerCase()
    );

    if (exists) {
      alert("Vehicle Registration already exists.");
      return;
    }

    setVehicles((prev) => [...prev, vehicle]);
  };

  // ==========================
  // UPDATE VEHICLE
  // ==========================

  const updateVehicle = (updatedVehicle) => {

    setVehicles((prev) =>
      prev.map((vehicle) =>
        vehicle.id === updatedVehicle.id
          ? updatedVehicle
          : vehicle
      )
    );

  };

  // ==========================
  // DELETE VEHICLE
  // ==========================

  const deleteVehicle = (id) => {

    setVehicles((prev) =>
      prev.filter((vehicle) => vehicle.id !== id)
    );

  };

  // ==========================
  // GET SINGLE VEHICLE
  // ==========================

  const getVehicle = (id) => {

    return vehicles.find((vehicle) => vehicle.id === id);

  };

  return (

    <VehicleContext.Provider
      value={{
        vehicles,
        addVehicle,
        updateVehicle,
        deleteVehicle,
        getVehicle,
      }}
    >

      {children}

    </VehicleContext.Provider>

  );

}

export function useVehicles() {
  return useContext(VehicleContext);
}