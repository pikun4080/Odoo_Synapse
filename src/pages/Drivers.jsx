import { FiPlus, FiSearch, FiEye, FiEdit, FiTrash2 } from "react-icons/fi";

const drivers = [
  {
    name: "Rahul Sharma",
    phone: "+91 9876543210",
    license: "RJ123456",
    vehicle: "MH12AB2345",
    status: "Available",
  },
  {
    name: "Aman Patel",
    phone: "+91 9876543211",
    license: "GJ654321",
    vehicle: "GJ05KL9876",
    status: "On Trip",
  },
  {
    name: "Rohit Singh",
    phone: "+91 9876543212",
    license: "MH789456",
    vehicle: "RJ14ZX1122",
    status: "Leave",
  },
];

export default function Drivers() {
  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">Drivers</h1>
          <p className="text-slate-400">Manage all drivers</p>
        </div>

        <button className="bg-blue-600 px-5 py-3 rounded-xl flex items-center gap-2">
          <FiPlus /> Add Driver
        </button>

      </div>

      <div className="flex gap-4">

        <div className="flex-1 bg-slate-800 rounded-xl px-4 py-3 flex items-center gap-3">
          <FiSearch />
          <input className="bg-transparent outline-none w-full" placeholder="Search driver..." />
        </div>

      </div>

      <div className="bg-slate-900 rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-800">

            <tr>
              <th className="p-4 text-left">Driver</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">License</th>
              <th className="p-4 text-left">Vehicle</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>

          </thead>

          <tbody>

            {drivers.map((d) => (

              <tr key={d.license} className="border-t border-slate-800 hover:bg-slate-800">

                <td className="p-4">{d.name}</td>
                <td className="p-4">{d.phone}</td>
                <td className="p-4">{d.license}</td>
                <td className="p-4">{d.vehicle}</td>

                <td className="p-4">

                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                    {d.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-4">

                    <FiEye />
                    <FiEdit />
                    <FiTrash2 />

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