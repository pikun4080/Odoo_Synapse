import { FiPlus } from "react-icons/fi";

const trips = [
  {
    id: "TR001",
    vehicle: "MH12AB2345",
    driver: "Rahul",
    from: "Jaipur",
    to: "Delhi",
    status: "In Transit",
  },
  {
    id: "TR002",
    vehicle: "GJ05KL9876",
    driver: "Aman",
    from: "Ahmedabad",
    to: "Surat",
    status: "Completed",
  },
];

export default function Dispatch() {
  return (
    <div className="space-y-6">

      <div className="flex justify-between">

        <div>

          <h1 className="text-3xl font-bold">Dispatch</h1>

          <p className="text-slate-400">
            Manage active trips
          </p>

        </div>

        <button className="bg-blue-600 px-5 py-3 rounded-xl flex gap-2 items-center">

          <FiPlus />

          Create Dispatch

        </button>

      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-green-500/20 rounded-2xl p-6">
          <h2>Active Trips</h2>
          <h1 className="text-4xl font-bold mt-3">24</h1>
        </div>

        <div className="bg-blue-500/20 rounded-2xl p-6">
          <h2>Completed</h2>
          <h1 className="text-4xl font-bold mt-3">132</h1>
        </div>

        <div className="bg-yellow-500/20 rounded-2xl p-6">
          <h2>Pending</h2>
          <h1 className="text-4xl font-bold mt-3">8</h1>
        </div>

      </div>

      <div className="bg-slate-900 rounded-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-800">

            <tr>

              <th className="p-4 text-left">Trip</th>
              <th className="p-4 text-left">Vehicle</th>
              <th className="p-4 text-left">Driver</th>
              <th className="p-4 text-left">Route</th>
              <th className="p-4 text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            {trips.map((t) => (

              <tr key={t.id} className="border-t border-slate-800">

                <td className="p-4">{t.id}</td>
                <td className="p-4">{t.vehicle}</td>
                <td className="p-4">{t.driver}</td>
                <td className="p-4">{t.from} → {t.to}</td>
                <td className="p-4">{t.status}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}