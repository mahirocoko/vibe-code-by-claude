export default function ColorsShowcase() {
  const semanticColors = [
    { name: 'Primary', variable: 'primary', description: 'Main brand color' },
    { name: 'Secondary', variable: 'secondary', description: 'Supporting actions' },
    { name: 'Info', variable: 'info', description: 'Informational messages' },
    { name: 'Success', variable: 'success', description: 'Success states' },
    { name: 'Warning', variable: 'warning', description: 'Warning messages' },
    { name: 'Error', variable: 'error', description: 'Error states' },
    { name: 'Destructive', variable: 'destructive', description: 'Destructive actions' },
  ]

  const neutralColors = [
    { name: 'Background', variable: 'background' },
    { name: 'Foreground', variable: 'foreground' },
    { name: 'Card', variable: 'card' },
    { name: 'Card Foreground', variable: 'card-foreground' },
    { name: 'Muted', variable: 'muted' },
    { name: 'Muted Foreground', variable: 'muted-foreground' },
    { name: 'Accent', variable: 'accent' },
    { name: 'Accent Foreground', variable: 'accent-foreground' },
    { name: 'Border', variable: 'border' },
    { name: 'Input', variable: 'input' },
    { name: 'Ring', variable: 'ring' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Colors</h1>
        <p className="text-muted-foreground">
          Color palette using the oklch color space for better consistency across themes.
        </p>
      </div>

      {/* Semantic Colors */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Semantic Colors</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {semanticColors.map((color) => (
            <div key={color.variable} className="space-y-2">
              <div
                className={`h-24 rounded-lg bg-${color.variable} border`}
                style={{ backgroundColor: `oklch(var(--${color.variable}))` }}
              />
              <div>
                <h3 className="font-medium">{color.name}</h3>
                <p className="text-sm text-muted-foreground">{color.description}</p>
                <code className="text-xs">var(--{color.variable})</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Neutral Colors */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Neutral Colors</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {neutralColors.map((color) => (
            <div key={color.variable} className="space-y-2">
              <div
                className={`h-24 rounded-lg border`}
                style={{ 
                  backgroundColor: `oklch(var(--${color.variable}))`,
                  borderColor: color.variable.includes('border') ? undefined : 'oklch(var(--border))'
                }}
              />
              <div>
                <h3 className="font-medium">{color.name}</h3>
                <code className="text-xs">var(--{color.variable})</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Usage</h2>
        <div className="space-y-4">
          <div className="rounded-lg border p-4 bg-muted/30">
            <h3 className="font-medium mb-2">Tailwind Classes</h3>
            <pre className="text-sm overflow-x-auto">
              <code>{`// Background colors
bg-primary, bg-secondary, bg-info, bg-success, bg-warning, bg-error

// Text colors
text-primary, text-secondary, text-info, text-success, text-warning, text-error

// Border colors
border-primary, border-secondary, border-info, border-success, border-warning, border-error`}</code>
            </pre>
          </div>

          <div className="rounded-lg border p-4 bg-muted/30">
            <h3 className="font-medium mb-2">CSS Variables</h3>
            <pre className="text-sm overflow-x-auto">
              <code>{`// Direct usage in CSS
.custom-element {
  background-color: oklch(var(--primary));
  color: oklch(var(--primary-foreground));
}

// With opacity
.custom-element {
  background-color: oklch(var(--primary) / 0.5);
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Color Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Examples</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="rounded-lg bg-info text-info-foreground p-4">
              Info Message
            </div>
            <div className="rounded-lg bg-success text-success-foreground p-4">
              Success Message
            </div>
            <div className="rounded-lg bg-warning text-warning-foreground p-4">
              Warning Message
            </div>
            <div className="rounded-lg bg-error text-error-foreground p-4">
              Error Message
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}