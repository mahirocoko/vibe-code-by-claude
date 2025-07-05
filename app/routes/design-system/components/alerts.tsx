import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function AlertsShowcase() {
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
            <code>{`# Component is already created in your project
# Located at: app/components/ui/alert.tsx`}</code>
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

        {/* Semantic Variants */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Semantic Variants</h3>

          <Alert variant="info">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>This is an informational message to keep you updated.</AlertDescription>
          </Alert>

          <Alert variant="success">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>Your operation completed successfully.</AlertDescription>
          </Alert>

          <Alert variant="warning">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Please review this important information before proceeding.</AlertDescription>
          </Alert>

          <Alert variant="error">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Something went wrong. Please try again later.</AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
            </svg>
            <AlertTitle>Destructive Action</AlertTitle>
            <AlertDescription>This action cannot be undone. Please be certain before continuing.</AlertDescription>
          </Alert>
        </div>

        {/* Without Title */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Without Title</h3>
          <Alert variant="info">
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
                <td className="p-4 text-sm text-muted-foreground">
                  variant?: "default" | "info" | "warning" | "success" | "error" | "destructive"
                </td>
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
    <Alert variant="info">
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
