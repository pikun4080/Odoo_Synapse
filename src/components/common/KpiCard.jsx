function KpiCard({ title, value, icon, color }) {
    return (
      <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 hover:scale-[1.02] transition duration-300">
  
        <div className="flex justify-between items-center">
  
          <div>
            <p className="text-slate-400 text-sm">
              {title}
            </p>
  
            <h2 className="text-3xl font-bold mt-2">
              {value}
            </h2>
          </div>
  
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${color}`}
          >
            {icon}
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default KpiCard;