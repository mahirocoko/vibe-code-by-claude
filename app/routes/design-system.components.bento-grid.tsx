import { Badge } from '@/components/ui/badge'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { BarChart3, Calendar, Globe, Mail, Shield, Sparkles, Users, Zap } from 'lucide-react'

export default function Route() {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Bento Grid
        </Typography>
        <Typography className="text-muted-foreground">
          Modern grid layout system for showcasing features and content
        </Typography>
      </div>

      <div className="grid gap-8">
        {/* Basic Bento Grid */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Bento Grid</CardTitle>
          </CardHeader>
          <CardContent>
            <BentoGrid className="auto-rows-[180px]">
              <BentoCard
                name="Analytics"
                className="md:col-span-2"
                description="Track your performance with detailed analytics"
                Icon={BarChart3}
              />
              <BentoCard name="Calendar" description="Schedule and manage your events" Icon={Calendar} />
              <BentoCard name="Global Access" description="Access your data from anywhere" Icon={Globe} />
              <BentoCard
                name="Notifications"
                className="md:col-span-2"
                description="Stay updated with real-time notifications"
                Icon={Mail}
              />
            </BentoGrid>
          </CardContent>
        </Card>

        {/* Advanced Bento Grid with Images */}
        <Card>
          <CardHeader>
            <CardTitle>Advanced Bento Grid</CardTitle>
          </CardHeader>
          <CardContent>
            <BentoGrid className="auto-rows-[200px]">
              <BentoCard
                name="Lightning Fast"
                className="md:col-span-3 md:row-span-2"
                description="Experience blazing fast performance with our optimized infrastructure"
                Icon={Zap}
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20" />
                }
              />
              <BentoCard
                name="Secure & Private"
                description="Your data is protected with enterprise-grade security"
                Icon={Shield}
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-20" />
                }
              />
              <BentoCard
                name="Team Collaboration"
                description="Work together seamlessly with your team"
                Icon={Users}
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-20" />
                }
              />
              <BentoCard
                name="Smart Features"
                className="md:col-span-2"
                description="Powered by AI to make your workflow smarter"
                Icon={Sparkles}
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-20" />
                }
              />
            </BentoGrid>
          </CardContent>
        </Card>

        {/* Bento Grid Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Grid Variants</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <Typography variant="h3" className="mb-4">
                Compact Grid
              </Typography>
              <BentoGrid className="auto-rows-[120px] grid-cols-1 md:grid-cols-4">
                <BentoCard name="Feature 1" description="Quick overview" Icon={Zap} />
                <BentoCard name="Feature 2" description="Quick overview" Icon={Shield} />
                <BentoCard name="Feature 3" description="Quick overview" Icon={Users} />
                <BentoCard name="Feature 4" description="Quick overview" Icon={Globe} />
              </BentoGrid>
            </div>

            <div>
              <Typography variant="h3" className="mb-4">
                Tall Grid
              </Typography>
              <BentoGrid className="auto-rows-[250px] grid-cols-1 md:grid-cols-2">
                <BentoCard
                  name="Detailed Analytics"
                  description="Comprehensive insights into your data with detailed charts, graphs, and metrics to help you make informed decisions"
                  Icon={BarChart3}
                  background={
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 opacity-15" />
                  }
                />
                <BentoCard
                  name="Advanced Security"
                  description="Multi-layered security approach including encryption, access controls, and monitoring to keep your data safe"
                  Icon={Shield}
                  background={
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-15" />
                  }
                />
              </BentoGrid>
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
                <Typography variant="h4" className="mb-2">
                  Basic Implementation
                </Typography>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
                    <code>{`<BentoGrid className="auto-rows-[180px]">
  <BentoCard
    name="Feature Name"
    description="Feature description"
    Icon={IconComponent}
  />
</BentoGrid>`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  With Background
                </Typography>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
                    <code>{`<BentoCard
  name="Feature Name"
  className="md:col-span-2"
  description="Feature description"
  Icon={IconComponent}
  background={
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20" />
  }
/>`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Grid Customization
                </Typography>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm">
                    <code>{`<BentoGrid className="auto-rows-[200px] grid-cols-1 md:grid-cols-3">
  <BentoCard className="md:col-span-2 md:row-span-2" ... />
  <BentoCard className="md:col-span-1" ... />
</BentoGrid>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <Badge variant="secondary">Responsive</Badge>
                <Typography>Automatically adapts to different screen sizes</Typography>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary">Flexible</Badge>
                <Typography>Customizable grid columns and row heights</Typography>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary">Interactive</Badge>
                <Typography>Hover animations and smooth transitions</Typography>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary">Accessible</Badge>
                <Typography>Built with accessibility in mind</Typography>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary">Background Support</Badge>
                <Typography>Custom backgrounds with gradient overlays</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
