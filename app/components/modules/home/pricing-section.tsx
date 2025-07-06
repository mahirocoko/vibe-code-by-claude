import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
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
            <Badge variant="secondary">Pricing</Badge>
            <Typography variant="h2">Choose Your Plan</Typography>
            <Typography className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Start free and scale as you grow. No hidden fees, cancel anytime.
            </Typography>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative transition-all hover:shadow-md ${plan.popular ? 'border-primary shadow-md' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>Most Popular</Badge>
                </div>
              )}

              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="ml-1 text-muted-foreground">/month</span>}
                </div>

                <ul className="mt-4 space-y-2 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </CardFooter>
            </Card>
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
