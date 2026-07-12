import { FiSearch } from "react-icons/fi";

function VehicleFilters() {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-2 flex-1 bg-slate-800 rounded-xl px-4 py-3">
        <FiSearch className="text-slate-400" />
        <input
          placeholder="Search vehicle..."
          className="bg-transparent outline-none w-full text-white"
        />
      </div>

      <select className="bg-slate-800 rounded-xl px-4 text-white">
        <option>Status</option>
        <option>Active</option>
        <option>On Trip</option>
        <option>Maintenance</option>
      </select>

      <select className="bg-slate-800 rounded-xl px-4 text-white">
        <option>Type</option>
        <option>Truck</option>
        <option>Van</option>
        <option>Bus</option>
      </select>
    </div>
  );
}

export default VehicleFilters;