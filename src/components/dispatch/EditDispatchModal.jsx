import { useState } from "react";
import { useDispatchContext } from "../../context/DispatchContext";

function EditDispatchModal({ dispatch, close }) {

  const { updateDispatch } = useDispatchContext();

  const [form, setForm] = useState(dispatch);

  const change = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const submit = (e) => {

    e.preventDefault();

    updateDispatch(dispatch.id, form);

    close();

  };

  return (

    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">

      <form
        onSubmit={submit}
        className="bg-slate-900 border border-slate-700 rounded-3xl w-[700px] p-8 space-y-6"
      >

        <div className="flex justify-between items-center">

          <h2 className="text-3xl font-bold">
            Edit Dispatch
          </h2>

          <button
            type="button"
            onClick={close}
            className="text-slate-400 hover:text-white"
          >
            ✕
          </button>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <div>

            <label className="text-slate-400 text-sm">
              Trip ID
            </label>

            <input
              value={form.tripId}
              disabled
              className="w-full mt-2 bg-slate-800 rounded-xl p-3"
            />

          </div>

          <div>

            <label className="text-slate-400 text-sm">
              Vehicle
            </label>

            <input
              name="vehicle"
              value={form.vehicle}
              onChange={change}
              className="w-full mt-2 bg-slate-800 rounded-xl p-3"
            />

          </div>

          <div>

            <label className="text-slate-400 text-sm">
              Driver
            </label>

            <input
              name="driver"
              value={form.driver}
              onChange={change}
              className="w-full mt-2 bg-slate-800 rounded-xl p-3"
            />

          </div>

          <div>

            <label className="text-slate-400 text-sm">
              Route
            </label>

            <input
              name="route"
              value={form.route}
              onChange={change}
              className="w-full mt-2 bg-slate-800 rounded-xl p-3"
            />

          </div>

          <div>

            <label className="text-slate-400 text-sm">
              Date
            </label>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={change}
              className="w-full mt-2 bg-slate-800 rounded-xl p-3"
            />

          </div>

          <div>

            <label className="text-slate-400 text-sm">
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={change}
              className="w-full mt-2 bg-slate-800 rounded-xl p-3"
            >

              <option>Pending</option>
              <option>On Route</option>
              <option>Completed</option>
              <option>Cancelled</option>

            </select>

          </div>

        </div>

        <div className="flex justify-end gap-4">

          <button
            type="button"
            onClick={close}
            className="bg-slate-700 px-5 py-3 rounded-xl"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            Save Changes
          </button>

        </div>

      </form>

    </div>

  );

}

export default EditDispatchModal;