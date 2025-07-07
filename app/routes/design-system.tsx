import { cn } from '@/lib/utils'
import { Link, NavLink, Outlet } from 'react-router'

type NavItem = { to: string; label: string; end?: boolean } | { heading: string }

const navigationItems: NavItem[] = [
  { to: '/design-system', label: 'Overview', end: true },
  { heading: 'Foundation' },
  { to: '/design-system/foundation/colors', label: 'Colors' },
  { to: '/design-system/foundation/typography', label: 'Typography' },
  { heading: 'Components' },
  { to: '/design-system/components/accordions', label: 'Accordions' },
  { to: '/design-system/components/alerts', label: 'Alerts' },
  { to: '/design-system/components/avatars', label: 'Avatars' },
  { to: '/design-system/components/badges', label: 'Badges' },
  { to: '/design-system/components/bento-grid', label: 'Bento Grid' },
  { to: '/design-system/components/buttons', label: 'Buttons' },
  { to: '/design-system/components/cards', label: 'Cards' },
  { to: '/design-system/components/containers', label: 'Containers' },
  { to: '/design-system/components/forms', label: 'Forms' },
  { to: '/design-system/components/inputs', label: 'Inputs' },
  { to: '/design-system/components/labels', label: 'Labels' },
  { to: '/design-system/components/selects', label: 'Selects' },
  { to: '/design-system/components/sheets', label: 'Sheets' },
  { to: '/design-system/components/switches', label: 'Switches' },
  { to: '/design-system/components/textareas', label: 'Textareas' },
  { to: '/design-system/components/toggles', label: 'Toggles' },
  { to: '/design-system/components/typography', label: 'Typography' },
]

export default function DesignSystemLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r bg-muted/30">
        <div className="sticky top-0 p-6">
          <Link to="/" className="mb-8 block">
            <h2 className="text-2xl font-bold">Vibe Design System</h2>
          </Link>

          <nav className="space-y-1">
            {navigationItems.map((item, index) => {
              if ('heading' in item) {
                return (
                  <h3
                    key={index}
                    className="mt-4 mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {item.heading}
                  </h3>
                )
              }
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-8 max-w-5xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
