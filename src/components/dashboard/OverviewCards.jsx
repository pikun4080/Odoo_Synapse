import {
    FiTruck,
    FiUsers,
    FiMap,
    FiDollarSign,
  } from "react-icons/fi";
  
  const cards = [
    {
      title: "Vehicles",
      value: "128",
      change: "+12%",
      desc: "Active Fleet",
      icon: FiTruck,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Drivers",
      value: "54",
      change: "+8%",
      desc: "Available",
      icon: FiUsers,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Dispatches",
      value: "986",
      change: "+21%",
      desc: "Today's Jobs",
      icon: FiMap,
      color: "from-emerald-500 to-green-400",
    },
    {
      title: "Revenue",
      value: "₹2.4L",
      change: "+18%",
      desc: "This Month",
      icon: FiDollarSign,
      color: "from-orange-500 to-yellow-400",
    },
  ];
  
  function OverviewCards() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {cards.map((card) => {
          const Icon = card.icon;
  
          return (
            <div
              key={card.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white/5
                backdrop-blur-2xl
                border border-white/10
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
              "
            >
              <div
                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${card.color} opacity-20 blur-3xl`}
              />
  
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-400 text-sm">
                    {card.title}
                  </p>
  
                  <h2 className="text-4xl font-bold mt-3 text-white">
                    {card.value}
                  </h2>
  
                  <p className="text-green-400 mt-4 font-medium">
                    {card.change}
                  </p>
  
                  <p className="text-slate-500 text-sm mt-1">
                    {card.desc}
                  </p>
                </div>
  
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color}
                  flex items-center justify-center shadow-xl`}
                >
                  <Icon className="text-white text-2xl" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default OverviewCards;