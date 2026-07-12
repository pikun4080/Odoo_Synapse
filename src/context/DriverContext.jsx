import { createContext, useContext, useState } from "react";

const DriverContext = createContext();

export function DriverProvider({ children }) {

  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "+91 9876543210",
      license: "RJ123456",
      vehicle: "MH12AB2345",
      status: "Available",
    },
    {
      id: 2,
      name: "Aman Patel",
      phone: "+91 9876543211",
      license: "GJ654321",
      vehicle: "GJ05KL9876",
      status: "On Trip",
    },
    {
      id: 3,
      name: "Rohit Singh",
      phone: "+91 9876543212",
      license: "MH789456",
      vehicle: "-",
      status: "Leave",
    },
  ]);

  const addDriver = (driver) => {
    setDrivers((prev) => [...prev, driver]);
  };

  const updateDriver = (driver) => {
    setDrivers((prev) =>
      prev.map((d) => (d.id === driver.id ? driver : d))
    );
  };

  const deleteDriver = (id) => {
    setDrivers((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <DriverContext.Provider
      value={{
        drivers,
        addDriver,
        updateDriver,
        deleteDriver,
      }}
    >
      {children}
    </DriverContext.Provider>
  );
}

export function useDrivers() {
  return useContext(DriverContext);
}