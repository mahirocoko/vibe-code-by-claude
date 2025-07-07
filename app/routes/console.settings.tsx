import { Typography } from '@/components/ui/typography'

export default function Route() {
  return (
    <div>
      <Typography variant="h1" className="mb-6">
        Settings
      </Typography>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <Typography variant="h2" className="mb-4">
            General Settings
          </Typography>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="Vibe Console"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="Console for managing the Vibe application"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <Typography variant="h2" className="text-xl font-semibold mb-4">
            Security Settings
          </Typography>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="two-factor"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="two-factor" className="ml-2 block text-sm text-gray-700">
                Enable Two-Factor Authentication
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="session-timeout"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="session-timeout" className="ml-2 block text-sm text-gray-700">
                Auto-logout after 30 minutes of inactivity
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <Typography variant="h2" className="text-xl font-semibold mb-4">
            Notification Settings
          </Typography>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="email-notifications"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-700">
                Email notifications for system alerts
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="user-notifications"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="user-notifications" className="ml-2 block text-sm text-gray-700">
                Email notifications for new user registrations
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  )
}
