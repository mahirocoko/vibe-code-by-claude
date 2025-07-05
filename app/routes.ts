import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

export default [
  // Landing
  layout('routes/landing/layout/index.tsx', [
    // Index route for the home page
    index('routes/landing/index.tsx'),

    // About page
    route('about', 'routes/landing/about.tsx'),

    // Contact page
    route('contact', 'routes/landing/contact.tsx'),

    // Pricing page
    route('pricing', 'routes/landing/pricing.tsx'),
  ]),

  // Console
  route('console', 'routes/console/layout.tsx', [
    index('routes/console/index.tsx'),
    route('users', 'routes/console/users.tsx'),
    route('settings', 'routes/console/settings.tsx'),
  ]),

  // Design System Documentation
  route('design-system', 'routes/design-system/layout.tsx', [
    index('routes/design-system/index.tsx'),
    route('foundation/colors', 'routes/design-system/colors.tsx'),
    route('foundation/typography', 'routes/design-system/typography.tsx'),
    route('components/buttons', 'routes/design-system/components/buttons.tsx'),
    route('components/forms', 'routes/design-system/components/forms.tsx'),
    route('components/cards', 'routes/design-system/components/cards.tsx'),
  ]),
] satisfies RouteConfig
