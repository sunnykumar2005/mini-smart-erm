export default function StatCard({
  title,
  value,
  change,
  color,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">

      <div
        className={`w-12 h-12 rounded-lg ${color} mb-4`}
      ></div>

      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>

      <p className="text-green-600 mt-3 font-medium">
        {change}
      </p>

    </div>
  );
}