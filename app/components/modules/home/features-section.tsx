import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Typography } from '@/components/ui/typography'
import { BarChart3, Code2, Globe, Lock, Rocket, Shield, Sparkles, Users, Zap } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />

      <Container className="relative">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="gap-2 mb-6 bg-background/80 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Powerful Features
          </Badge>

          <Typography variant="h2" className="mb-6 max-w-3xl mx-auto">
            Everything you need to <span className="font-bold text-primary">ship faster</span>
          </Typography>

          <Typography variant="lead" className="max-w-2xl mx-auto text-muted-foreground">
            A complete toolkit for modern web development. From design system to animations, build production-ready
            applications with confidence.
          </Typography>
        </div>

        {/* Main Features */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {/* Performance Card */}
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="relative p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-600 ring-1 ring-blue-500/20">
                <Rocket className="h-7 w-7" />
              </div>
              <Typography variant="h3" className="mb-3 font-semibold">
                Lightning Performance
              </Typography>
              <Typography variant="small" className="text-muted-foreground">
                React Router v7 with optimized builds, motion animations, and instant page loads for exceptional user
                experience
              </Typography>
            </CardContent>
          </Card>

          {/* Developer Experience Card */}
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="relative p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-600 ring-1 ring-purple-500/20">
                <Code2 className="h-7 w-7" />
              </div>
              <Typography variant="h3" className="mb-3 font-semibold">
                Developer Experience
              </Typography>
              <Typography variant="small" className="text-muted-foreground">
                TypeScript, shadcn/ui design system, Biome formatting, and hot reload for effortless development
              </Typography>
            </CardContent>
          </Card>

          {/* Production Ready Card */}
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="relative p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-600 ring-1 ring-green-500/20">
                <Shield className="h-7 w-7" />
              </div>
              <Typography variant="h3" className="mb-3 font-semibold">
                Production Ready
              </Typography>
              <Typography variant="small" className="text-muted-foreground">
                Semantic HTML, accessibility compliance, and deployment-ready configuration for scalable applications
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Component Driven */}
          <div className="group flex items-start gap-4 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-200 hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 text-orange-600 group-hover:scale-110 transition-transform duration-200">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h4" className="font-semibold mb-2">
                Component Driven
              </Typography>
              <Typography variant="small" className="text-muted-foreground">
                14+ shadcn/ui components with animations and design system documentation
              </Typography>
            </div>
          </div>

          {/* Type Safe */}
          <div className="group flex items-start gap-4 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-200 hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-600 group-hover:scale-110 transition-transform duration-200">
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h4" className="font-semibold mb-2">
                Type Safe
              </Typography>
              <Typography variant="small" className="text-muted-foreground">
                Full TypeScript support with automatic type generation and safety
              </Typography>
            </div>
          </div>

          {/* Modern Stack */}
          <div className="group flex items-start gap-4 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-200 hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-600 group-hover:scale-110 transition-transform duration-200">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h4" className="font-semibold mb-2">
                Modern Stack
              </Typography>
              <Typography variant="small" className="text-muted-foreground">
                React 19, Tailwind CSS v4, Motion animations, and latest web standards
              </Typography>
            </div>
          </div>

          {/* Global Ready */}
          <div className="group flex items-start gap-4 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-200 hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 text-violet-600 group-hover:scale-110 transition-transform duration-200">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h4" className="font-semibold mb-2">
                Global Ready
              </Typography>
              <Typography variant="small" className="text-muted-foreground">
                Deploy anywhere with SSR support and edge-optimized performance
              </Typography>
            </div>
          </div>

          {/* Analytics */}
          <div className="group flex items-start gap-4 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-200 hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-600 group-hover:scale-110 transition-transform duration-200">
              <BarChart3 className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h4" className="font-semibold mb-2">
                Analytics Ready
              </Typography>
              <Typography variant="small" className="text-muted-foreground">
                Built-in performance monitoring and analytics integration points
              </Typography>
            </div>
          </div>

          {/* Team Friendly */}
          <div className="group flex items-start gap-4 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-200 hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 text-pink-600 group-hover:scale-110 transition-transform duration-200">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h4" className="font-semibold mb-2">
                Team Friendly
              </Typography>
              <Typography variant="small" className="text-muted-foreground">
                Consistent code formatting, commit standards, and development workflow
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
