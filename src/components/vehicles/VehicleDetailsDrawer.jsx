import {
    FiX,
    FiTruck,
    FiUser,
    FiMapPin,
    FiTool,
    FiCalendar,
  } from "react-icons/fi";
  
  function VehicleDetailsDrawer({ vehicle, open, onClose }) {
  
    if (!open || !vehicle) return null;
  
    return (
      <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
  
        <div className="w-[500px] h-full bg-slate-950 border-l border-slate-800 p-8 overflow-y-auto">
  
          <div className="flex justify-between items-center">
  
            <h1 className="text-3xl font-bold">
              Vehicle Details
            </h1>
  
            <button
              onClick={onClose}
              className="text-2xl hover:text-red-400"
            >
              <FiX />
            </button>
  
          </div>
  
          <div className="flex justify-center mt-8">
  
            <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center">
  
              <FiTruck size={50} />
  
            </div>
  
          </div>
  
          <div className="mt-8 space-y-5">
  
            <div className="flex justify-between">
              <span className="text-slate-400">Registration</span>
              <span>{vehicle.registration}</span>
            </div>
  
            <div className="flex justify-between">
              <span className="text-slate-400">Model</span>
              <span>{vehicle.model}</span>
            </div>
  
            <div className="flex justify-between">
              <span className="text-slate-400">Type</span>
              <span>{vehicle.type}</span>
            </div>
  
            <div className="flex justify-between">
              <span className="text-slate-400">Capacity</span>
              <span>{vehicle.capacity} kg</span>
            </div>
  
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <FiUser />
                Driver
              </span>
  
              <span>Rahul Sharma</span>
            </div>
  
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <FiMapPin />
                Current Route
              </span>
  
              <span>Ahmedabad → Surat</span>
            </div>
  
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <FiTool />
                Maintenance
              </span>
  
              <span>12 Aug 2026</span>
            </div>
  
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <FiCalendar />
                Insurance
              </span>
  
              <span>31 Dec 2026</span>
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default VehicleDetailsDrawer;