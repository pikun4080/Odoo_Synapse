const status = [
    { name: "Available", count: 56, color: "bg-green-500" },
    { name: "On Route", count: 34, color: "bg-blue-500" },
    { name: "Maintenance", count: 12, color: "bg-yellow-500" },
    { name: "Inactive", count: 4, color: "bg-red-500" },
  ];
  
  function FleetStatus() {
    return (
      <div className="rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 p-6">
        <h2 className="text-xl font-semibold text-white mb-6">
          Fleet Status
        </h2>
  
        <div className="space-y-5">
          {status.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-slate-300">{item.name}</span>
              </div>
  
              <span className="text-white font-bold">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default FleetStatus;