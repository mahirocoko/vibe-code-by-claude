# Vibe by Claude - Core Context

## Quick Start
```bash
pnpm dev          # Start development (React Router v7)
pnpm build        # Build for production
pnpm start        # Start production server
pnpm routes       # View route structure
pnpm typecheck    # Type checking
pnpm check        # Fix code issues
```

## Tech Stack
- React 19.1.0, TypeScript, React Router v7
- React Router CLI for build/dev (migrated from Vite)
- React Router fs-routes 7.6.3 for file-based routing
- Tailwind CSS 4.1.11, shadcn/ui
- Biome 1.9.4 for linting/formatting

## Current TODOs
- Migrate console pages to use design system components (currently using basic HTML/CSS)
- Enhance console dashboard with interactive charts and real-time data
- Add authentication system
- Implement console navigation and layout consistency

## Recently Completed
- ✅ All landing pages refactored with consistent semantic HTML structure
- ✅ Container component enhanced with size variants and asChild prop (default: xl)
- ✅ Applied unified patterns across Home, About, Contact, Pricing pages
- ✅ Fixed Contact page functionality and JSX structure issues
- ✅ TailwindCSS IntelliSense configuration improved for VS Code
- ✅ Consistent spacing and typography patterns (py-16, tracking-tight)
- ✅ Design system components fully implemented (Button, Container, Alert, etc.)

## Development Notes
- Import alias: `@/*` → `app/*`
- **Container component patterns**: 
  - Supports asChild prop for semantic HTML (Container becomes the element)
  - Size variants: sm (2xl), md (4xl), lg (6xl), xl (7xl), full (default: xl)
  - Use max-width instead of container class for better control
  - For sections with backgrounds: `<section><Container>content</Container></section>`
  - For sections without backgrounds: `<Container asChild><section>content</section></Container>`
- Run typecheck before commits
- Design system at `/design-system` (fully implemented with comprehensive components)
- Install packages with fixed versions (no ^ or ~)
- File-based routing: `_landing.*` for landing pages, `console.*` for console
- Use React Router v7 CLI commands (not Vite)
- Component organization: `layouts/` (page layouts), `modules/` (feature components), `ui/` (reusable components)
- Console pages exist but need migration to design system components
- Smooth scroll behavior enabled globally
- Primary color system uses oklch(0.5 0.28 269.85) for better perceptual uniformity
- **Landing pages structure**: All pages (Home, About, Contact, Pricing) use consistent patterns:
  - `<main>` wrapper for entire page
  - Semantic `<section>` elements for content areas
  - Consistent spacing: `py-16` for sections
  - Typography: `tracking-tight` for headlines
- **Semantic HTML best practices**: Section backgrounds at section level, Container inside for content width
- **TailwindCSS IntelliSense**: Configured for VS Code with tailwind.config.js

## Architecture Patterns
- **Component Structure**: 
  - `app/components/ui/` - Reusable UI components (Button, Container, Alert, etc.)
  - `app/components/layouts/` - Page layout components (Header, Footer)
  - `app/components/modules/` - Feature-specific components (PricingSection, etc.)
- **Container Component**: Enhanced with class-variance-authority
  - Variants: sm/md/lg/xl/full for different max-widths (default: xl)
  - asChild prop for semantic HTML rendering
  - Replaced Tailwind container class with custom max-width system
  - Two usage patterns: `Container asChild` and `<section><Container>`
- **Design System**: Fully implemented with comprehensive components
  - Foundation: Colors (oklch), Typography
  - Components: Buttons, Forms, Alerts, Cards
  - Semantic color system: info, warning, success, error states
- **Console Structure**: Dashboard, Users, Settings pages exist but need design system integration

---

## Additional Resources (Reference when needed)
- 📝 [@doc/commit-guide.md](/@doc/commit-guide.md) - Git commit standards
- 🎨 [@doc/design-system.md](/@doc/design-system.md) - Colors & components
- 🛠️ [@doc/commands.md](/@doc/commands.md) - All commands & slash commands
- 📁 [@doc/project-structure.md](/@doc/project-structure.md) - Detailed file structure
- 💻 [@doc/tech-stack.md](/@doc/tech-stack.md) - Full tech stack details