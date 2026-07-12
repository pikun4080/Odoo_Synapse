import {
    FiTool,
    FiAlertTriangle,
    FiCheckCircle,
    FiDollarSign,
  } from "react-icons/fi";
  
  function Maintenance() {
  
    const services = [
      {
        id:1,
        vehicle:"MH12AB2345",
        service:"Engine Oil",
        garage:"AutoCare",
        cost:"₹4,500",
        status:"Completed",
        date:"12 Jul 2026",
      },
      {
        id:2,
        vehicle:"GJ05KL9876",
        service:"Brake Pads",
        garage:"Bosch Service",
        cost:"₹7,800",
        status:"Pending",
        date:"15 Jul 2026",
      },
      {
        id:3,
        vehicle:"RJ14ZX1122",
        service:"Tyre Change",
        garage:"MRF",
        cost:"₹22,000",
        status:"In Progress",
        date:"16 Jul 2026",
      },
    ];
  
    const badge = (status) => {
  
      switch(status){
  
        case "Completed":
          return "bg-green-500/20 text-green-400";
  
        case "Pending":
          return "bg-yellow-500/20 text-yellow-400";
  
        default:
          return "bg-blue-500/20 text-blue-400";
  
      }
  
    };
  
    return (
  
      <div className="space-y-8">
  
        <div className="flex justify-between">
  
          <div>
  
            <h1 className="text-4xl font-bold">
              Maintenance
            </h1>
  
            <p className="text-slate-400">
              Vehicle Service Management
            </p>
  
          </div>
  
          <button className="bg-blue-600 px-5 py-3 rounded-xl">
            + Schedule Service
          </button>
  
        </div>
  
        <div className="grid grid-cols-4 gap-5">
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <FiTool size={30}/>
  
            <p className="mt-3 text-slate-400">
              Total Services
            </p>
  
            <h1 className="text-4xl font-bold">
              48
            </h1>
  
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <FiAlertTriangle size={30}/>
  
            <p className="mt-3 text-slate-400">
              Pending
            </p>
  
            <h1 className="text-4xl font-bold">
              6
            </h1>
  
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <FiCheckCircle size={30}/>
  
            <p className="mt-3 text-slate-400">
              Completed
            </p>
  
            <h1 className="text-4xl font-bold">
              42
            </h1>
  
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <FiDollarSign size={30}/>
  
            <p className="mt-3 text-slate-400">
              Monthly Cost
            </p>
  
            <h1 className="text-4xl font-bold">
              ₹2.1L
            </h1>
  
          </div>
  
        </div>
  
        <div className="bg-slate-900 rounded-2xl overflow-hidden">
  
          <table className="w-full">
  
            <thead className="bg-slate-800">
  
              <tr>
  
                <th className="p-4">Vehicle</th>
                <th>Service</th>
                <th>Garage</th>
                <th>Cost</th>
                <th>Status</th>
                <th>Date</th>
  
              </tr>
  
            </thead>
  
            <tbody>
  
              {services.map((item)=>(
  
                <tr
                  key={item.id}
                  className="text-center h-16 border-t border-slate-800 hover:bg-slate-800/40"
                >
  
                  <td>{item.vehicle}</td>
                  <td>{item.service}</td>
                  <td>{item.garage}</td>
                  <td>{item.cost}</td>
  
                  <td>
  
                    <span className={`px-3 py-1 rounded-full ${badge(item.status)}`}>
  
                      {item.status}
  
                    </span>
  
                  </td>
  
                  <td>{item.date}</td>
  
                </tr>
  
              ))}
  
            </tbody>
  
          </table>
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default Maintenance;