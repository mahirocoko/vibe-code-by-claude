import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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

export default function ToggleShowcase() {
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

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Toggle Components
        </Typography>
        <Typography className="text-muted-foreground">Interactive toggle buttons for binary states</Typography>
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

        {/* Settings Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Settings Panel Example</CardTitle>
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
      </div>
    </div>
  )
}
