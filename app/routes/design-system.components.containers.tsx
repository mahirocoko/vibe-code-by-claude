import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Typography } from '@/components/ui/typography'

export default function Route() {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Container
        </Typography>
        <Typography className="text-muted-foreground">
          Responsive container component with size variants and semantic HTML support via asChild prop
        </Typography>
      </div>

      <div className="grid gap-8">
        {/* Size Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Size Variants</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Typography variant="small" className="font-medium mb-2">
                Small (max-w-3xl)
              </Typography>
              <Container size="sm" className="bg-muted/50 p-4 rounded">
                <Typography>Small container content</Typography>
              </Container>
            </div>
            <div>
              <Typography variant="small" className="font-medium mb-2">
                Medium (max-w-5xl)
              </Typography>
              <Container size="md" className="bg-muted/50 p-4 rounded">
                <Typography>Medium container content</Typography>
              </Container>
            </div>
            <div>
              <Typography variant="small" className="font-medium mb-2">
                Large (max-w-6xl)
              </Typography>
              <Container size="lg" className="bg-muted/50 p-4 rounded">
                <Typography>Large container content</Typography>
              </Container>
            </div>
            <div>
              <Typography variant="small" className="font-medium mb-2">
                Extra Large (max-w-7xl) - Default
              </Typography>
              <Container className="bg-muted/50 p-4 rounded">
                <Typography>Extra large container content (default)</Typography>
              </Container>
            </div>
          </CardContent>
        </Card>

        {/* AsChild Pattern */}
        <Card>
          <CardHeader>
            <CardTitle>AsChild Pattern</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Typography variant="small" className="font-medium mb-2">
                Semantic HTML with asChild
              </Typography>
              <Container asChild>
                <section className="bg-muted/50 p-4 rounded">
                  <Typography>This renders as a semantic &lt;section&gt; element with container styling</Typography>
                </section>
              </Container>
            </div>
            <div>
              <Typography variant="small" className="font-medium mb-2">
                Background Sections
              </Typography>
              <section className="bg-primary/10 p-4 rounded">
                <Container>
                  <Typography>Section with background, content in container</Typography>
                </Container>
              </section>
            </div>
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
                  {`// Standard container
<Container>
  <h1>Page Content</h1>
</Container>

// Size variants
<Container size="sm">Small content</Container>
<Container size="lg">Large content</Container>

// Semantic HTML
<Container asChild>
  <section>Semantic section</section>
</Container>

// Background sections
<section className="bg-muted">
  <Container>Centered content</Container>
</section>`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
