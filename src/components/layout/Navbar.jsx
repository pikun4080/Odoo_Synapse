import { FiBell, FiSearch, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="h-20 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-8">

      <div>
        <h2 className="text-3xl font-bold text-white">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">

        <button className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
          <FiSearch />
        </button>

        <button className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
          <FiBell />
        </button>

        <div className="text-right">
          <p className="font-semibold">{user?.name}</p>
          <p className="text-slate-400 text-sm">{user?.role}</p>
        </div>

        <button
          onClick={logout}
          className="w-12 h-12 rounded-xl bg-red-600 hover:bg-red-700 flex items-center justify-center"
        >
          <FiLogOut />
        </button>

      </div>

    </header>
  );
}

export default Navbar;