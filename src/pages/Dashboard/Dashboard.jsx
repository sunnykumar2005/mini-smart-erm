import StatCard from "../../components/dashboard/StatCard";
import { dashboardStats } from "../../data/dashboardData";

export default function Dashboard() {
  return (
    <div>

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to the Smart ERP System
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

        {dashboardStats.map((item) => (
          <StatCard
            key={item.id}
            title={item.title}
            value={item.value}
            change={item.change}
            color={item.color}
          />
        ))}

      </div>

    </div>
  );
}