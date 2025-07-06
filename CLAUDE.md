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
- Tailwind CSS 4.1.11 (config-free), shadcn/ui components
- Radix UI (Slot, Dialog), class-variance-authority 0.7.1
- Biome 1.9.4 for linting/formatting
- Lucide React 0.525.0 for icons

## Current TODOs
- Console pages typography updated with Typography component, still need other design system components (currently using basic HTML/CSS for layouts and cards)
- Enhance console dashboard with interactive charts and real-time data
- Add authentication system
- Implement console navigation and layout consistency

## Recently Completed
- ✅ Typography component system with comprehensive variants and asChild pattern
- ✅ All landing pages refactored with semantic HTML and unified patterns
- ✅ Container component enhanced with size variants (sm/md/lg/xl/full)
- ✅ Migrated to Tailwind CSS v4 (config-free) and React Router v7 CLI
- ✅ Design system fully implemented (Button, Container, Alert, Typography)
- ✅ shadcn/ui integration with Alert component and consistent spacing patterns

## Development Notes
- Import alias: `@/*` → `app/*`
- **Container component patterns**: 
  - Supports asChild prop for semantic HTML (Container becomes the element)
  - Size variants: sm (2xl), md (4xl), lg (6xl), xl (7xl), full (default: xl)
  - Use max-width instead of container class for better control
  - For sections with backgrounds: `<section><Container>content</Container></section>`
  - For sections without backgrounds: `<Container asChild><section>content</section></Container>`
- **Typography component**: Single component with 14 variants (h1-h6, body, muted, etc.), asChild prop, automatic element mapping. Never override built-in styles, use semantic variants
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
- **Tailwind CSS v4**: No config file needed, CSS-first configuration in globals.css
- **shadcn/ui Integration**: 
  - Primary base for design system components
  - Components: Alert, Button, Container, Sheet
  - Configuration in components.json (baseColor: neutral, cssVariables: true)
  - Install new components: `npx shadcn@latest add [component]`

## Architecture Patterns
- **Component Structure**: 
  - `app/components/ui/` - Reusable UI components (Button, Container, Alert, Typography, etc.)
  - `app/components/layouts/` - Page layout components (Header, Footer)
  - `app/components/modules/` - Feature-specific components (PricingSection, etc.)
- **Container Component**: Enhanced with class-variance-authority
  - Variants: sm/md/lg/xl/full for different max-widths (default: xl)
  - asChild prop for semantic HTML rendering
  - Replaced Tailwind container class with custom max-width system
  - Two usage patterns: `Container asChild` and `<section><Container>`
- **Design System**: Built on shadcn/ui foundation with custom enhancements
  - Foundation: Colors (oklch), Typography (comprehensive variant system)
  - Components: shadcn/ui base (Alert, Button) + custom (Container, Typography, Sheet)
  - Semantic color system: info, warning, success, error states
  - Typography: Single component with 14 variants covering all text needs
  - Comprehensive documentation at /design-system route
- **Console Structure**: Dashboard, Users, Settings pages exist but need design system integration

---

## Additional Resources (Reference when needed)
- 📝 [@doc/commit-guide.md](/@doc/commit-guide.md) - Git commit standards
- 🎨 [@doc/design-system.md](/@doc/design-system.md) - Colors & components
- 🛠️ [@doc/commands.md](/@doc/commands.md) - All commands & slash commands
- 📁 [@doc/project-structure.md](/@doc/project-structure.md) - Detailed file structure
- 💻 [@doc/tech-stack.md](/@doc/tech-stack.md) - Full tech stack details