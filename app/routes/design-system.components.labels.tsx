import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Typography } from '@/components/ui/typography'

export default function Route() {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Label
        </Typography>
        <Typography className="text-muted-foreground">
          Accessible label component for form controls with proper ARIA associations and styling
        </Typography>
      </div>

      <div className="grid gap-8">
        {/* Basic Labels */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Labels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here" />
            </div>
          </CardContent>
        </Card>

        {/* Label States */}
        <Card>
          <CardHeader>
            <CardTitle>Label States</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="required">Required Field *</Label>
              <Input id="required" placeholder="This field is required" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="optional" className="text-muted-foreground">
                Optional Field
              </Label>
              <Input id="optional" placeholder="This field is optional" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled" className="opacity-50">
                Disabled Field
              </Label>
              <Input id="disabled" placeholder="This field is disabled" disabled />
            </div>
          </CardContent>
        </Card>

        {/* Label with Different Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Different Form Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="rounded" />
              <Label htmlFor="terms">I agree to the terms and conditions</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" id="option1" name="options" />
              <Label htmlFor="option1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" id="option2" name="options" />
              <Label htmlFor="option2">Option 2</Label>
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
                  {`import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

// Basic usage
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</div>

// Required field
<Label htmlFor="required">Required Field *</Label>

// Disabled state
<Label htmlFor="disabled" className="opacity-50">
  Disabled Field
</Label>

// With Switch
<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
