import { useState } from "react";
import {
  FiEye,
  FiEdit,
  FiTrash2,
  FiSearch,
  FiFilter,
} from "react-icons/fi";

function DispatchTable({
  dispatches,
  onView,
  onEdit,
}) {

  const [search, setSearch] = useState("");

  const filtered = dispatches.filter((item) => {

    const q = search.toLowerCase();

    return (
      item.tripId.toLowerCase().includes(q) ||
      item.driver.toLowerCase().includes(q) ||
      item.vehicle.toLowerCase().includes(q) ||
      item.route.toLowerCase().includes(q)
    );

  });

  const badge = (status) => {

    switch (status) {

      case "Pending":
        return "bg-yellow-500/20 text-yellow-400";

      case "On Route":
        return "bg-blue-500/20 text-blue-400";

      case "Completed":
        return "bg-green-500/20 text-green-400";

      case "Cancelled":
        return "bg-red-500/20 text-red-400";

      default:
        return "bg-slate-700 text-white";

    }

  };

  return (

    <div className="space-y-6">

      <div className="flex justify-between">

        <div className="relative w-96">

          <FiSearch className="absolute left-4 top-4 text-slate-500"/>

          <input
            placeholder="Search Dispatch..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-12 pr-4 outline-none"
          />

        </div>

        <button className="bg-slate-900 border border-slate-800 rounded-xl px-5 flex items-center gap-2">

          <FiFilter/>

          Filter

        </button>

      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-800">

        <table className="w-full">

          <thead className="bg-slate-900">

            <tr>

              <th className="text-left p-5">
                Trip ID
              </th>

              <th className="text-left">
                Vehicle
              </th>

              <th className="text-left">
                Driver
              </th>

              <th className="text-left">
                Route
              </th>

              <th className="text-left">
                Date
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

            {filtered.map((item)=>(

              <tr
                key={item.id}
                className="border-t border-slate-800 hover:bg-slate-900 transition"
              >

                <td className="p-5 font-semibold">

                  {item.tripId}

                </td>

                <td>

                  {item.vehicle}

                </td>

                <td>

                  {item.driver}

                </td>

                <td>

                  {item.route}

                </td>

                <td>

                  {item.date}

                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${badge(item.status)}`}
                  >

                    {item.status}

                  </span>

                </td>

                <td>

                  <div className="flex justify-center gap-5">

                    <button
                      onClick={()=>onView(item)}
                    >
                      <FiEye className="hover:text-blue-400"/>
                    </button>

                    <button
                      onClick={()=>onEdit(item)}
                    >
                      <FiEdit className="hover:text-green-400"/>
                    </button>

                    <button>

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

  );

}

export default DispatchTable;