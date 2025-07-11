import { CtaSection } from '@/components/modules/home/cta-section'
import { FeaturesSection } from '@/components/modules/home/features-section'
import { HeroSection } from '@/components/modules/home/hero-section'
import { PricingSection } from '@/components/modules/home/pricing-section'
import { TestimonialsSection } from '@/components/modules/home/testimonials-section'

export function meta() {
  return [{ title: 'Vibe by Claude' }, { name: 'description', content: 'Build your next big idea with Vibe by Claude' }]
}

export function loader() {
  return { message: 'Welcome to Vibe by Claude' }
}

export default function Route() {
  return (
    <>
      {/* Animated Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Call to Action Section */}
      <CtaSection />
    </>
  )
}
