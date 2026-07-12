import { createContext, useContext, useState } from "react";

const DispatchContext = createContext();

export function DispatchProvider({ children }) {

  const [dispatches, setDispatches] = useState([
    {
      id: 1,
      tripId: "TR-1024",
      vehicle: "MH12AB2345",
      driver: "Rahul Sharma",
      route: "Ahmedabad → Surat",
      date: "2026-07-12",
      status: "On Route",
    },
    {
      id: 2,
      tripId: "TR-1025",
      vehicle: "GJ05KL9876",
      driver: "Aman Patel",
      route: "Vadodara → Rajkot",
      date: "2026-07-13",
      status: "Pending",
    },
  ]);

  const addDispatch = (dispatch) => {
    setDispatches([
      ...dispatches,
      {
        id: Date.now(),
        ...dispatch,
      },
    ]);
  };

  const updateDispatch = (id, data) => {
    setDispatches(
      dispatches.map((d) =>
        d.id === id ? { ...d, ...data } : d
      )
    );
  };

  const deleteDispatch = (id) => {
    setDispatches(
      dispatches.filter((d) => d.id !== id)
    );
  };

  return (
    <DispatchContext.Provider
      value={{
        dispatches,
        addDispatch,
        updateDispatch,
        deleteDispatch,
      }}
    >
      {children}
    </DispatchContext.Provider>
  );
}

export function useDispatchContext() {
  return useContext(DispatchContext);
}