import { useState } from "react";
import { useTrips } from "../context/TripsContext";

import TripsTable from "../components/trips/TripsTable";
import AddTripModal from "../components/trips/AddTripModal";

function Trips() {

  const { trips } = useTrips();

  const [open, setOpen] = useState(false);

  return (

    <div className="space-y-8">

      <div className="flex justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Trips
          </h1>

          <p className="text-slate-400">
            Manage all fleet trips
          </p>

        </div>

        <button
          onClick={()=>setOpen(true)}
          className="bg-blue-600 px-5 py-3 rounded-xl"
        >
          + New Trip
        </button>

      </div>

      <div className="grid grid-cols-4 gap-5">

        <div className="bg-slate-900 rounded-2xl p-6">

          <h3>Total Trips</h3>

          <h1 className="text-4xl font-bold mt-3">

            {trips.length}

          </h1>

        </div>

        <div className="bg-blue-500/20 rounded-2xl p-6">

          <h3>Running</h3>

          <h1 className="text-4xl font-bold mt-3">

            {trips.filter(t=>t.status==="On Route").length}

          </h1>

        </div>

        <div className="bg-green-500/20 rounded-2xl p-6">

          <h3>Completed</h3>

          <h1 className="text-4xl font-bold mt-3">

            {trips.filter(t=>t.status==="Completed").length}

          </h1>

        </div>

        <div className="bg-yellow-500/20 rounded-2xl p-6">

          <h3>Revenue</h3>

          <h1 className="text-3xl font-bold mt-3">

            ₹59.5K

          </h1>

        </div>

      </div>

      <TripsTable/>

      {open &&

        <AddTripModal close={()=>setOpen(false)}/>

      }

    </div>

  );

}

export default Trips;