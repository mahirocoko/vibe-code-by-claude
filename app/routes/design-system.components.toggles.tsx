import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Toggle } from '@/components/ui/toggle'
import { Typography } from '@/components/ui/typography'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Bookmark,
  Eye,
  EyeOff,
  Heart,
  Italic,
  List,
  ListOrdered,
  Share2,
  Star,
  Underline,
  Volume2,
  VolumeX,
} from 'lucide-react'
import { useState } from 'react'

export default function Route() {
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderlined, setIsUnderlined] = useState(false)
  const [alignment, setAlignment] = useState('left')
  const [isVisible, setIsVisible] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [preferences, setPreferences] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
  })
  const [switchPreferences, setSwitchPreferences] = useState({
    enablePush: true,
    emailDigest: false,
    analytics: true,
    marketing: false,
  })

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Toggle & Switch Components
        </Typography>
        <Typography className="text-muted-foreground">
          Interactive toggle buttons and switch components for binary states
        </Typography>
      </div>

      <div className="grid gap-8">
        {/* Basic Toggle */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Toggle States</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4 flex-wrap">
              <Toggle>Default</Toggle>
              <Toggle pressed>Pressed</Toggle>
              <Toggle disabled>Disabled</Toggle>
              <Toggle disabled pressed>
                Disabled Pressed
              </Toggle>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Toggle Variants</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Typography variant="h4" className="mb-2">
                  Default Variant
                </Typography>
                <div className="flex gap-2">
                  <Toggle variant="default">Default</Toggle>
                  <Toggle variant="default" pressed>
                    Pressed
                  </Toggle>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Outline Variant
                </Typography>
                <div className="flex gap-2">
                  <Toggle variant="outline">Outline</Toggle>
                  <Toggle variant="outline" pressed>
                    Pressed
                  </Toggle>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Toggle Sizes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Toggle size="sm">Small</Toggle>
              <Toggle size="default">Default</Toggle>
              <Toggle size="lg">Large</Toggle>
            </div>
          </CardContent>
        </Card>

        {/* Text Formatting Toolbar */}
        <Card>
          <CardHeader>
            <CardTitle>Text Formatting Toolbar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Typography variant="h4" className="mb-2">
                  Text Styles
                </Typography>
                <div className="flex gap-1 p-1 border rounded-md w-fit">
                  <Toggle size="sm" pressed={isBold} onPressedChange={setIsBold} aria-label="Bold">
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle size="sm" pressed={isItalic} onPressedChange={setIsItalic} aria-label="Italic">
                    <Italic className="h-4 w-4" />
                  </Toggle>
                  <Toggle size="sm" pressed={isUnderlined} onPressedChange={setIsUnderlined} aria-label="Underline">
                    <Underline className="h-4 w-4" />
                  </Toggle>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Text Alignment
                </Typography>
                <div className="flex gap-1 p-1 border rounded-md w-fit">
                  <Toggle
                    size="sm"
                    pressed={alignment === 'left'}
                    onPressedChange={() => setAlignment('left')}
                    aria-label="Align Left"
                  >
                    <AlignLeft className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    size="sm"
                    pressed={alignment === 'center'}
                    onPressedChange={() => setAlignment('center')}
                    aria-label="Align Center"
                  >
                    <AlignCenter className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    size="sm"
                    pressed={alignment === 'right'}
                    onPressedChange={() => setAlignment('right')}
                    aria-label="Align Right"
                  >
                    <AlignRight className="h-4 w-4" />
                  </Toggle>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Lists
                </Typography>
                <div className="flex gap-1 p-1 border rounded-md w-fit">
                  <Toggle size="sm" aria-label="Bullet List">
                    <List className="h-4 w-4" />
                  </Toggle>
                  <Toggle size="sm" aria-label="Numbered List">
                    <ListOrdered className="h-4 w-4" />
                  </Toggle>
                </div>
              </div>

              <div className="p-4 border rounded-md">
                <Typography
                  variant="body"
                  className={`
                    ${isBold ? 'font-bold' : ''} 
                    ${isItalic ? 'italic' : ''} 
                    ${isUnderlined ? 'underline' : ''}
                    ${alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : 'text-left'}
                  `}
                >
                  Sample text with formatting applied. Bold: {isBold ? 'ON' : 'OFF'}, Italic: {isItalic ? 'ON' : 'OFF'},
                  Underline: {isUnderlined ? 'ON' : 'OFF'}, Alignment: {alignment}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Typography variant="h4" className="mb-2">
                  Visibility Control
                </Typography>
                <div className="flex items-center gap-4">
                  <Toggle pressed={isVisible} onPressedChange={setIsVisible} className="gap-2">
                    {isVisible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    {isVisible ? 'Visible' : 'Hidden'}
                  </Toggle>
                  <Badge variant={isVisible ? 'default' : 'secondary'}>
                    Status: {isVisible ? 'Visible' : 'Hidden'}
                  </Badge>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Audio Control
                </Typography>
                <div className="flex items-center gap-4">
                  <Toggle pressed={!isMuted} onPressedChange={(pressed) => setIsMuted(!pressed)} className="gap-2">
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    {isMuted ? 'Muted' : 'Unmuted'}
                  </Toggle>
                  <Badge variant={isMuted ? 'destructive' : 'default'}>Audio: {isMuted ? 'Muted' : 'Playing'}</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Social Action Toggles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Typography variant="h4" className="mb-2">
                  Engagement Actions
                </Typography>
                <div className="flex gap-2">
                  <Toggle className="gap-2" variant="outline">
                    <Heart className="h-4 w-4" />
                    Like
                  </Toggle>
                  <Toggle className="gap-2" variant="outline">
                    <Star className="h-4 w-4" />
                    Favorite
                  </Toggle>
                  <Toggle className="gap-2" variant="outline">
                    <Bookmark className="h-4 w-4" />
                    Bookmark
                  </Toggle>
                  <Toggle className="gap-2" variant="outline">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Toggle>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Pressed State
                </Typography>
                <div className="flex gap-2">
                  <Toggle className="gap-2" variant="outline" pressed>
                    <Heart className="h-4 w-4 fill-current" />
                    Liked
                  </Toggle>
                  <Toggle className="gap-2" variant="outline" pressed>
                    <Star className="h-4 w-4 fill-current" />
                    Favorited
                  </Toggle>
                  <Toggle className="gap-2" variant="outline">
                    <Bookmark className="h-4 w-4" />
                    Bookmark
                  </Toggle>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Switch Component */}
        <Card>
          <CardHeader>
            <CardTitle>Switch Component</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Typography variant="h4" className="mb-2">
                  Basic Switch States
                </Typography>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Switch />
                    <Typography variant="small">Default</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch defaultChecked />
                    <Typography variant="small">Checked</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch disabled />
                    <Typography variant="small">Disabled</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch disabled defaultChecked />
                    <Typography variant="small">Disabled Checked</Typography>
                  </div>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Switch with Labels
                </Typography>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="push-notifications"
                      checked={switchPreferences.enablePush}
                      onCheckedChange={(checked) => setSwitchPreferences((prev) => ({ ...prev, enablePush: checked }))}
                    />
                    <label
                      htmlFor="push-notifications"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Enable push notifications
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="email-digest"
                      checked={switchPreferences.emailDigest}
                      onCheckedChange={(checked) => setSwitchPreferences((prev) => ({ ...prev, emailDigest: checked }))}
                    />
                    <label
                      htmlFor="email-digest"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Weekly email digest
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="analytics"
                      checked={switchPreferences.analytics}
                      onCheckedChange={(checked) => setSwitchPreferences((prev) => ({ ...prev, analytics: checked }))}
                    />
                    <label
                      htmlFor="analytics"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Enable analytics
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="marketing"
                      checked={switchPreferences.marketing}
                      onCheckedChange={(checked) => setSwitchPreferences((prev) => ({ ...prev, marketing: checked }))}
                    />
                    <label
                      htmlFor="marketing"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Marketing communications
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle vs Switch Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Toggle vs Switch Comparison</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Typography variant="h4" className="mb-3">
                  Toggle Component
                </Typography>
                <Typography variant="small" className="text-muted-foreground mb-4">
                  Best for toolbar actions, formatting controls, and button-like interactions
                </Typography>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Typography variant="small">Bold text</Typography>
                    <Toggle pressed={isBold} onPressedChange={setIsBold}>
                      <Bold className="h-4 w-4" />
                    </Toggle>
                  </div>
                  <div className="flex items-center justify-between">
                    <Typography variant="small">Show preview</Typography>
                    <Toggle pressed={isVisible} onPressedChange={setIsVisible} className="gap-2">
                      {isVisible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                      {isVisible ? 'Show' : 'Hide'}
                    </Toggle>
                  </div>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-3">
                  Switch Component
                </Typography>
                <Typography variant="small" className="text-muted-foreground mb-4">
                  Best for settings, preferences, and on/off states
                </Typography>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Typography variant="small">Notifications</Typography>
                    <Switch
                      checked={switchPreferences.enablePush}
                      onCheckedChange={(checked) => setSwitchPreferences((prev) => ({ ...prev, enablePush: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Typography variant="small">Analytics tracking</Typography>
                    <Switch
                      checked={switchPreferences.analytics}
                      onCheckedChange={(checked) => setSwitchPreferences((prev) => ({ ...prev, analytics: checked }))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Panel with Toggles */}
        <Card>
          <CardHeader>
            <CardTitle>Settings Panel with Toggles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Typography variant="h4">Enable Notifications</Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Receive email notifications for updates
                  </Typography>
                </div>
                <Toggle
                  pressed={preferences.notifications}
                  onPressedChange={(pressed) => setPreferences((prev) => ({ ...prev, notifications: pressed }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Typography variant="h4">Dark Mode</Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Switch to dark theme
                  </Typography>
                </div>
                <Toggle
                  pressed={preferences.darkMode}
                  onPressedChange={(pressed) => setPreferences((prev) => ({ ...prev, darkMode: pressed }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Typography variant="h4">Auto Save</Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Automatically save changes
                  </Typography>
                </div>
                <Toggle
                  pressed={preferences.autoSave}
                  onPressedChange={(pressed) => setPreferences((prev) => ({ ...prev, autoSave: pressed }))}
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-md">
              <Typography variant="h4" className="mb-2">
                Current Settings:
              </Typography>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <Badge variant={preferences.notifications ? 'default' : 'secondary'} className="w-16 justify-center">
                    {preferences.notifications ? 'ON' : 'OFF'}
                  </Badge>
                  <Typography variant="small">Notifications</Typography>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant={preferences.darkMode ? 'default' : 'secondary'} className="w-16 justify-center">
                    {preferences.darkMode ? 'ON' : 'OFF'}
                  </Badge>
                  <Typography variant="small">Dark Mode</Typography>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant={preferences.autoSave ? 'default' : 'secondary'} className="w-16 justify-center">
                    {preferences.autoSave ? 'ON' : 'OFF'}
                  </Badge>
                  <Typography variant="small">Auto Save</Typography>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Settings Panel with Switches */}
        <Card>
          <CardHeader>
            <CardTitle>Settings Panel with Switches</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Typography variant="h4">Push Notifications</Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Get notified about important updates
                  </Typography>
                </div>
                <Switch
                  checked={switchPreferences.enablePush}
                  onCheckedChange={(checked) => setSwitchPreferences((prev) => ({ ...prev, enablePush: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Typography variant="h4">Email Digest</Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Weekly summary of your activity
                  </Typography>
                </div>
                <Switch
                  checked={switchPreferences.emailDigest}
                  onCheckedChange={(checked) => setSwitchPreferences((prev) => ({ ...prev, emailDigest: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Typography variant="h4">Analytics</Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Help us improve by sharing usage data
                  </Typography>
                </div>
                <Switch
                  checked={switchPreferences.analytics}
                  onCheckedChange={(checked) => setSwitchPreferences((prev) => ({ ...prev, analytics: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Typography variant="h4">Marketing</Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Receive updates about new features
                  </Typography>
                </div>
                <Switch
                  checked={switchPreferences.marketing}
                  onCheckedChange={(checked) => setSwitchPreferences((prev) => ({ ...prev, marketing: checked }))}
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-md">
              <Typography variant="h4" className="mb-2">
                Switch Settings:
              </Typography>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <Badge
                    variant={switchPreferences.enablePush ? 'default' : 'secondary'}
                    className="w-16 justify-center"
                  >
                    {switchPreferences.enablePush ? 'ON' : 'OFF'}
                  </Badge>
                  <Typography variant="small">Push Notifications</Typography>
                </li>
                <li className="flex items-center gap-2">
                  <Badge
                    variant={switchPreferences.emailDigest ? 'default' : 'secondary'}
                    className="w-16 justify-center"
                  >
                    {switchPreferences.emailDigest ? 'ON' : 'OFF'}
                  </Badge>
                  <Typography variant="small">Email Digest</Typography>
                </li>
                <li className="flex items-center gap-2">
                  <Badge
                    variant={switchPreferences.analytics ? 'default' : 'secondary'}
                    className="w-16 justify-center"
                  >
                    {switchPreferences.analytics ? 'ON' : 'OFF'}
                  </Badge>
                  <Typography variant="small">Analytics</Typography>
                </li>
                <li className="flex items-center gap-2">
                  <Badge
                    variant={switchPreferences.marketing ? 'default' : 'secondary'}
                    className="w-16 justify-center"
                  >
                    {switchPreferences.marketing ? 'ON' : 'OFF'}
                  </Badge>
                  <Typography variant="small">Marketing</Typography>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
