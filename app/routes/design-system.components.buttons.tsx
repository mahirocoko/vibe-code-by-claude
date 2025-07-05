import { Button } from '@/components/ui/button'

export default function ButtonsShowcase() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Button</h1>
        <p className="text-lg text-muted-foreground">
          A versatile button component that supports multiple variants, sizes, and states.
        </p>
      </header>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="rounded-lg border bg-muted/30 p-4">
          <pre className="text-sm overflow-x-auto">
            <code>{`npx shadcn@latest add button`}</code>
          </pre>
        </div>
      </section>

      <div className="space-y-12">
        {/* Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        {/* Semantic Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Semantic Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="info">Info</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="success">Success</Button>
            <Button variant="error">Error</Button>
          </div>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </section>

        {/* States */}
        <section>
          <h2 className="text-xl font-semibold mb-4">States</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Disabled</h3>
              <div className="flex flex-wrap gap-4">
                <Button disabled>Disabled Default</Button>
                <Button variant="secondary" disabled>
                  Disabled Secondary
                </Button>
                <Button variant="destructive" disabled>
                  Disabled Destructive
                </Button>
                <Button variant="outline" disabled>
                  Disabled Outline
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Loading (with disabled)</h3>
              <div className="flex flex-wrap gap-4">
                <Button disabled>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading...
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* With Icons */}
        <section>
          <h2 className="text-xl font-semibold mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
              Add Item
            </Button>
            <Button variant="outline">
              Settings
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
              </svg>
            </Button>
            <Button variant="destructive">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M10 11v6M14 11v6" />
              </svg>
              Delete
            </Button>
          </div>
        </section>

        {/* API Reference */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">API Reference</h2>
          <div className="rounded-lg border">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Prop</th>
                  <th className="text-left p-4">Type</th>
                  <th className="text-left p-4">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-mono text-sm">variant</td>
                  <td className="p-4 text-sm text-muted-foreground">
                    "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "info" | "warning" |
                    "success" | "error"
                  </td>
                  <td className="p-4 font-mono text-sm">"default"</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-mono text-sm">size</td>
                  <td className="p-4 text-sm text-muted-foreground">"default" | "sm" | "lg" | "icon"</td>
                  <td className="p-4 font-mono text-sm">"default"</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-mono text-sm">asChild</td>
                  <td className="p-4 text-sm text-muted-foreground">boolean</td>
                  <td className="p-4 font-mono text-sm">false</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Usage */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Usage</h2>
          <div className="rounded-lg border p-4 bg-muted/30">
            <pre className="text-sm overflow-x-auto">
              <code>{`import { Button } from '@/components/ui/button'

export default function Example() {
  return (
    <>
      {/* Basic usage */}
      <Button>Click me</Button>
      
      {/* With variant */}
      <Button variant="destructive">Delete</Button>
      
      {/* With size */}
      <Button size="lg">Large Button</Button>
      
      {/* Disabled state */}
      <Button disabled>Disabled</Button>
      
      {/* As child (Render as Link) */}
      <Button asChild>
        <Link to="/">Go Home</Link>
      </Button>
    </>
  )
}`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}
