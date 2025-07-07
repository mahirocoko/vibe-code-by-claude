import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Typography } from '@/components/ui/typography'
import { Rocket, Sparkles } from 'lucide-react'
import { Link } from 'react-router'

export function CtaSection() {
  return (
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
          <Badge variant="secondary" className="gap-2 bg-white/10 backdrop-blur-sm text-white border-white/20 mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            Start Building Today
          </Badge>

          <Typography variant="h2" className="text-white">
            Ready to Start Your Project?
          </Typography>

          <Typography variant="large" className="mt-6 text-white/90">
            Join thousands of developers who are already building amazing applications with Vibe. Get started in minutes
            with our comprehensive documentation and world-class support.
          </Typography>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link to="/contact">
                Get Started Free
                <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Avatar key={i} className="h-10 w-10 border-2 border-white">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary" />
                </Avatar>
              ))}
            </div>
            <Typography variant="small" className="text-white/80">
              Trusted by{' '}
              <Typography variant="small" asChild>
                <span className="font-semibold text-white">10,000+</span>
              </Typography>{' '}
              developers worldwide
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  )
}
