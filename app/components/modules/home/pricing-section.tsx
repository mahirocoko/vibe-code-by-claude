import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { Check } from 'lucide-react'
import { Link } from 'react-router'

const plans = [
  {
    name: 'Starter',
    price: '$19',
    description: 'Perfect for individuals and small projects',
    features: ['Up to 5 projects', '2GB storage', 'Basic support', 'API access'],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$49',
    description: 'Great for growing teams and businesses',
    features: [
      'Unlimited projects',
      '50GB storage',
      'Priority support',
      'Advanced API access',
      'Custom integrations',
      'Analytics dashboard',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated support',
      'Custom deployment',
      'SLA guarantee',
      'Advanced security',
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Pricing</div>
            <Typography variant="h2" className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Plan</Typography>
            <Typography className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Start free and scale as you grow. No hidden fees, cancel anytime.
            </Typography>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-lg border p-6 shadow-sm transition-all hover:shadow-md ${
                plan.popular ? 'border-primary shadow-md' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <Typography variant="h3" className="text-xl font-semibold">{plan.name}</Typography>
                  <Typography variant="small" className="mt-2 text-sm text-muted-foreground">{plan.description}</Typography>
                </div>

                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="ml-1 text-muted-foreground">/month</span>}
                </div>

                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/pricing" className="text-sm text-primary hover:underline">
            View detailed pricing and compare all features →
          </Link>
        </div>
      </Container>
    </section>
  )
}
