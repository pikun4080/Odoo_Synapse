import { FiSearch, FiBell } from "react-icons/fi";

function DashboardHeader() {
  return (
    <div className="mb-8">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-400 text-sm">
            Welcome back 👋
          </p>

          <h1 className="text-4xl font-bold text-white mt-2">
            Fleet Operations Dashboard
          </h1>

          <p className="text-slate-500 mt-3">
            Monitor vehicles, dispatches, drivers and analytics in real time.
          </p>

        </div>

        <div className="flex items-center gap-4">

          <button className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition">
            <FiSearch className="mx-auto text-xl text-white" />
          </button>

          <button className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition">
            <FiBell className="mx-auto text-xl text-white" />
          </button>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl">

            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
              P
            </div>

            <div>

              <p className="text-white font-semibold">
                Prashant
              </p>

              <p className="text-slate-400 text-sm">
                Administrator
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardHeader;