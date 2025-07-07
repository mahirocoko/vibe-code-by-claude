import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Typography } from '@/components/ui/typography'

export default function TextareaShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Textarea
        </Typography>
        <Typography className="text-muted-foreground">
          Multi-line text input component with resizing capabilities and proper form integration
        </Typography>
      </div>

      <div className="grid gap-8">
        {/* Basic Textarea */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Textarea</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="basic">Message</Label>
              <Textarea id="basic" placeholder="Type your message here..." />
            </div>
          </CardContent>
        </Card>

        {/* Textarea Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Different Sizes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="small">Small (3 rows)</Label>
              <Textarea id="small" placeholder="Small textarea..." rows={3} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="medium">Medium (5 rows)</Label>
              <Textarea id="medium" placeholder="Medium textarea..." rows={5} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="large">Large (8 rows)</Label>
              <Textarea id="large" placeholder="Large textarea..." rows={8} />
            </div>
          </CardContent>
        </Card>

        {/* Textarea States */}
        <Card>
          <CardHeader>
            <CardTitle>States</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="normal">Normal</Label>
              <Textarea id="normal" placeholder="Normal textarea" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled</Label>
              <Textarea id="disabled" placeholder="Disabled textarea" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="readonly">Read only</Label>
              <Textarea id="readonly" value="This is read-only content that cannot be edited." readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="required">Required *</Label>
              <Textarea id="required" placeholder="This field is required" required />
            </div>
          </CardContent>
        </Card>

        {/* Form Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Form Examples</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="feedback">Feedback</Label>
                <Textarea id="feedback" placeholder="Tell us about your experience..." rows={4} />
                <Typography variant="small" className="text-muted-foreground">
                  Please provide detailed feedback to help us improve.
                </Typography>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Write a short bio about yourself..." rows={3} />
                <Typography variant="small" className="text-muted-foreground">
                  Maximum 500 characters.
                </Typography>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Product Description</Label>
                <Textarea id="description" placeholder="Describe your product in detail..." rows={6} />
                <Typography variant="small" className="text-muted-foreground">
                  Include features, benefits, and specifications.
                </Typography>
              </div>
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
                  {`import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

// Basic usage
<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message..." />
</div>

// Custom rows
<Textarea rows={5} placeholder="Larger textarea..." />

// Disabled state
<Textarea disabled placeholder="Disabled textarea" />

// Read only
<Textarea readOnly value="Read-only content" />

// With form integration
<Textarea 
  {...register("description")}
  placeholder="Product description..."
  rows={4}
/>

// Controlled component
const [value, setValue] = useState("")

<Textarea 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Controlled textarea..."
/>`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
