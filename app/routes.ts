import { index, layout, type RouteConfig, route } from '@react-router/dev/routes'

export default [
  layout('routes/landing/layout.tsx', [
    // Index route for the home page
    index('routes/landing/index.tsx'),

    // About page
    route('about', 'routes/landing/about.tsx'),

    // Contact page
    route('contact', 'routes/landing/contact.tsx'),

    // Pricing page
    route('pricing', 'routes/landing/pricing.tsx'),
  ]),
] satisfies RouteConfig
