import {
    FiX,
    FiTruck,
    FiUser,
    FiMapPin,
    FiCalendar,
    FiClock,
    FiFlag,
  } from "react-icons/fi";
  
  function DispatchDetailsDrawer({ dispatch, close }) {
    if (!dispatch) return null;
  
    const statusColor = {
      Pending: "bg-yellow-500/20 text-yellow-400",
      "On Route": "bg-blue-500/20 text-blue-400",
      Completed: "bg-green-500/20 text-green-400",
      Cancelled: "bg-red-500/20 text-red-400",
    };
  
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end">
  
        <div className="w-[450px] h-screen bg-slate-950 border-l border-slate-800 p-8 overflow-y-auto">
  
          <div className="flex justify-between items-center mb-8">
  
            <div>
              <h1 className="text-3xl font-bold">
                {dispatch.tripId}
              </h1>
  
              <p className="text-slate-400 mt-1">
                Dispatch Details
              </p>
            </div>
  
            <button
              onClick={close}
              className="text-slate-400 hover:text-white"
            >
              <FiX size={28} />
            </button>
  
          </div>
  
          <div className="space-y-5">
  
            <div className="bg-slate-900 rounded-2xl p-5 flex items-center gap-4">
              <FiTruck size={28} className="text-blue-500" />
  
              <div>
                <p className="text-slate-400 text-sm">
                  Vehicle
                </p>
  
                <h3 className="text-xl font-semibold">
                  {dispatch.vehicle}
                </h3>
              </div>
  
            </div>
  
            <div className="bg-slate-900 rounded-2xl p-5 flex items-center gap-4">
              <FiUser size={28} className="text-green-500" />
  
              <div>
                <p className="text-slate-400 text-sm">
                  Driver
                </p>
  
                <h3 className="text-xl font-semibold">
                  {dispatch.driver}
                </h3>
              </div>
  
            </div>
  
            <div className="bg-slate-900 rounded-2xl p-5 flex items-center gap-4">
              <FiMapPin size={28} className="text-purple-500" />
  
              <div>
                <p className="text-slate-400 text-sm">
                  Route
                </p>
  
                <h3 className="text-lg font-semibold">
                  {dispatch.route}
                </h3>
              </div>
  
            </div>
  
            <div className="bg-slate-900 rounded-2xl p-5 flex items-center gap-4">
              <FiCalendar size={28} className="text-yellow-500" />
  
              <div>
                <p className="text-slate-400 text-sm">
                  Dispatch Date
                </p>
  
                <h3 className="text-lg font-semibold">
                  {dispatch.date}
                </h3>
              </div>
  
            </div>
  
            <div className="bg-slate-900 rounded-2xl p-5 flex items-center gap-4">
              <FiFlag size={28} className="text-red-500" />
  
              <div>
                <p className="text-slate-400 text-sm">
                  Current Status
                </p>
  
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColor[dispatch.status]}`}
                >
                  {dispatch.status}
                </span>
              </div>
  
            </div>
  
          </div>
  
          <div className="mt-10">
  
            <h2 className="text-xl font-bold mb-5">
              Timeline
            </h2>
  
            <div className="space-y-5">
  
              <div className="flex gap-4">
                <FiClock className="text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold">
                    Dispatch Created
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Fleet Manager created this dispatch.
                  </p>
                </div>
              </div>
  
              <div className="flex gap-4">
                <FiClock className="text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold">
                    Vehicle Assigned
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Vehicle linked successfully.
                  </p>
                </div>
              </div>
  
              <div className="flex gap-4">
                <FiClock className="text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-semibold">
                    Driver Assigned
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Driver accepted assignment.
                  </p>
                </div>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default DispatchDetailsDrawer;