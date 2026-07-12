import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import { useTrips } from "../../context/TripsContext";

function TripsTable() {

  const { trips } = useTrips();

  const badge = (status) => {

    switch(status){

      case "Completed":
        return "bg-green-500/20 text-green-400";

      case "On Route":
        return "bg-blue-500/20 text-blue-400";

      case "Pending":
        return "bg-yellow-500/20 text-yellow-400";

      default:
        return "bg-red-500/20 text-red-400";

    }

  };

  return (

    <div className="bg-slate-900 rounded-2xl overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-800">

          <tr>

            <th className="p-4 text-left">Trip</th>
            <th>Vehicle</th>
            <th>Driver</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Distance</th>
            <th>Revenue</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {trips.map((trip)=>(

            <tr
              key={trip.id}
              className="border-t border-slate-800 hover:bg-slate-800/40"
            >

              <td className="p-4">{trip.tripId}</td>

              <td>{trip.vehicle}</td>

              <td>{trip.driver}</td>

              <td>{trip.origin}</td>

              <td>{trip.destination}</td>

              <td>{trip.distance}</td>

              <td>{trip.revenue}</td>

              <td>

                <span
                className={`px-3 py-1 rounded-full text-sm ${badge(trip.status)}`}
                >

                  {trip.status}

                </span>

              </td>

              <td>

                <div className="flex gap-3 justify-center">

                  <button>

                    <FiEye/>

                  </button>

                  <button>

                    <FiEdit2/>

                  </button>

                  <button>

                    <FiTrash2 className="text-red-500"/>

                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default TripsTable;