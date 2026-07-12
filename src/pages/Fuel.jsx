import {
    FiDroplet,
    FiDollarSign,
    FiTruck,
    FiTrendingUp,
  } from "react-icons/fi";
  
  function Fuel() {
  
    const fuelLogs = [
  
      {
        id:1,
        vehicle:"MH12AB2345",
        driver:"Rahul Sharma",
        litres:52,
        amount:"₹5,720",
        station:"Indian Oil",
        mileage:"15.4 km/L",
        date:"15 Jul 2026",
      },
  
      {
        id:2,
        vehicle:"GJ05KL9876",
        driver:"Aman Patel",
        litres:43,
        amount:"₹4,850",
        station:"HP",
        mileage:"16.8 km/L",
        date:"15 Jul 2026",
      },
  
      {
        id:3,
        vehicle:"RJ14ZX1122",
        driver:"Rohit Singh",
        litres:60,
        amount:"₹6,610",
        station:"BPCL",
        mileage:"14.1 km/L",
        date:"14 Jul 2026",
      }
  
    ];
  
    return (
  
      <div className="space-y-8">
  
        <div className="flex justify-between">
  
          <div>
  
            <h1 className="text-4xl font-bold">
              Fuel Management
            </h1>
  
            <p className="text-slate-400">
              Track fuel expenses and efficiency
            </p>
  
          </div>
  
          <button className="bg-blue-600 px-5 py-3 rounded-xl">
            + Add Fuel Entry
          </button>
  
        </div>
  
        <div className="grid grid-cols-4 gap-5">
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <FiDroplet size={30}/>
  
            <p className="mt-3 text-slate-400">
              Fuel Used
            </p>
  
            <h1 className="text-4xl font-bold">
              1550 L
            </h1>
  
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <FiDollarSign size={30}/>
  
            <p className="mt-3 text-slate-400">
              Monthly Cost
            </p>
  
            <h1 className="text-4xl font-bold">
              ₹1.85L
            </h1>
  
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <FiTruck size={30}/>
  
            <p className="mt-3 text-slate-400">
              Avg Mileage
            </p>
  
            <h1 className="text-4xl font-bold">
              15.9
            </h1>
  
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <FiTrendingUp size={30}/>
  
            <p className="mt-3 text-slate-400">
              Efficiency
            </p>
  
            <h1 className="text-4xl font-bold text-green-400">
              +8%
            </h1>
  
          </div>
  
        </div>
  
        <div className="bg-slate-900 rounded-2xl overflow-hidden">
  
          <table className="w-full">
  
            <thead className="bg-slate-800">
  
              <tr>
  
                <th className="p-4">Vehicle</th>
                <th>Driver</th>
                <th>Litres</th>
                <th>Amount</th>
                <th>Station</th>
                <th>Mileage</th>
                <th>Date</th>
  
              </tr>
  
            </thead>
  
            <tbody>
  
              {fuelLogs.map((fuel)=>(
  
                <tr
                  key={fuel.id}
                  className="border-t border-slate-800 text-center h-16 hover:bg-slate-800/40"
                >
  
                  <td>{fuel.vehicle}</td>
  
                  <td>{fuel.driver}</td>
  
                  <td>{fuel.litres} L</td>
  
                  <td>{fuel.amount}</td>
  
                  <td>{fuel.station}</td>
  
                  <td>{fuel.mileage}</td>
  
                  <td>{fuel.date}</td>
  
                </tr>
  
              ))}
  
            </tbody>
  
          </table>
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default Fuel;