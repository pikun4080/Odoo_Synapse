import { createContext, useContext, useState } from "react";

const TripsContext = createContext();

export function TripsProvider({ children }) {

  const [trips, setTrips] = useState([
    {
      id: 1,
      tripId: "TR-1024",
      vehicle: "MH12AB2345",
      driver: "Rahul Sharma",
      origin: "Ahmedabad",
      destination: "Surat",
      distance: "280 km",
      revenue: "₹28,500",
      eta: "4 hrs",
      status: "On Route",
    },
    {
      id: 2,
      tripId: "TR-1025",
      vehicle: "GJ05KL9876",
      driver: "Aman Patel",
      origin: "Vadodara",
      destination: "Rajkot",
      distance: "310 km",
      revenue: "₹31,000",
      eta: "Completed",
      status: "Completed",
    },
  ]);

  const addTrip = (trip) => {
    setTrips([
      ...trips,
      {
        id: Date.now(),
        ...trip,
      },
    ]);
  };

  const updateTrip = (id, data) => {
    setTrips(
      trips.map((t) =>
        t.id === id ? { ...t, ...data } : t
      )
    );
  };

  const deleteTrip = (id) => {
    setTrips(
      trips.filter((t) => t.id !== id)
    );
  };

  return (
    <TripsContext.Provider
      value={{
        trips,
        addTrip,
        updateTrip,
        deleteTrip,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
}

export function useTrips() {
  return useContext(TripsContext);
}