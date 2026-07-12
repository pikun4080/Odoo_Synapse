import {
    FiBarChart2,
    FiTruck,
    FiDollarSign,
    FiTrendingUp,
    FiPieChart,
    FiActivity,
  } from "react-icons/fi";
  
  function Reports() {
  
    const topDrivers = [
      {
        name: "Rahul Sharma",
        trips: 132,
        score: "98%",
      },
      {
        name: "Aman Patel",
        trips: 118,
        score: "95%",
      },
      {
        name: "Rohit Singh",
        trips: 110,
        score: "93%",
      },
    ];
  
    const topVehicles = [
      {
        vehicle: "MH12AB2345",
        distance: "14,220 km",
      },
      {
        vehicle: "GJ05KL9876",
        distance: "12,850 km",
      },
      {
        vehicle: "RJ14ZX1122",
        distance: "11,420 km",
      },
    ];
  
    return (
  
      <div className="space-y-8">
  
        <div>
  
          <h1 className="text-4xl font-bold">
            Reports & Analytics
          </h1>
  
          <p className="text-slate-400">
            Fleet performance insights
          </p>
  
        </div>
  
        <div className="grid grid-cols-4 gap-5">
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <FiTruck size={28}/>
  
            <p className="mt-3 text-slate-400">
              Fleet Utilization
            </p>
  
            <h1 className="text-4xl font-bold">
              92%
            </h1>
  
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <FiDollarSign size={28}/>
  
            <p className="mt-3 text-slate-400">
              Monthly Revenue
            </p>
  
            <h1 className="text-4xl font-bold">
              ₹24.8L
            </h1>
  
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <FiTrendingUp size={28}/>
  
            <p className="mt-3 text-slate-400">
              Profit Growth
            </p>
  
            <h1 className="text-4xl font-bold text-green-400">
              +18%
            </h1>
  
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <FiActivity size={28}/>
  
            <p className="mt-3 text-slate-400">
              Active Trips
            </p>
  
            <h1 className="text-4xl font-bold">
              87
            </h1>
  
          </div>
  
        </div>
  
        <div className="grid grid-cols-2 gap-6">
  
          <div className="bg-slate-900 rounded-2xl p-8 h-[320px] flex flex-col justify-center items-center">
  
            <FiBarChart2 size={70}/>
  
            <h2 className="text-2xl font-bold mt-5">
              Revenue Analytics
            </h2>
  
            <p className="text-slate-400 mt-2">
              Interactive Chart Coming Soon
            </p>
  
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-8 h-[320px] flex flex-col justify-center items-center">
  
            <FiPieChart size={70}/>
  
            <h2 className="text-2xl font-bold mt-5">
              Expense Breakdown
            </h2>
  
            <p className="text-slate-400 mt-2">
              Pie Chart Coming Soon
            </p>
  
          </div>
  
        </div>
  
        <div className="grid grid-cols-2 gap-6">
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <h2 className="text-2xl font-bold mb-5">
              Top Drivers
            </h2>
  
            <table className="w-full">
  
              <thead>
  
                <tr className="text-slate-400">
  
                  <th className="text-left">Driver</th>
                  <th>Trips</th>
                  <th>Rating</th>
  
                </tr>
  
              </thead>
  
              <tbody>
  
                {topDrivers.map((driver,index)=>(
  
                  <tr
                    key={index}
                    className="border-t border-slate-800 h-14"
                  >
  
                    <td>{driver.name}</td>
                    <td className="text-center">{driver.trips}</td>
                    <td className="text-center text-green-400">
                      {driver.score}
                    </td>
  
                  </tr>
  
                ))}
  
              </tbody>
  
            </table>
  
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <h2 className="text-2xl font-bold mb-5">
              Top Vehicles
            </h2>
  
            <table className="w-full">
  
              <thead>
  
                <tr className="text-slate-400">
  
                  <th className="text-left">Vehicle</th>
                  <th>Distance</th>
  
                </tr>
  
              </thead>
  
              <tbody>
  
                {topVehicles.map((vehicle,index)=>(
  
                  <tr
                    key={index}
                    className="border-t border-slate-800 h-14"
                  >
  
                    <td>{vehicle.vehicle}</td>
  
                    <td className="text-center">
                      {vehicle.distance}
                    </td>
  
                  </tr>
  
                ))}
  
              </tbody>
  
            </table>
  
          </div>
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default Reports;