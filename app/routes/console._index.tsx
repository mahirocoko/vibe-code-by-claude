import { Typography } from '@/components/ui/typography'

export default function Route() {
  return (
    <div>
      <Typography variant="h1" className="mb-6">
        Console Dashboard
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <Typography variant="h2" className="mb-2">
            Total Users
          </Typography>
          <Typography className="text-3xl font-bold text-blue-600">1,234</Typography>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <Typography variant="h2" className="text-xl font-semibold mb-2">
            Active Sessions
          </Typography>
          <Typography className="text-3xl font-bold text-green-600">456</Typography>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <Typography variant="h2" className="text-xl font-semibold mb-2">
            Revenue
          </Typography>
          <Typography className="text-3xl font-bold text-purple-600">$12,345</Typography>
        </div>
      </div>
    </div>
  )
}
