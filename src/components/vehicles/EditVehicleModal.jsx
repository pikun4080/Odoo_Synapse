import { useState, useEffect } from "react";

function EditVehicleModal({ open, vehicle, onClose, onSave }) {

  const [form, setForm] = useState({});

  useEffect(() => {
    if (vehicle) {
      setForm(vehicle);
    }
  }, [vehicle]);

  if (!open || !vehicle) return null;

  const submit = (e) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="w-[550px] bg-slate-900 rounded-3xl p-8 border border-slate-700">

        <h1 className="text-2xl font-bold mb-6">
          Edit Vehicle
        </h1>

        <form onSubmit={submit} className="space-y-4">

          <input
            value={form.registration || ""}
            onChange={(e)=>setForm({...form,registration:e.target.value})}
            className="w-full bg-slate-800 p-3 rounded-xl"
          />

          <input
            value={form.model || ""}
            onChange={(e)=>setForm({...form,model:e.target.value})}
            className="w-full bg-slate-800 p-3 rounded-xl"
          />

          <input
            value={form.type || ""}
            onChange={(e)=>setForm({...form,type:e.target.value})}
            className="w-full bg-slate-800 p-3 rounded-xl"
          />

          <input
            value={form.capacity || ""}
            onChange={(e)=>setForm({...form,capacity:e.target.value})}
            className="w-full bg-slate-800 p-3 rounded-xl"
          />

          <select
            value={form.status || ""}
            onChange={(e)=>setForm({...form,status:e.target.value})}
            className="w-full bg-slate-800 p-3 rounded-xl"
          >
            <option>Available</option>
            <option>On Trip</option>
            <option>In Shop</option>
          </select>

          <div className="flex justify-end gap-4 mt-6">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 bg-slate-700 rounded-xl"
            >
              Cancel
            </button>

            <button
              className="px-5 py-3 bg-blue-600 rounded-xl"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditVehicleModal;