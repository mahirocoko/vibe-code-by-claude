import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function Route() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Alert</h1>
        <p className="text-lg text-muted-foreground">Displays a callout for user attention with contextual feedback.</p>
      </header>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="rounded-lg border bg-muted/30 p-4">
          <pre className="text-sm overflow-x-auto">
            <code>{`npx shadcn@latest add alert`}</code>
          </pre>
        </div>
      </section>

      {/* Examples */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        {/* Default */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Default</h3>
          <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
          </Alert>
        </div>

        {/* Available Variants */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Available Variants</h3>

          <Alert>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>This is the default alert variant for general information.</AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            <AlertTitle>Destructive Action</AlertTitle>
            <AlertDescription>This action cannot be undone. Please be certain before continuing.</AlertDescription>
          </Alert>
        </div>

        {/* Without Title */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Without Title</h3>
          <Alert>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            <AlertDescription>You can also use alerts without a title for simpler messages.</AlertDescription>
          </Alert>
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <div className="rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Component</th>
                <th className="text-left p-4">Props</th>
                <th className="text-left p-4">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-mono text-sm">Alert</td>
                <td className="p-4 text-sm text-muted-foreground">variant?: "default" | "destructive"</td>
                <td className="p-4 text-sm">The alert container</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-mono text-sm">AlertTitle</td>
                <td className="p-4 text-sm text-muted-foreground">-</td>
                <td className="p-4 text-sm">The alert title</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-mono text-sm">AlertDescription</td>
                <td className="p-4 text-sm text-muted-foreground">-</td>
                <td className="p-4 text-sm">The alert description</td>
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
            <code>{`import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function Example() {
  return (
    <Alert>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informational alert message.
      </AlertDescription>
    </Alert>
  )
}`}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}
