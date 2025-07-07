import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Switch } from '@/components/ui/switch'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 19,
    yearlyPrice: 15,
    description: 'Perfect for individuals and small projects',
    features: ['Up to 5 projects', '2GB storage', 'Basic support', 'API access'],
    popular: false,
  },
  {
    name: 'Professional',
    monthlyPrice: 49,
    yearlyPrice: 39,
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
    monthlyPrice: null,
    yearlyPrice: null,
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
  const [isYearly, setIsYearly] = useState(false)

  return (
    <Container asChild>
      <section id="pricing" className="py-12 md:py-24 lg:py-32">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-6">
            Pricing
          </Badge>

          <Typography variant="h2" className="mb-6 max-w-3xl mx-auto tracking-tight">
            Choose the <span className="text-primary">perfect plan</span> for your needs
          </Typography>

          <Typography variant="lead" className="max-w-2xl mx-auto text-muted-foreground">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </Typography>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Typography variant="small" className={!isYearly ? 'font-semibold' : 'text-muted-foreground'}>
              Monthly
            </Typography>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <Typography variant="small" className={isYearly ? 'font-semibold' : 'text-muted-foreground'}>
              Yearly
            </Typography>
            <Badge variant="secondary">Save 20%</Badge>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                'relative flex flex-col transition-all duration-200 hover:shadow-lg hover:scale-105',
                plan.popular ? 'border-primary shadow-lg ring-2 ring-primary/20' : 'hover:border-primary/50',
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="gradient" className="px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-8">
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex items-baseline mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <Typography variant="h1">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</Typography>
                      <Typography variant="muted" className="ml-2">
                        /{isYearly ? 'year' : 'month'}
                      </Typography>
                      {isYearly && (
                        <Typography variant="small" className="ml-2 text-success font-medium">
                          Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                        </Typography>
                      )}
                    </>
                  ) : (
                    <Typography variant="h1">Custom</Typography>
                  )}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <Typography variant="small">{feature}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-8">
                <Button className="w-full" variant={plan.popular ? 'gradient' : 'outline'} size="lg">
                  {plan.monthlyPrice ? 'Get Started' : 'Contact Sales'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/pricing" className="text-primary hover:underline">
            <Typography variant="small">View detailed pricing and compare all features →</Typography>
          </Link>
        </div>
      </section>
    </Container>
  )
}
