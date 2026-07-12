import { NavLink } from "react-router-dom";
import sidebarMenu from "../../data/sidebarMenu";

function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-[#111827] border-r border-slate-700 flex flex-col">

      {/* Logo */}
      <div className="p-7 border-b border-slate-700">

        <h1 className="text-3xl font-bold text-white">
          Transit<span className="text-blue-500">Ops</span>
        </h1>

        <p className="text-slate-400 mt-1 text-sm">
          Fleet Command Center
        </p>

      </div>

      {/* Menu */}

      <nav className="flex-1 p-5 space-y-2">

        {sidebarMenu.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.title}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom */}

      <div className="p-5 border-t border-slate-700">

        <div className="bg-slate-800 rounded-xl p-4">

          <p className="text-white font-semibold">
            Administrator
          </p>

          <p className="text-slate-400 text-sm">
            Fleet Manager
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;