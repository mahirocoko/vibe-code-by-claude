import { index, layout, type RouteConfig, route } from '@react-router/dev/routes'

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
] satisfies RouteConfig
