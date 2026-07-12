import {
    FiPlus,
    FiTruck,
    FiUsers,
    FiFileText
} from "react-icons/fi";

const actions = [

    {
        title: "Add Vehicle",
        icon: FiTruck,
    },

    {
        title: "New Driver",
        icon: FiUsers,
    },

    {
        title: "Create Dispatch",
        icon: FiFileText,
    },

    {
        title: "Quick Add",
        icon: FiPlus,
    },

];

function QuickActions() {

    return (

        <div className="mt-8">

            <h2 className="text-2xl font-bold mb-5">
                Quick Actions
            </h2>

            <div className="grid md:grid-cols-4 gap-5">

                {actions.map((action) => {

                    const Icon = action.icon;

                    return (

                        <button

                            key={action.title}

                            className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl h-36 hover:-translate-y-2 hover:border-blue-500 transition-all"

                        >

                            <Icon className="mx-auto text-3xl text-blue-400 mb-4" />

                            <p className="font-semibold">

                                {action.title}

                            </p>

                        </button>

                    );

                })}

            </div>

        </div>

    );

}

export default QuickActions;