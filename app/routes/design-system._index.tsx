import { Link } from 'react-router'

export default function DesignSystemOverview() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">Vibe Design System</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A comprehensive design system built with React, TypeScript, and Tailwind CSS. Features 17 fully implemented
          components with a modern color system using oklch color space and full accessibility support.
        </p>
      </section>

      {/* Quick Links */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="group relative rounded-xl border p-6 hover:border-primary transition-colors">
          <h3 className="text-xl font-semibold mb-2">Foundation</h3>
          <p className="text-muted-foreground mb-4">Design tokens, color system, typography, and spacing guidelines.</p>
          <div className="space-y-2">
            <Link to="/design-system/foundation/colors" className="text-sm text-primary hover:underline">
              Colors →
            </Link>
            <br />
            <Link to="/design-system/foundation/typography" className="text-sm text-primary hover:underline">
              Typography →
            </Link>
          </div>
        </div>

        <div className="group relative rounded-xl border p-6 hover:border-primary transition-colors">
          <h3 className="text-xl font-semibold mb-2">Components (17)</h3>
          <p className="text-muted-foreground mb-4">Pre-built UI components with multiple variants and states.</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            <Link to="/design-system/components/buttons" className="text-primary hover:underline">
              Buttons →
            </Link>
            <Link to="/design-system/components/forms" className="text-primary hover:underline">
              Forms →
            </Link>
            <Link to="/design-system/components/alerts" className="text-primary hover:underline">
              Alerts →
            </Link>
            <Link to="/design-system/components/cards" className="text-primary hover:underline">
              Cards →
            </Link>
            <Link to="/design-system/components/toggles" className="text-primary hover:underline">
              Toggles & Switch →
            </Link>
            <Link to="/design-system/components/bento-grid" className="text-primary hover:underline">
              Bento Grid →
            </Link>
            <Link to="/design-system/components/badges" className="text-primary hover:underline">
              Badges →
            </Link>
            <Link to="/design-system/components/avatars" className="text-primary hover:underline">
              Avatars →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Key Features</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-4">
            <div className="mb-2 text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Modern Color System</h3>
            <p className="text-sm text-muted-foreground">Uses oklch color space for perceptually uniform colors</p>
          </div>

          <div className="rounded-lg border p-4">
            <div className="mb-2 text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">TypeScript First</h3>
            <p className="text-sm text-muted-foreground">Fully typed components for better developer experience</p>
          </div>

          <div className="rounded-lg border p-4">
            <div className="mb-2 text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Dark Mode</h3>
            <p className="text-sm text-muted-foreground">Built-in dark mode support with automatic theme detection</p>
          </div>

          <div className="rounded-lg border p-4">
            <div className="mb-2 text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11H3m18 0h-6M12 11v6m0-12v2" />
                <circle cx="12" cy="11" r="3" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Accessible</h3>
            <p className="text-sm text-muted-foreground">WCAG compliant components with proper ARIA attributes</p>
          </div>

          <div className="rounded-lg border p-4">
            <div className="mb-2 text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="9" x2="15" y2="15" />
                <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Semantic Colors</h3>
            <p className="text-sm text-muted-foreground">Info, warning, success, and error states for better UX</p>
          </div>

          <div className="rounded-lg border p-4">
            <div className="mb-2 text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Tailwind CSS</h3>
            <p className="text-sm text-muted-foreground">Utility-first CSS framework for rapid development</p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Getting Started</h2>
        <div className="prose prose-gray max-w-none">
          <ol className="space-y-2">
            <li>
              Install dependencies using <code>pnpm install</code>
            </li>
            <li>
              Components are located in <code>app/components/ui</code>
            </li>
            <li>
              Use <code>npx shadcn@latest add [component]</code> to add new components
            </li>
            <li>
              Customize theme colors in <code>app/styles/globals.css</code>
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}
