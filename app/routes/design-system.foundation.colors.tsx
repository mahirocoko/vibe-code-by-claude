export default function Route() {
  const semanticColors = [
    {
      name: 'Primary',
      variable: 'primary',
      className: 'bg-primary',
      textClassName: 'text-primary-foreground',
      description: 'Main brand color',
    },
    {
      name: 'Secondary',
      variable: 'secondary',
      className: 'bg-secondary',
      textClassName: 'text-secondary-foreground',
      description: 'Supporting actions',
    },
    {
      name: 'Info',
      variable: 'info',
      className: 'bg-info',
      textClassName: 'text-info-foreground',
      description: 'Informational messages',
    },
    {
      name: 'Success',
      variable: 'success',
      className: 'bg-success',
      textClassName: 'text-success-foreground',
      description: 'Success states',
    },
    {
      name: 'Warning',
      variable: 'warning',
      className: 'bg-warning',
      textClassName: 'text-warning-foreground',
      description: 'Warning messages',
    },
    {
      name: 'Error',
      variable: 'error',
      className: 'bg-error',
      textClassName: 'text-error-foreground',
      description: 'Error states',
    },
    {
      name: 'Destructive',
      variable: 'destructive',
      className: 'bg-destructive',
      textClassName: 'text-destructive-foreground',
      description: 'Destructive actions',
    },
  ]

  const neutralColors = [
    {
      name: 'Background',
      variable: 'background',
      className: 'bg-background',
      preview: 'bg-background border-2 border-foreground',
    },
    { name: 'Foreground', variable: 'foreground', className: 'bg-foreground', preview: 'bg-foreground' },
    { name: 'Card', variable: 'card', className: 'bg-card', preview: 'bg-card border' },
    {
      name: 'Card Foreground',
      variable: 'card-foreground',
      className: 'bg-card-foreground',
      preview: 'bg-card-foreground',
    },
    { name: 'Muted', variable: 'muted', className: 'bg-muted', preview: 'bg-muted' },
    {
      name: 'Muted Foreground',
      variable: 'muted-foreground',
      className: 'bg-muted-foreground',
      preview: 'bg-muted-foreground',
    },
    { name: 'Accent', variable: 'accent', className: 'bg-accent', preview: 'bg-accent' },
    {
      name: 'Accent Foreground',
      variable: 'accent-foreground',
      className: 'bg-accent-foreground',
      preview: 'bg-accent-foreground',
    },
    { name: 'Border', variable: 'border', className: 'bg-border', preview: 'bg-border' },
    { name: 'Input', variable: 'input', className: 'bg-input', preview: 'bg-input' },
    { name: 'Ring', variable: 'ring', className: 'bg-ring', preview: 'bg-ring' },
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
              <div className={`h-24 rounded-lg border ${color.className} flex items-center justify-center`}>
                <span className={`text-sm font-medium ${color.textClassName}`}>{color.name}</span>
              </div>
              <div>
                <h3 className="font-medium">{color.name}</h3>
                <p className="text-sm text-muted-foreground">{color.description}</p>
                <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{color.className}</code>
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
              <div className={`h-24 rounded-lg ${color.preview}`} />
              <div>
                <h3 className="font-medium">{color.name}</h3>
                <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{color.className}</code>
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
              <code>{`/* Direct usage in CSS (Tailwind v4) */
.custom-element {
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
}

/* With opacity */
.custom-element {
  background-color: oklch(from var(--color-primary) l c h / 0.5);
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Color Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Examples</h2>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-info text-info-foreground p-4 text-center font-medium">Info Message</div>
            <div className="rounded-lg bg-success text-success-foreground p-4 text-center font-medium">
              Success Message
            </div>
            <div className="rounded-lg bg-warning text-warning-foreground p-4 text-center font-medium">
              Warning Message
            </div>
            <div className="rounded-lg bg-error text-error-foreground p-4 text-center font-medium">Error Message</div>
          </div>

          <div className="mt-6 p-4 bg-card border rounded-lg">
            <h3 className="font-medium mb-3">Color Palette Preview</h3>
            <div className="flex gap-2 flex-wrap">
              <div className="w-8 h-8 rounded bg-primary" title="Primary" />
              <div className="w-8 h-8 rounded bg-secondary" title="Secondary" />
              <div className="w-8 h-8 rounded bg-accent" title="Accent" />
              <div className="w-8 h-8 rounded bg-muted" title="Muted" />
              <div className="w-8 h-8 rounded bg-info" title="Info" />
              <div className="w-8 h-8 rounded bg-success" title="Success" />
              <div className="w-8 h-8 rounded bg-warning" title="Warning" />
              <div className="w-8 h-8 rounded bg-error" title="Error" />
              <div className="w-8 h-8 rounded bg-destructive" title="Destructive" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
