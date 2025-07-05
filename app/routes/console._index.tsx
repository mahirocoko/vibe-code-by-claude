export default function ConsoleIndex() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Console Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Active Sessions</h2>
          <p className="text-3xl font-bold text-green-600">456</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <p className="text-3xl font-bold text-purple-600">$12,345</p>
        </div>
      </div>
    </div>
  )
}
