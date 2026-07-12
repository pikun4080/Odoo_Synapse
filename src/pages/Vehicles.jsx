import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import VehicleTable from "../components/vehicles/VehicleTable";
import AddVehicleModal from "../components/vehicles/AddVehicleModal";

function Vehicles() {

  const [open,setOpen]=useState(false);

  return (

    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Fleet Assets
          </h1>

          <p className="text-slate-400 mt-2">
            Manage and monitor your complete fleet.
          </p>

        </div>

        <button
          onClick={()=>setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
        >

          <FiPlus />

          Add Vehicle

        </button>

      </div>

      <div className="grid grid-cols-4 gap-5">

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
          <p className="text-slate-400">Total Vehicles</p>
          <h1 className="text-4xl font-bold mt-2">128</h1>
        </div>

        <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
          <p className="text-green-400">Available</p>
          <h1 className="text-4xl font-bold mt-2">96</h1>
        </div>

        <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/20">
          <p className="text-blue-400">On Trip</p>
          <h1 className="text-4xl font-bold mt-2">22</h1>
        </div>

        <div className="bg-yellow-500/10 rounded-2xl p-6 border border-yellow-500/20">
          <p className="text-yellow-400">Maintenance</p>
          <h1 className="text-4xl font-bold mt-2">10</h1>
        </div>

      </div>

      <VehicleTable />

      <AddVehicleModal
        open={open}
        onClose={()=>setOpen(false)}
      />

    </div>

  );

}

export default Vehicles;