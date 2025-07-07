import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { Bell, CreditCard, Globe, HelpCircle, Settings, Shield, User } from 'lucide-react'

export default function Route() {
  const faqs = [
    {
      question: 'What is this design system?',
      answer:
        'This is a comprehensive design system built with shadcn/ui components, providing consistent and reusable UI elements for modern web applications.',
    },
    {
      question: 'How do I get started?',
      answer:
        'You can start by exploring the components in our design system documentation, then install the components you need using the shadcn/ui CLI.',
    },
    {
      question: 'Is it free to use?',
      answer:
        'Yes, this design system is completely free and open source. You can use it in both personal and commercial projects.',
    },
    {
      question: 'Can I customize the components?',
      answer:
        'Absolutely! All components are built with Tailwind CSS and can be easily customized to match your brand and design requirements.',
    },
  ]

  const features = [
    {
      title: '🎨 Design Tokens',
      content:
        'Consistent colors, typography, spacing, and other design tokens that ensure visual harmony across your application.',
    },
    {
      title: '🧩 Component Library',
      content:
        'A comprehensive set of reusable components including buttons, forms, navigation, feedback elements, and more.',
    },
    {
      title: '📱 Responsive Design',
      content:
        'All components are built with mobile-first responsive design principles, ensuring great experiences across all devices.',
    },
    {
      title: '♿ Accessibility',
      content:
        'Components follow WCAG guidelines and include proper ARIA attributes, keyboard navigation, and screen reader support.',
    },
    {
      title: '🔧 Developer Experience',
      content: 'TypeScript support, comprehensive documentation, and easy installation with the shadcn/ui CLI.',
    },
  ]

  const troubleshooting = [
    {
      issue: 'Components not showing styles',
      solution:
        'Make sure you have Tailwind CSS properly configured and all necessary dependencies installed. Check that your CSS imports are correct.',
    },
    {
      issue: 'TypeScript errors with components',
      solution:
        'Ensure you have the latest version of TypeScript and that all component prop types are properly imported.',
    },
    {
      issue: 'Dark mode not working',
      solution:
        'Verify that you have the dark mode setup correctly in your Tailwind configuration and that CSS variables are properly defined.',
    },
    {
      issue: 'Icons not displaying',
      solution:
        "Make sure you have lucide-react installed and properly imported the specific icons you're using in your components.",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Accordion Components
        </Typography>
        <Typography className="text-muted-foreground">
          Collapsible content sections for organizing information
        </Typography>
      </div>

      <div className="grid gap-8">
        {/* Basic Accordion */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Accordion</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML elements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components' aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Multiple Accordion */}
        <Card>
          <CardHeader>
            <CardTitle>Multiple Items Open</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Can multiple items be open?</AccordionTrigger>
                <AccordionContent>
                  Yes. Set the type to "multiple" to allow multiple items to be open at the same time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it customizable?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can customize the styling, behavior, and add custom content to each accordion item.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Does it support icons?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can add icons, badges, and other elements to both the trigger and content areas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <Typography variant="small">{faq.answer}</Typography>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Features Accordion */}
        <Card>
          <CardHeader>
            <CardTitle>Feature Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {features.map((feature, index) => (
                <AccordionItem key={index} value={`feature-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <span>{feature.title}</span>
                      <Badge variant="secondary">Feature</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Typography variant="small">{feature.content}</Typography>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Settings Accordion */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="profile">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Profile Settings
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Typography variant="h4" className="mb-2">
                        Personal Information
                      </Typography>
                      <Typography variant="small" className="text-muted-foreground mb-4">
                        Update your personal details and contact information.
                      </Typography>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit Profile
                        </Button>
                        <Button variant="outline" size="sm">
                          Change Avatar
                        </Button>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="billing">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Billing & Payments
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div>
                    <Typography variant="h4" className="mb-2">
                      Payment Methods
                    </Typography>
                    <Typography variant="small" className="text-muted-foreground mb-4">
                      Manage your payment methods and billing information.
                    </Typography>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Add Payment Method
                      </Button>
                      <Button variant="outline" size="sm">
                        View Invoices
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="notifications">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    Notifications
                    <Badge variant="outline" className="ml-auto">
                      3 Active
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div>
                    <Typography variant="h4" className="mb-2">
                      Notification Preferences
                    </Typography>
                    <Typography variant="small" className="text-muted-foreground mb-4">
                      Choose how and when you want to receive notifications.
                    </Typography>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Typography variant="small">Email notifications</Typography>
                        <Badge>Enabled</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <Typography variant="small">Push notifications</Typography>
                        <Badge>Enabled</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <Typography variant="small">SMS notifications</Typography>
                        <Badge variant="secondary">Disabled</Badge>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="security">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Security & Privacy
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div>
                    <Typography variant="h4" className="mb-2">
                      Security Settings
                    </Typography>
                    <Typography variant="small" className="text-muted-foreground mb-4">
                      Manage your account security and privacy preferences.
                    </Typography>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Change Password
                      </Button>
                      <Button variant="outline" size="sm">
                        Enable 2FA
                      </Button>
                      <Button variant="outline" size="sm">
                        Download Data
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="preferences">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Preferences
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div>
                    <Typography variant="h4" className="mb-2">
                      App Preferences
                    </Typography>
                    <Typography variant="small" className="text-muted-foreground mb-4">
                      Customize your app experience and interface preferences.
                    </Typography>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Typography variant="small">Language</Typography>
                        <Badge variant="outline">English</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <Typography variant="small">Timezone</Typography>
                        <Badge variant="outline">UTC-8</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <Typography variant="small">Theme</Typography>
                        <Badge variant="outline">System</Badge>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Troubleshooting Guide */}
        <Card>
          <CardHeader>
            <CardTitle>Troubleshooting Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {troubleshooting.map((item, index) => (
                <AccordionItem key={index} value={`trouble-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <span>❗</span>
                      <span>{item.issue}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <Typography variant="h4">Solution:</Typography>
                      <Typography variant="small">{item.solution}</Typography>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Custom Styled Accordion */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Styled Accordion</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="custom-1" className="border-l-4 border-l-primary">
                <AccordionTrigger className="hover:bg-primary/5 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <span>Getting Started</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-4 bg-muted/30">
                  <Typography variant="small">
                    Welcome to our design system! This section will guide you through the initial setup and basic
                    concepts.
                  </Typography>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="custom-2" className="border-l-4 border-l-secondary">
                <AccordionTrigger className="hover:bg-secondary/5 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                      <span className="text-secondary font-bold">2</span>
                    </div>
                    <span>Advanced Usage</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-4 bg-muted/30">
                  <Typography variant="small">
                    Learn about advanced patterns, customization techniques, and best practices for using the design
                    system.
                  </Typography>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="custom-3" className="border-l-4 border-l-green-500">
                <AccordionTrigger className="hover:bg-green-50 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-700 font-bold">3</span>
                    </div>
                    <span>Best Practices</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-4 bg-muted/30">
                  <Typography variant="small">
                    Discover recommended patterns, accessibility guidelines, and performance optimization techniques.
                  </Typography>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
