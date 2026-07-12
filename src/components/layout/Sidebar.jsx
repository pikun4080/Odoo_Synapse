import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../../data/sidebarMenu";
import { useAuth } from "../../context/AuthContext";
function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className="w-64 h-screen bg-slate-950 border-r border-slate-800 flex flex-col">

      <div className="px-6 py-6 border-b border-slate-800">
        <h1 className="text-3xl font-extrabold text-blue-500">
          TransitOps
        </h1>

        <p className="text-slate-500 text-sm mt-1">
          Smart Fleet Platform
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">

{user &&
  sidebarMenu
    .filter((item) => item.roles.includes(user.role))
    .map((item) => {

      const Icon = item.icon;

      return (
        <NavLink
          key={item.title}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-blue-600 text-white shadow-lg"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <Icon size={22} />
          <span className="font-medium">{item.title}</span>
        </NavLink>
      );

    })}

</nav>

      <div className="p-4 border-t border-slate-800">

        <div className="bg-slate-900 rounded-xl p-4">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">

              {user?.name?.charAt(0)}

            </div>

            <div>

              <p className="text-white font-semibold">
              {user?.name}
              </p>

              <p className="text-slate-500 text-sm">
              {user?.role}
              </p>

            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;