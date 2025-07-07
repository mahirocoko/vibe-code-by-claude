import { Badge } from '@/components/ui/badge'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import { Container } from '@/components/ui/container'
import { Typography } from '@/components/ui/typography'
import { Code2, Lock, Rocket, Shield, Sparkles, Zap } from 'lucide-react'

const features = [
  {
    Icon: Rocket,
    name: 'Lightning Performance',
    description:
      'React Router v7 with optimized builds, motion animations, and instant page loads for exceptional user experience.',
    href: '#',
    cta: 'Learn more',
    background: (
      <div className="absolute inset-x-0 top-0 h-1/2">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
          alt="Performance dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>
    ),
    className: '',
  },
  {
    Icon: Code2,
    name: 'Developer Experience',
    description: 'TypeScript, shadcn/ui design system, Biome formatting, and hot reload for effortless development.',
    href: '#',
    cta: 'Learn more',
    background: (
      <div className="absolute inset-x-0 top-0 h-1/2">
        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&crop=center"
          alt="Code editor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>
    ),
    className: '',
  },
  {
    Icon: Shield,
    name: 'Production Ready',
    description:
      'Semantic HTML, accessibility compliance, and deployment-ready configuration for scalable applications.',
    href: '#',
    cta: 'Learn more',
    background: (
      <div className="absolute inset-x-0 top-0 h-1/2">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center"
          alt="Server infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>
    ),
    className: '',
  },
  {
    Icon: Sparkles,
    name: 'Component Driven',
    description: '14+ shadcn/ui components with animations and design system documentation.',
    href: '#',
    cta: 'Learn more',
    background: (
      <div className="absolute inset-x-0 top-0 h-1/2">
        <img
          src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop&crop=center"
          alt="UI components"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>
    ),
    className: '',
  },
  {
    Icon: Lock,
    name: 'Type Safe',
    description: 'Full TypeScript support with automatic type generation and comprehensive safety checks.',
    href: '#',
    cta: 'Learn more',
    background: (
      <div className="absolute inset-x-0 top-0 h-1/2">
        <img
          src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop&crop=center"
          alt="Security lock"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>
    ),
    className: '',
  },
  {
    Icon: Zap,
    name: 'Modern Stack',
    description: 'React 19, Tailwind CSS v4, Motion animations, and latest web standards for cutting-edge development.',
    href: '#',
    cta: 'Learn more',
    background: (
      <div className="absolute inset-x-0 top-0 h-1/2">
        <img
          src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop&crop=center"
          alt="Modern technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>
    ),
    className: '',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-40 bg-gradient-to-b from-transparent via-primary/15 to-transparent">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="primary-outline" className="gap-2 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Powerful Features
          </Badge>

          <Typography variant="h2" className="mb-6 max-w-3xl mx-auto tracking-tight">
            Everything you need to <span className="text-primary">ship faster</span>
          </Typography>

          <Typography variant="lead" className="max-w-2xl mx-auto text-muted-foreground">
            A complete toolkit for modern web development. From design system to animations, build production-ready
            applications with confidence.
          </Typography>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="md:grid-cols-3 auto-rows-[18rem]">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </Container>
    </section>
  )
}
