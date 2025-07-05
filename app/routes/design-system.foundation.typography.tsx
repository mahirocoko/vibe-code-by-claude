import { Typography } from '@/components/ui/typography'

export default function TypographyShowcase() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header>
        <Typography variant="h1" className="mb-4">Typography</Typography>
        <Typography variant="lead">Typography scale and text styles for consistent design using a single component.</Typography>
      </header>

      {/* Installation */}
      <section className="space-y-4">
        <Typography variant="h2">Installation</Typography>
        <Typography variant="pre">{`// Component is already created in your project
// Located at: app/components/ui/typography.tsx`}</Typography>
      </section>

      {/* Headings */}
      <section className="space-y-6">
        <Typography variant="h2">Headings</Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="code" className="text-xs">{'<Typography variant="h1">Heading 1</Typography>'}</Typography>
          </div>
          <div>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="code" className="text-xs">{'<Typography variant="h2">Heading 2</Typography>'}</Typography>
          </div>
          <div>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="code" className="text-xs">{'<Typography variant="h3">Heading 3</Typography>'}</Typography>
          </div>
          <div>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="code" className="text-xs">{'<Typography variant="h4">Heading 4</Typography>'}</Typography>
          </div>
          <div>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="code" className="text-xs">{'<Typography variant="h5">Heading 5</Typography>'}</Typography>
          </div>
          <div>
            <Typography variant="h6">Heading 6</Typography>
            <Typography variant="code" className="text-xs">{'<Typography variant="h6">Heading 6</Typography>'}</Typography>
          </div>
        </div>
      </section>

      {/* Body Text */}
      <section className="space-y-6">
        <Typography variant="h2">Text Variants</Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="lead">Lead text - Perfect for introductory paragraphs with emphasis</Typography>
            <Typography variant="code" className="text-xs">{'<Typography variant="lead">Lead text</Typography>'}</Typography>
          </div>
          <div>
            <Typography variant="large">Large text - Slightly bigger than default for emphasis</Typography>
            <Typography variant="code" className="text-xs">{'<Typography variant="large">Large text</Typography>'}</Typography>
          </div>
          <div>
            <Typography variant="body">Body text - Default paragraph text for main content</Typography>
            <Typography variant="code" className="text-xs">{'<Typography variant="body">Body text</Typography>'}</Typography>
          </div>
          <div>
            <Typography variant="small">Small text - For secondary information and details</Typography>
            <Typography variant="code" className="text-xs">{'<Typography variant="small">Small text</Typography>'}</Typography>
          </div>
          <div>
            <Typography variant="muted">Muted text - For less important information</Typography>
            <Typography variant="code" className="text-xs">{'<Typography variant="muted">Muted text</Typography>'}</Typography>
          </div>
          <div>
            <Typography variant="subtle">Subtle text - For very low-emphasis content</Typography>
            <Typography variant="code" className="text-xs">{'<Typography variant="subtle">Subtle text</Typography>'}</Typography>
          </div>
        </div>
      </section>

      {/* Special Components */}
      <section className="space-y-6">
        <Typography variant="h2">Special Components</Typography>
        
        <div className="space-y-6">
          <div>
            <Typography variant="h3" className="mb-3">Code & Pre</Typography>
            <div className="space-y-3">
              <div>
                <Typography>Inline code: <Typography variant="code" asChild><span>const example = 'hello'</span></Typography></Typography>
              </div>
              <div>
                <Typography className="mb-2">Code block:</Typography>
                <Typography variant="pre">{`function example() {
  return 'Hello, World!'
}`}</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="h3" className="mb-3">Blockquote</Typography>
            <Typography variant="blockquote">
              "This is a blockquote component that provides visual emphasis for quoted content."
            </Typography>
          </div>

          <div>
            <Typography variant="h3" className="mb-3">Lists</Typography>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Typography className="mb-2 font-medium">Unordered List:</Typography>
                <Typography variant="list">
                  <Typography variant="list-item">First item</Typography>
                  <Typography variant="list-item">Second item</Typography>
                  <Typography variant="list-item">Third item</Typography>
                </Typography>
              </div>
              <div>
                <Typography className="mb-2 font-medium">Ordered List:</Typography>
                <Typography variant="ordered-list">
                  <Typography variant="list-item">First step</Typography>
                  <Typography variant="list-item">Second step</Typography>
                  <Typography variant="list-item">Third step</Typography>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AsChild Pattern */}
      <section className="space-y-6">
        <Typography variant="h2">AsChild Pattern</Typography>
        <Typography>Use the <Typography variant="code" asChild><span>asChild</span></Typography> prop to apply styles to your own element:</Typography>
        
        <div className="space-y-4">
          <div>
            <Typography variant="h3" className="mb-2">Basic Usage</Typography>
            <div className="space-y-3">
              <div>
                <Typography variant="h4" asChild><button>Button as Heading</button></Typography>
              </div>
              <div>
                <Typography variant="lead" asChild><div>Div with lead styling</div></Typography>
              </div>
              <div>
                <Typography variant="code" asChild><mark>Highlighted code text</mark></Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="h3" className="mb-2">With Links</Typography>
            <div className="space-y-2">
              <Typography variant="h5" asChild>
                <a href="#" className="text-primary hover:underline">
                  Heading 5 as Link
                </a>
              </Typography>
              <Typography variant="small" asChild>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Small text as link
                </a>
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <Typography variant="h2">API Reference</Typography>
        <div className="rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Variant</th>
                <th className="text-left p-4">Element</th>
                <th className="text-left p-4">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-mono text-sm">h1-h6</td>
                <td className="p-4 text-sm text-muted-foreground">h1-h6</td>
                <td className="p-4 text-sm">Heading elements</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-mono text-sm">lead, large, body, small, muted, subtle</td>
                <td className="p-4 text-sm text-muted-foreground">p</td>
                <td className="p-4 text-sm">Text variants</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-mono text-sm">code</td>
                <td className="p-4 text-sm text-muted-foreground">code</td>
                <td className="p-4 text-sm">Inline code</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-mono text-sm">pre</td>
                <td className="p-4 text-sm text-muted-foreground">pre</td>
                <td className="p-4 text-sm">Code blocks</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-mono text-sm">blockquote</td>
                <td className="p-4 text-sm text-muted-foreground">blockquote</td>
                <td className="p-4 text-sm">Quote text</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-mono text-sm">list, ordered-list</td>
                <td className="p-4 text-sm text-muted-foreground">ul, ol</td>
                <td className="p-4 text-sm">Lists</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-mono text-sm">list-item</td>
                <td className="p-4 text-sm text-muted-foreground">li</td>
                <td className="p-4 text-sm">List items</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Prop</th>
                <th className="text-left p-4">Type</th>
                <th className="text-left p-4">Default</th>
                <th className="text-left p-4">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-mono text-sm">variant</td>
                <td className="p-4 text-sm text-muted-foreground">string</td>
                <td className="p-4 font-mono text-sm">"body"</td>
                <td className="p-4 text-sm">Typography variant to apply</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-mono text-sm">asChild</td>
                <td className="p-4 text-sm text-muted-foreground">boolean</td>
                <td className="p-4 font-mono text-sm">false</td>
                <td className="p-4 text-sm">Apply styles to child element instead</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <Typography variant="h2">Usage</Typography>
        <Typography variant="pre">{`import { Typography } from '@/components/ui/typography'

export default function Example() {
  return (
    <>
      <Typography variant="h1">Page Title</Typography>
      <Typography variant="lead">Introduction paragraph with emphasis</Typography>
      <Typography>Regular body text for main content</Typography>
      <Typography variant="muted">Secondary information</Typography>
      
      <Typography variant="code" asChild><span>inline code</span></Typography>
      
      <Typography variant="pre">{\`code block
with multiple lines\`}</Typography>
      
      <Typography variant="blockquote">
        Important quote or callout text
      </Typography>
      
      {/* Override element with 'asChild' prop */}
      <Typography variant="body" asChild><span>Body text as span</span></Typography>
    </>
  )
}`}</Typography>
      </section>
    </div>
  )
}
