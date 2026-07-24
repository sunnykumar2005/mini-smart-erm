import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarDays,
  Boxes,
  Pickaxe,
  Truck,
  IndianRupee,
  FileBarChart,
  Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Employees", icon: Users, path: "/employees" },
  { name: "Departments", icon: Building2, path: "/departments" },
  { name: "Attendance", icon: CalendarDays, path: "/attendance" },
  { name: "Inventory", icon: Boxes, path: "/inventory" },
  { name: "Production", icon: Pickaxe, path: "/production" },
  { name: "Fleet", icon: Truck, path: "/fleet" },
  { name: "Finance", icon: IndianRupee, path: "/finance" },
  { name: "Reports", icon: FileBarChart, path: "/reports" },
  { name: "Settings", icon: Settings, path: "/settings" }
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0">

      <div className="text-center py-6 border-b border-slate-700">

        <h2 className="text-2xl font-bold">
          Smart ERP
        </h2>

        <p className="text-sm text-gray-400">
          Industrial Management
        </p>

      </div>

      <nav className="mt-5">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-4 hover:bg-slate-800 ${
                  isActive ? "bg-blue-700" : ""
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>

            </NavLink>

          );
        })}

      </nav>

    </aside>
  );
}