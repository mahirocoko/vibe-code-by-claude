import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <Container asChild>
        <section className="py-16 text-center">
          <Typography variant="h1" className="text-4xl font-bold mb-6">About Vibe</Typography>
          <Typography variant="lead" className="text-xl text-muted-foreground">
            Empowering creators and businesses with innovative AI-powered solutions
          </Typography>
        </section>
      </Container>

      {/* Mission & Vision Section */}
      <Container asChild size="md">
        <section className="py-16 grid md:grid-cols-2 gap-12">
          <div>
            <Typography variant="h2" className="text-2xl font-semibold mb-4">Our Mission</Typography>
            <Typography className="text-muted-foreground leading-relaxed">
              We believe in democratizing AI technology to help individuals and businesses unlock their full potential. 
              Our platform combines cutting-edge artificial intelligence with intuitive design to create tools that 
              anyone can use, regardless of their technical expertise.
            </Typography>
          </div>
          <div>
            <Typography variant="h2" className="text-2xl font-semibold mb-4">Our Vision</Typography>
            <Typography className="text-muted-foreground leading-relaxed">
              To become the leading platform that bridges the gap between complex AI capabilities and everyday users, 
              making advanced technology accessible, practical, and transformative for millions of people worldwide.
            </Typography>
          </div>
        </section>
      </Container>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <Container className="text-center">
          <Typography variant="h2" className="text-2xl font-semibold mb-8">What We Offer</Typography>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <Typography variant="h3" className="font-semibold mb-2">Lightning Fast</Typography>
              <Typography variant="small" className="text-muted-foreground text-sm">
                Powered by state-of-the-art AI models optimized for speed and efficiency
              </Typography>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <Typography variant="h3" className="font-semibold mb-2">Secure & Private</Typography>
              <Typography variant="small" className="text-muted-foreground text-sm">
                Your data is protected with enterprise-grade security and privacy measures
              </Typography>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <Typography variant="h3" className="font-semibold mb-2">User-Friendly</Typography>
              <Typography variant="small" className="text-muted-foreground text-sm">
                Intuitive interface designed for both beginners and power users
              </Typography>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <Container asChild>
        <section className="py-16 text-center">
          <Typography variant="h2" className="text-2xl font-semibold mb-4">Our Team</Typography>
          <Typography className="text-muted-foreground mb-6">
            We're a passionate team of AI researchers, engineers, and designers dedicated to pushing the boundaries of what's possible with artificial intelligence.
          </Typography>
          <div className="flex justify-center gap-4">
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-primary-foreground font-semibold">AI</span>
              </div>
              <Typography variant="small" className="text-sm font-medium">AI Research Team</Typography>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-primary-foreground font-semibold">ENG</span>
              </div>
              <Typography variant="small" className="text-sm font-medium">Engineering Team</Typography>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-primary-foreground font-semibold">UX</span>
              </div>
              <Typography variant="small" className="text-sm font-medium">Design Team</Typography>
            </div>
          </div>
        </section>
      </Container>

      {/* CTA Section */}
      <Container asChild>
        <section className="py-16 text-center">
          <Typography variant="h2" className="text-2xl font-semibold mb-4">Ready to Get Started?</Typography>
          <Typography className="text-muted-foreground mb-6">
            Join thousands of users who are already transforming their work with Vibe
          </Typography>
          <div className="flex justify-center gap-4">
            <Button size="lg">Start Free Trial</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </section>
      </Container>
    </main>
  )
}
