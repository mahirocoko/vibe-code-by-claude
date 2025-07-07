import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Typography } from '@/components/ui/typography'

export default function Route() {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Switch
        </Typography>
        <Typography className="text-muted-foreground">
          Toggle switch component for binary choices with proper ARIA attributes and accessibility
        </Typography>
      </div>

      <div className="grid gap-8">
        {/* Basic Switch */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Switch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="basic-switch" />
              <Label htmlFor="basic-switch">Enable notifications</Label>
            </div>
          </CardContent>
        </Card>

        {/* Switch States */}
        <Card>
          <CardHeader>
            <CardTitle>Switch States</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="enabled" defaultChecked={false} />
              <Label htmlFor="enabled">Disabled (off)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="checked" defaultChecked={true} />
              <Label htmlFor="checked">Enabled (on)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="disabled-off" disabled />
              <Label htmlFor="disabled-off" className="opacity-50">
                Disabled off
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="disabled-on" disabled defaultChecked={true} />
              <Label htmlFor="disabled-on" className="opacity-50">
                Disabled on
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* Settings Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Settings Panel Example</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Typography variant="h4" className="mb-4">
                Preferences
              </Typography>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing">Marketing emails</Label>
                    <Typography variant="small" className="text-muted-foreground">
                      Receive emails about new products and features
                    </Typography>
                  </div>
                  <Switch id="marketing" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="security">Security alerts</Label>
                    <Typography variant="small" className="text-muted-foreground">
                      Get notified about account security
                    </Typography>
                  </div>
                  <Switch id="security" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="updates">Product updates</Label>
                    <Typography variant="small" className="text-muted-foreground">
                      Weekly digest of product changes
                    </Typography>
                  </div>
                  <Switch id="updates" />
                </div>
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
                  {`import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

// Basic usage
<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>

// Controlled component
const [isEnabled, setIsEnabled] = useState(false)

<Switch 
  id="controlled"
  checked={isEnabled}
  onCheckedChange={setIsEnabled}
/>

// With form integration
<Switch 
  id="terms"
  {...register("acceptTerms")}
  defaultChecked={false}
/>

// Disabled state
<Switch id="disabled" disabled />
<Switch id="disabled-on" disabled defaultChecked={true} />`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
