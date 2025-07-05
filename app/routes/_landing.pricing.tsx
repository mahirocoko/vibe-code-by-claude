import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Check, X } from 'lucide-react'
import { Link } from 'react-router'
export function meta() {
  return [
    { title: 'Pricing - Vibe by Claude' },
    { name: 'description', content: 'Choose the perfect plan for your needs. Start free and scale as you grow.' },
  ]
}

const plans = [
  {
    name: 'Starter',
    price: '$19',
    yearlyPrice: '$190',
    description: 'Perfect for individuals and small projects',
    features: [
      { name: 'Up to 5 projects', included: true },
      { name: '2GB storage', included: true },
      { name: 'Basic support', included: true },
      { name: 'API access', included: true },
      { name: 'Custom domain', included: false },
      { name: 'Team collaboration', included: false },
      { name: 'Advanced analytics', included: false },
      { name: 'Priority support', included: false },
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$49',
    yearlyPrice: '$490',
    description: 'Great for growing teams and businesses',
    features: [
      { name: 'Unlimited projects', included: true },
      { name: '50GB storage', included: true },
      { name: 'Priority support', included: true },
      { name: 'Advanced API access', included: true },
      { name: 'Custom domain', included: true },
      { name: 'Team collaboration', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Custom integrations', included: true },
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    yearlyPrice: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      { name: 'Everything in Pro', included: true },
      { name: 'Unlimited storage', included: true },
      { name: 'Dedicated support', included: true },
      { name: 'Custom deployment', included: true },
      { name: 'SLA guarantee', included: true },
      { name: 'Advanced security', included: true },
      { name: 'Custom contracts', included: true },
      { name: 'Onboarding assistance', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const faqs = [
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, all paid plans come with a 14-day free trial. No credit card required.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes, you can save up to 20% when you choose annual billing instead of monthly.',
  },
]

export default function PricingPage() {
  return (
    <main>
      {/* Hero Section */}
      <Container asChild>
        <section className="py-16 text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Always flexible to scale up or down.
            </p>
          </div>
          <div className="inline-flex items-center rounded-lg bg-muted p-1 text-muted-foreground">
            <button className="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:text-foreground">
              Monthly
            </button>
            <button className="rounded-md bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow-sm">
              Yearly (Save 20%)
            </button>
          </div>
        </section>
      </Container>

      {/* Pricing Cards */}
      <Container asChild>
        <section className="py-16">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-lg border p-8 shadow-sm transition-all hover:shadow-md ${
                  plan.popular ? 'border-primary shadow-md' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="mt-2 text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="ml-1 text-muted-foreground">/month</span>}
                  </div>

                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'} size="lg">
                    {plan.cta}
                  </Button>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="h-5 w-5 shrink-0 text-primary" />
                          ) : (
                            <X className="h-5 w-5 shrink-0 text-muted-foreground/50" />
                          )}
                          <span
                            className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground/50'}`}
                          >
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <Container size="md">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground md:text-lg">
              Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <Container asChild>
        <section className="py-16 text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers using Vibe to power their applications.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </section>
      </Container>
    </main>
  )
}
