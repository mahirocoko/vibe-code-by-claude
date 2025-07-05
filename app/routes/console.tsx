import { Link, Outlet, useLocation } from 'react-router'

export default function ConsoleLayout() {
  const location = useLocation()

  const navItems = [
    { path: '/console', label: 'Dashboard' },
    { path: '/console/users', label: 'Users' },
    { path: '/console/settings', label: 'Settings' },
  ]

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Console</h2>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.path} className="mb-2">
                <Link
                  to={item.path}
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
