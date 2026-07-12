import {
    MdDashboard,
    MdDirectionsBus,
    MdPeople,
    MdLocalShipping,
    MdRoute,
    MdBuild,
    MdLocalGasStation,
    MdAttachMoney,
    MdAssessment,
  } from "react-icons/md";
  
  export const sidebarMenu = [
    {
      title: "Dashboard",
      path: "/",
      icon: MdDashboard,
      roles: ["Fleet Manager", "Safety Officer", "Financial Analyst"],
    },
    {
      title: "Vehicles",
      path: "/vehicles",
      icon: MdDirectionsBus,
      roles: ["Fleet Manager"],
    },
    {
      title: "Drivers",
      path: "/drivers",
      icon: MdPeople,
      roles: ["Safety Officer"],
    },
    {
      title: "Dispatch",
      path: "/dispatch",
      icon: MdLocalShipping,
      roles: ["Fleet Manager"],
    },
    {
      title: "Trips",
      path: "/trips",
      icon: MdRoute,
      roles: ["Fleet Manager"],
    },
    {
      title: "Maintenance",
      path: "/maintenance",
      icon: MdBuild,
      roles: ["Fleet Manager"],
    },
    {
      title: "Fuel",
      path: "/fuel",
      icon: MdLocalGasStation,
      roles: ["Financial Analyst"],
    },
    {
      title: "Expenses",
      path: "/expenses",
      icon: MdAttachMoney,
      roles: ["Financial Analyst"],
    },
    {
      title: "Reports",
      path: "/reports",
      icon: MdAssessment,
      roles: ["Fleet Manager", "Safety Officer", "Financial Analyst"],
    },
  ];