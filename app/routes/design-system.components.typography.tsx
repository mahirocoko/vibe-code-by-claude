import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

export default function TypographyShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Typography
        </Typography>
        <Typography className="text-muted-foreground">
          Semantic typography component with 14 variants and automatic element mapping via asChild prop
        </Typography>
      </div>

      <div className="grid gap-8">
        {/* Heading Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Heading Variants</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Typography variant="h1">Heading 1 - Main page title</Typography>
            <Typography variant="h2">Heading 2 - Section title</Typography>
            <Typography variant="h3">Heading 3 - Subsection title</Typography>
            <Typography variant="h4">Heading 4 - Component title</Typography>
            <Typography variant="h5">Heading 5 - Small section</Typography>
            <Typography variant="h6">Heading 6 - Minor heading</Typography>
          </CardContent>
        </Card>

        {/* Body Text Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Body Text Variants</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Typography variant="lead">
              Lead text - Used for introductory paragraphs and important information that needs emphasis.
            </Typography>
            <Typography variant="large">
              Large text - Slightly larger than body text for emphasis or callouts.
            </Typography>
            <Typography variant="body">
              Body text - The default text variant for paragraphs and general content.
            </Typography>
            <Typography variant="small">Small text - Used for captions, labels, and secondary information.</Typography>
            <Typography variant="muted">
              Muted text - Subdued text for less important information and helper text.
            </Typography>
          </CardContent>
        </Card>

        {/* Special Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Special Variants</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Typography variant="blockquote">
              "This is a blockquote variant for quotations and testimonials."
            </Typography>
            <Typography variant="code">inline code variant for code snippets</Typography>
            <Typography variant="code">Ctrl + C (keyboard shortcut)</Typography>
            <Typography variant="muted">This is muted text for less important information</Typography>
          </CardContent>
        </Card>

        {/* AsChild Pattern */}
        <Card>
          <CardHeader>
            <CardTitle>AsChild Pattern</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Typography variant="h2" asChild>
              <h1>H2 styling on H1 element</h1>
            </Typography>
            <Typography variant="body" asChild>
              <span>Body styling on span element</span>
            </Typography>
            <Typography variant="lead" asChild>
              <div>Lead styling on div element</div>
            </Typography>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Typography variant="small" className="font-medium mb-2">
                  Code Example:
                </Typography>
                <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
                  {`import { Typography } from '@/components/ui/typography'

// Basic usage
<Typography variant="h1">Page Title</Typography>
<Typography variant="body">Body content</Typography>
<Typography variant="muted">Helper text</Typography>

// AsChild pattern for semantic HTML
<Typography variant="h2" asChild>
  <h1>H2 styling on H1 element</h1>
</Typography>

// All 14 variants available:
// h1, h2, h3, h4, h5, h6
// lead, large, body, small, muted, subtle
// blockquote, code, pre, list, ordered-list, list-item`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
