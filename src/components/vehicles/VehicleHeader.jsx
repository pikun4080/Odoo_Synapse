import { FiPlus } from "react-icons/fi";

function VehicleHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">Vehicles</h1>
        <p className="text-slate-400">
          Manage your complete fleet
        </p>
      </div>

      <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition">
        <FiPlus />
        Add Vehicle
      </button>
    </div>
  );
}

export default VehicleHeader;