import StatCard from "../../components/dashboard/StatCard";
import DashboardCharts from "../../components/dashboard/DashboardCharts";
import RecentActivity from "../../components/dashboard/RecentActivity";
import QuickActions from "../../components/dashboard/QuickActions";
import MineStatus from "../../components/dashboard/MineStatus";

import { dashboardStats } from "../../data/dashboardData";

export default function Dashboard() {
  return (
    <div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome to Smart ERP
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {dashboardStats.map((item) => (
          <StatCard key={item.id} {...item} />
        ))}
      </div>

      <DashboardCharts />

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <RecentActivity />
        <QuickActions />
      </div>

      <div className="mt-8">
        <MineStatus />
      </div>

    </div>
  );
}
