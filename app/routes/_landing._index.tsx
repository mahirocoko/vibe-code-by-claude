import { Container } from '@/components/container'
import { PricingSection } from '@/components/pricing-section'
import { Button } from '@/components/ui/button'
import { BarChart3, Code2, Globe, Lock, Rocket, Shield, Sparkles, Users, Zap } from 'lucide-react'
import { Link } from 'react-router'
export function meta() {
  return [{ title: 'Vibe by Claude' }, { name: 'description', content: 'Build your next big idea with Vibe by Claude' }]
}

export function loader() {
  return { message: 'Welcome to Vibe by Claude' }
}

export default function LandingIndex() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full flex items-center py-12 md:py-24 lg:py-32 xl:py-48">
        <Container className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Build Your Next Big Idea with Vibe
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A modern, fast, and scalable foundation for your web applications.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="relative w-full flex items-center py-12 md:py-24 lg:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <Container className="relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                Everything you need to succeed
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Build faster with our comprehensive suite of tools designed for modern web development
              </p>
            </div>
          </div>

          {/* Main features grid */}
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Lightning Performance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built on cutting-edge technology for blazing fast load times and optimal runtime performance
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Developer Experience</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Modern tooling, hot reload, and TypeScript support for a delightful development workflow
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Enterprise Ready</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Battle-tested security, scalability, and reliability for mission-critical applications
              </p>
            </div>
          </div>

          {/* Additional features */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Users className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-medium">Team Collaboration</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Built-in tools for seamless team collaboration and code reviews
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <BarChart3 className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-medium">Analytics Built-in</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Real-time analytics and performance monitoring out of the box
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Lock className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-medium">Secure by Default</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Industry-standard security practices and regular updates
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Globe className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-medium">Global CDN</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Deploy to edge locations worldwide for minimal latency
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Zap className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-medium">API First</h4>
                <p className="mt-1 text-sm text-muted-foreground">RESTful and GraphQL APIs ready for any integration</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Sparkles className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-medium">AI Powered</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Leverage AI for smarter development and user experiences
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Call to Action Section */}
      <section className="relative w-full flex items-center py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/90" />
        </div>

        {/* Content */}
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-8">
              <Sparkles className="h-3.5 w-3.5" />
              Start Building Today
            </div>

            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Ready to Start Your Project?
            </h2>

            <p className="mt-6 text-lg text-white/90 md:text-xl">
              Join thousands of developers who are already building amazing applications with Vibe. Get started in
              minutes with our comprehensive documentation and world-class support.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link to="/contact">
                  Get Started Free
                  <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/20 text-white hover:bg-white/10">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-primary to-secondary"
                  />
                ))}
              </div>
              <p className="text-sm text-white/80">
                Trusted by <span className="font-semibold text-white">10,000+</span> developers worldwide
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
