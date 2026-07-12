import { useState } from "react";
import {
  FiEye,
  FiEdit,
  FiTrash2,
  FiSearch,
  FiFilter,
} from "react-icons/fi";

import { useVehicles } from "../../context/VehicleContext";

import VehicleDetailsDrawer from "./VehicleDetailsDrawer";
import EditVehicleModal from "./EditVehicleModal";

function VehicleTable() {

  const {
    vehicles,
    deleteVehicle,
    updateVehicle,
  } = useVehicles();

  const [search, setSearch] = useState("");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);

  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const filtered = vehicles.filter((vehicle) =>

    vehicle.registration
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    vehicle.model
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  const badge = (status) => {

    switch (status) {

      case "Available":
        return "bg-green-500/20 text-green-400";

      case "On Trip":
        return "bg-blue-500/20 text-blue-400";

      case "In Shop":
        return "bg-yellow-500/20 text-yellow-400";

      default:
        return "bg-red-500/20 text-red-400";

    }

  };

  return (

    <>

      <div className="space-y-6">

        <div className="flex justify-between">

          <div className="relative w-96">

            <FiSearch className="absolute left-4 top-4 text-slate-500" />

            <input
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search Vehicle..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-12 pr-4 py-3"
            />

          </div>

          <button className="bg-slate-900 border border-slate-800 px-5 rounded-xl flex items-center gap-2">

            <FiFilter />

            Filters

          </button>

        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800">

          <table className="w-full">

            <thead className="bg-slate-900">

              <tr>

                <th className="text-left p-5">
                  Registration
                </th>

                <th className="text-left">
                  Model
                </th>

                <th className="text-left">
                  Type
                </th>

                <th className="text-left">
                  Capacity
                </th>

                <th className="text-left">
                  Status
                </th>

                <th className="text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filtered.map((vehicle)=>(

                <tr
                  key={vehicle.id}
                  className="border-t border-slate-800 hover:bg-slate-900"
                >

                  <td className="p-5 font-semibold">
                    {vehicle.registration}
                  </td>

                  <td>
                    {vehicle.model}
                  </td>

                  <td>
                    {vehicle.type}
                  </td>

                  <td>
                    {vehicle.capacity} kg
                  </td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${badge(vehicle.status)}`}
                    >
                      {vehicle.status}
                    </span>

                  </td>

                  <td>

                    <div className="flex justify-center gap-5">

                      <button
                        onClick={()=>{
                          setSelectedVehicle(vehicle);
                          setDrawerOpen(true);
                        }}
                      >
                        <FiEye className="hover:text-blue-400"/>
                      </button>

                      <button
                        onClick={()=>{
                          setSelectedVehicle(vehicle);
                          setEditOpen(true);
                        }}
                      >
                        <FiEdit className="hover:text-green-400"/>
                      </button>

                      <button
                        onClick={()=>{
                          if(window.confirm("Delete Vehicle?")){
                            deleteVehicle(vehicle.id);
                          }
                        }}
                      >
                        <FiTrash2 className="hover:text-red-500"/>
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      <VehicleDetailsDrawer
        vehicle={selectedVehicle}
        open={drawerOpen}
        onClose={()=>setDrawerOpen(false)}
      />

      <EditVehicleModal
        vehicle={selectedVehicle}
        open={editOpen}
        onClose={()=>setEditOpen(false)}
        onSave={updateVehicle}
      />

    </>

  );

}

export default VehicleTable;