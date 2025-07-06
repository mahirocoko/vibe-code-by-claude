import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { AlertCircle, CheckCircle, Clock, Sparkles, Star, X } from 'lucide-react'

export default function BadgesShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Badges
        </Typography>
        <Typography className="text-muted-foreground">Small status indicators for UI elements</Typography>
      </div>

      <div className="grid gap-8">
        {/* Default Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Badge Variants</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Typography variant="h4" className="mb-2">
                  Default
                </Typography>
                <div className="flex gap-2 flex-wrap">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card>
          <CardHeader>
            <CardTitle>Badges with Icons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-2 flex-wrap">
              <Badge className="gap-1">
                <Sparkles className="h-3 w-3" />
                Featured
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Star className="h-3 w-3" />
                Favorite
              </Badge>
              <Badge variant="destructive" className="gap-1">
                <AlertCircle className="h-3 w-3" />
                Error
              </Badge>
              <Badge variant="outline" className="gap-1">
                <CheckCircle className="h-3 w-3" />
                Verified
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Status Badges */}
        <Card>
          <CardHeader>
            <CardTitle>Status Indicators</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Typography variant="h4" className="mb-2">
                  Order Status
                </Typography>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="gap-1">
                    <Clock className="h-3 w-3" />
                    Pending
                  </Badge>
                  <Badge className="gap-1 bg-blue-500 hover:bg-blue-600">
                    <Clock className="h-3 w-3" />
                    Processing
                  </Badge>
                  <Badge className="gap-1 bg-green-500 hover:bg-green-600">
                    <CheckCircle className="h-3 w-3" />
                    Shipped
                  </Badge>
                  <Badge className="gap-1 bg-emerald-500 hover:bg-emerald-600">
                    <CheckCircle className="h-3 w-3" />
                    Delivered
                  </Badge>
                  <Badge variant="destructive" className="gap-1">
                    <X className="h-3 w-3" />
                    Cancelled
                  </Badge>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  User Status
                </Typography>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-green-500 hover:bg-green-600">Online</Badge>
                  <Badge className="bg-yellow-500 hover:bg-yellow-600">Away</Badge>
                  <Badge className="bg-red-500 hover:bg-red-600">Busy</Badge>
                  <Badge variant="secondary">Offline</Badge>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Priority Levels
                </Typography>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Low</Badge>
                  <Badge className="bg-blue-500 hover:bg-blue-600">Medium</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">High</Badge>
                  <Badge variant="destructive">Critical</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Examples</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Typography variant="h4" className="mb-2">
                  Notification Badges
                </Typography>
                <div className="flex gap-4 flex-wrap">
                  <div className="relative">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-sm">📬</span>
                    </div>
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      3
                    </Badge>
                  </div>

                  <div className="relative">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-sm">💬</span>
                    </div>
                    <Badge
                      variant="destructive"
                      className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                    >
                      12
                    </Badge>
                  </div>

                  <div className="relative">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-sm">🔔</span>
                    </div>
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 bg-green-500 hover:bg-green-600">
                      <span className="sr-only">New notifications</span>
                    </Badge>
                  </div>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Tags and Categories
                </Typography>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">UI/UX</Badge>
                  <Badge variant="outline">Frontend</Badge>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Version Badges
                </Typography>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-emerald-500 hover:bg-emerald-600">v2.1.0</Badge>
                  <Badge variant="secondary">Beta</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">Alpha</Badge>
                  <Badge variant="outline">Deprecated</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Size Variations */}
        <Card>
          <CardHeader>
            <CardTitle>Size Variations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Badge className="text-xs px-2 py-0.5">Small</Badge>
              <Badge>Default</Badge>
              <Badge className="text-sm px-3 py-1">Large</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
