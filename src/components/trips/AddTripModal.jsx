import { useState } from "react";
import { useTrips } from "../../context/TripsContext";

function AddTripModal({ close }) {

  const { addTrip } = useTrips();

  const [trip, setTrip] = useState({
    tripId: `TR-${Math.floor(1000 + Math.random() * 9000)}`,
    vehicle: "",
    driver: "",
    origin: "",
    destination: "",
    distance: "",
    revenue: "",
    eta: "",
    status: "Pending",
  });

  const change = (e) => {

    setTrip({
      ...trip,
      [e.target.name]: e.target.value,
    });

  };

  const submit = (e) => {

    e.preventDefault();

    addTrip(trip);

    close();

  };

  return (

    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">

      <form
        onSubmit={submit}
        className="bg-slate-900 w-[700px] rounded-3xl border border-slate-700 p-8 space-y-5"
      >

        <div className="flex justify-between items-center">

          <h2 className="text-3xl font-bold">
            Create Trip
          </h2>

          <button
            type="button"
            onClick={close}
            className="text-2xl"
          >
            ✕
          </button>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <input
            value={trip.tripId}
            disabled
            className="bg-slate-800 rounded-xl p-3"
          />

          <input
            name="vehicle"
            placeholder="Vehicle"
            value={trip.vehicle}
            onChange={change}
            className="bg-slate-800 rounded-xl p-3"
          />

          <input
            name="driver"
            placeholder="Driver"
            value={trip.driver}
            onChange={change}
            className="bg-slate-800 rounded-xl p-3"
          />

          <input
            name="origin"
            placeholder="Origin"
            value={trip.origin}
            onChange={change}
            className="bg-slate-800 rounded-xl p-3"
          />

          <input
            name="destination"
            placeholder="Destination"
            value={trip.destination}
            onChange={change}
            className="bg-slate-800 rounded-xl p-3"
          />

          <input
            name="distance"
            placeholder="Distance"
            value={trip.distance}
            onChange={change}
            className="bg-slate-800 rounded-xl p-3"
          />

          <input
            name="revenue"
            placeholder="Revenue"
            value={trip.revenue}
            onChange={change}
            className="bg-slate-800 rounded-xl p-3"
          />

          <input
            name="eta"
            placeholder="ETA"
            value={trip.eta}
            onChange={change}
            className="bg-slate-800 rounded-xl p-3"
          />

          <select
            name="status"
            value={trip.status}
            onChange={change}
            className="bg-slate-800 rounded-xl p-3"
          >
            <option>Pending</option>
            <option>On Route</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>

        </div>

        <div className="flex justify-end gap-4">

          <button
            type="button"
            onClick={close}
            className="bg-slate-700 px-5 py-3 rounded-xl"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            Create Trip
          </button>

        </div>

      </form>

    </div>

  );

}

export default AddTripModal;