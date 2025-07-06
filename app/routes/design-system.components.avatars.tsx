import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { Camera, Crown, Settings, Shield, Star, User } from 'lucide-react'

export default function AvatarsShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Avatar Components
        </Typography>
        <Typography className="text-muted-foreground">User profile images with fallback support</Typography>
      </div>

      <div className="grid gap-8">
        {/* Basic Avatars */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Avatar Sizes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="Small avatar" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://github.com/shadcn.png" alt="Default avatar" />
                <AvatarFallback>DF</AvatarFallback>
              </Avatar>
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://github.com/shadcn.png" alt="Medium avatar" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="Large avatar" />
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              <Avatar className="w-20 h-20">
                <AvatarImage src="https://github.com/shadcn.png" alt="Extra large avatar" />
                <AvatarFallback>XL</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>32px</span>
              <span>40px</span>
              <span>48px</span>
              <span>64px</span>
              <span>80px</span>
            </div>
          </CardContent>
        </Card>

        {/* Avatar with Fallbacks */}
        <Card>
          <CardHeader>
            <CardTitle>Avatar Fallbacks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Typography variant="h4" className="mb-2">
                  Image Avatars
                </Typography>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="https://github.com/nextjs.png" alt="@nextjs" />
                    <AvatarFallback>NJ</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Fallback Initials
                </Typography>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/broken-image.jpg" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/broken-image.jpg" alt="Jane Smith" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/broken-image.jpg" alt="Alex Johnson" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/broken-image.jpg" alt="Sarah Wilson" />
                    <AvatarFallback>SW</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Icon Fallbacks
                </Typography>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/broken-image.jpg" alt="Guest" />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/broken-image.jpg" alt="Admin" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Shield className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/broken-image.jpg" alt="Premium" />
                    <AvatarFallback className="bg-yellow-500 text-white">
                      <Crown className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar States */}
        <Card>
          <CardHeader>
            <CardTitle>Avatar States & Indicators</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Typography variant="h4" className="mb-2">
                  Online Status
                </Typography>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="Online user" />
                      <AvatarFallback>ON</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></div>
                  </div>
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" alt="Away user" />
                      <AvatarFallback>AW</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-yellow-500 border-2 border-background rounded-full"></div>
                  </div>
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src="https://github.com/nextjs.png" alt="Busy user" />
                      <AvatarFallback>BS</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-red-500 border-2 border-background rounded-full"></div>
                  </div>
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback>OF</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-gray-400 border-2 border-background rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span>Online</span>
                  <span>Away</span>
                  <span>Busy</span>
                  <span>Offline</span>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Notification Badges
                </Typography>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="User with notifications" />
                      <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      3
                    </Badge>
                  </div>
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" alt="User with many notifications" />
                      <AvatarFallback>U2</AvatarFallback>
                    </Avatar>
                    <Badge
                      variant="destructive"
                      className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                    >
                      9+
                    </Badge>
                  </div>
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback>U3</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary border-2 border-background rounded-full"></div>
                  </div>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Role Indicators
                </Typography>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="Admin user" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      <Shield className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback>VIP</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                      <Crown className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback>ST</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span>Admin</span>
                  <span>VIP</span>
                  <span>Star</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Groups */}
        <Card>
          <CardHeader>
            <CardTitle>Avatar Groups</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Typography variant="h4" className="mb-2">
                  Stacked Avatars
                </Typography>
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="https://github.com/nextjs.png" alt="User 3" />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback>U4</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background bg-muted">
                    <AvatarFallback className="text-xs">+5</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Team Members
                </Typography>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Typography variant="h4">John Doe</Typography>
                      <Typography variant="small" className="text-muted-foreground">
                        Product Manager
                      </Typography>
                    </div>
                    <Badge>Admin</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" alt="Jane Smith" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Typography variant="h4">Jane Smith</Typography>
                      <Typography variant="small" className="text-muted-foreground">
                        Lead Developer
                      </Typography>
                    </div>
                    <Badge variant="secondary">Member</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Typography variant="h4">Alex Johnson</Typography>
                      <Typography variant="small" className="text-muted-foreground">
                        UI/UX Designer
                      </Typography>
                    </div>
                    <Badge variant="outline">Guest</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Avatars */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Avatars</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Typography variant="h4" className="mb-2">
                  Clickable Avatars
                </Typography>
                <div className="flex items-center gap-4">
                  <div className="group relative">
                    <Avatar className="cursor-pointer transition-transform group-hover:scale-105">
                      <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
                      <AvatarFallback>PR</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="group relative">
                    <Avatar className="cursor-pointer transition-all group-hover:ring-2 group-hover:ring-primary group-hover:ring-offset-2">
                      <AvatarFallback>ED</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" className="h-6 w-6 rounded-full p-0">
                        <Camera className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Avatar with Actions
                </Typography>
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="https://github.com/shadcn.png" alt="User profile" />
                      <AvatarFallback>UP</AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Typography variant="h3">Profile Picture</Typography>
                    <Typography variant="small" className="text-muted-foreground">
                      Click to upload a new profile picture
                    </Typography>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Camera className="h-4 w-4 mr-1" />
                        Upload
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4 mr-1" />
                        Settings
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Custom Styled Avatars */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Styled Avatars</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Typography variant="h4" className="mb-2">
                  Gradient Borders
                </Typography>
                <div className="flex items-center gap-4">
                  <div className="p-0.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="https://github.com/shadcn.png" alt="Gradient border" />
                      <AvatarFallback>GB</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="p-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                    <Avatar className="border-2 border-background">
                      <AvatarFallback>BL</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="p-0.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
                    <Avatar className="border-2 border-background">
                      <AvatarFallback>GR</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Squared Avatars
                </Typography>
                <div className="flex items-center gap-4">
                  <Avatar className="rounded-lg">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Square avatar" />
                    <AvatarFallback>SQ</AvatarFallback>
                  </Avatar>
                  <Avatar className="rounded-lg">
                    <AvatarFallback>RD</AvatarFallback>
                  </Avatar>
                  <Avatar className="rounded-sm">
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Colored Backgrounds
                </Typography>
                <div className="flex items-center gap-4">
                  <Avatar className="bg-red-500">
                    <AvatarFallback className="text-white">R</AvatarFallback>
                  </Avatar>
                  <Avatar className="bg-blue-500">
                    <AvatarFallback className="text-white">B</AvatarFallback>
                  </Avatar>
                  <Avatar className="bg-green-500">
                    <AvatarFallback className="text-white">G</AvatarFallback>
                  </Avatar>
                  <Avatar className="bg-purple-500">
                    <AvatarFallback className="text-white">P</AvatarFallback>
                  </Avatar>
                  <Avatar className="bg-gradient-to-br from-orange-400 to-red-500">
                    <AvatarFallback className="text-white">GR</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
