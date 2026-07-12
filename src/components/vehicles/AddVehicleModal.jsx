import { useState } from "react";
import { useVehicles } from "../../context/VehicleContext";

function AddVehicleModal({ open, onClose }) {
  const { addVehicle } = useVehicles();

  const [form, setForm] = useState({
    registration: "",
    model: "",
    type: "",
    capacity: "",
    status: "Available",
  });

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();

    addVehicle({
      id: Date.now(),
      ...form,
    });

    setForm({
      registration: "",
      model: "",
      type: "",
      capacity: "",
      status: "Available",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="w-[550px] bg-slate-900 rounded-3xl p-8 border border-slate-700">

        <h2 className="text-2xl font-bold mb-6">
          Add Vehicle
        </h2>

        <form onSubmit={submit} className="space-y-5">

          <input
            placeholder="Registration Number"
            className="w-full bg-slate-800 rounded-xl p-3"
            value={form.registration}
            onChange={(e)=>setForm({...form,registration:e.target.value})}
          />

          <input
            placeholder="Model"
            className="w-full bg-slate-800 rounded-xl p-3"
            value={form.model}
            onChange={(e)=>setForm({...form,model:e.target.value})}
          />

          <input
            placeholder="Vehicle Type"
            className="w-full bg-slate-800 rounded-xl p-3"
            value={form.type}
            onChange={(e)=>setForm({...form,type:e.target.value})}
          />

          <input
            placeholder="Capacity"
            className="w-full bg-slate-800 rounded-xl p-3"
            value={form.capacity}
            onChange={(e)=>setForm({...form,capacity:e.target.value})}
          />

          <select
            className="w-full bg-slate-800 rounded-xl p-3"
            value={form.status}
            onChange={(e)=>setForm({...form,status:e.target.value})}
          >
            <option>Available</option>
            <option>On Trip</option>
            <option>In Shop</option>
          </select>

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-slate-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700"
            >
              Add Vehicle
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddVehicleModal;