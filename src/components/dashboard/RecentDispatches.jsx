const dispatches = [
    {
      id: "TR-1024",
      vehicle: "MH12AB2345",
      driver: "Rahul Sharma",
      destination: "Ahmedabad",
      status: "On Route",
    },
    {
      id: "TR-1025",
      vehicle: "GJ05KL9876",
      driver: "Aman Patel",
      destination: "Surat",
      status: "Delivered",
    },
    {
      id: "TR-1026",
      vehicle: "RJ14ZX1122",
      driver: "Rohit Singh",
      destination: "Mumbai",
      status: "Pending",
    },
  ];
  
  function RecentDispatches() {
    return (
      <div className="mt-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 p-6">
  
        <div className="flex justify-between mb-6">
  
          <h2 className="text-xl font-bold text-white">
            Recent Dispatches
          </h2>
  
          <button className="text-blue-400 hover:text-blue-300">
            View All
          </button>
  
        </div>
  
        <table className="w-full">
  
          <thead>
  
            <tr className="text-slate-400 border-b border-white/10">
  
              <th className="text-left py-4">Trip</th>
              <th className="text-left">Vehicle</th>
              <th className="text-left">Driver</th>
              <th className="text-left">Destination</th>
              <th className="text-left">Status</th>
  
            </tr>
  
          </thead>
  
          <tbody>
  
            {dispatches.map((trip) => (
  
              <tr
                key={trip.id}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
  
                <td className="py-5 text-white">{trip.id}</td>
  
                <td>{trip.vehicle}</td>
  
                <td>{trip.driver}</td>
  
                <td>{trip.destination}</td>
  
                <td>
  
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
  
                    {trip.status}
  
                  </span>
  
                </td>
  
              </tr>
  
            ))}
  
          </tbody>
  
        </table>
  
      </div>
    );
  }
  
  export default RecentDispatches;