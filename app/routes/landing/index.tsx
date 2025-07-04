import { Rocket, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router'
import { Container } from '@/components/container'
import { PricingSection } from '@/components/pricing-section'
import { Button } from '@/components/ui/button'
import type { Route } from './+types'

export function meta(_: Route.MetaArgs) {
  return [{ title: 'Vibe by Claude' }, { name: 'description', content: 'Build your next big idea with Vibe by Claude' }]
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: 'Welcome to Vibe by Claude' }
}

export default function LandingIndex({ loaderData }: Route.ComponentProps) {
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
      <section id="features" className="w-full flex items-center bg-muted py-12 md:py-24 lg:py-32">
        <Container>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Vibe?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Vibe provides the best features to build your application, focusing on performance, developer
                experience, and scalability.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <Rocket className="w-8 h-8 text-muted-foreground" />
              <h3 className="text-xl font-bold">Blazing Fast</h3>
              <p className="text-sm text-muted-foreground">
                Optimized for performance, Vibe ensures your applications load quickly and run smoothly.
              </p>
            </div>
            <div className="grid gap-1">
              <Zap className="w-8 h-8 text-muted-foreground" />
              <h3 className="text-xl font-bold">Developer Friendly</h3>
              <p className="text-sm text-muted-foreground">
                With a clean codebase and modern tools, Vibe makes development a joy.
              </p>
            </div>
            <div className="grid gap-1">
              <Shield className="w-8 h-8 text-muted-foreground" />
              <h3 className="text-xl font-bold">Secure & Scalable</h3>
              <p className="text-sm text-muted-foreground">
                Built with security in mind, Vibe scales effortlessly to meet your growing demands.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Call to Action Section */}
      <section className="w-full flex items-center py-12 md:py-24 lg:py-32">
        <Container className="grid items-center justify-center gap-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Start Your Project?</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join the community and bring your ideas to life with Vibe.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-x-2">
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
