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
- Radix UI: Slot, Dialog, Accordion, Avatar, Label, Select, Toggle
- class-variance-authority 0.7.1, clsx 2.1.1, tailwind-merge 3.3.1
- Biome 1.9.4 for linting/formatting
- Lucide React 0.525.0 for icons

## Current TODOs
- Enhance console dashboard with interactive charts and real-time data
- Add authentication system
- Implement console navigation and layout consistency
- Update console pages to use new shadcn/ui components

## Recently Completed
- ✅ Fixed HTML semantic structure: Removed duplicate `<main>` tags from landing pages for SEO compliance
- ✅ Typography component system with comprehensive variants and asChild pattern
- ✅ All landing pages refactored with semantic HTML and unified patterns
- ✅ Container component enhanced with size variants (sm/md/lg/xl/full)
- ✅ Migrated to Tailwind CSS v4 (config-free) and React Router v7 CLI
- ✅ Comprehensive shadcn/ui integration: 14 UI components (Button, Container, Alert, Typography, Card, Badge, Input, Textarea, Label, Select, Toggle, Accordion, Avatar, Sheet)
- ✅ Landing pages fully updated: Contact forms, feature cards, pricing cards, FAQ accordion
- ✅ Design system documentation: 9 pages covering all components with comprehensive examples
- ✅ Memory optimization system with automatic cleanup and size monitoring
- ✅ Code formatting standards: Consistent import/function spacing across 42 TypeScript files

## Development Notes
- Import alias: `@/*` → `app/*`
- **Container component patterns**: 
  - Supports asChild prop for semantic HTML (Container becomes the element)
  - Size variants: sm (2xl), md (4xl), lg (6xl), xl (7xl), full (default: xl)
  - Use max-width instead of container class for better control
  - For sections with backgrounds: `<section><Container>content</Container></section>`
  - For sections without backgrounds: `<Container asChild><section>content</section></Container>`
- **Typography component**: Single component with 14 variants (h1-h6, body, muted, etc.), asChild prop, automatic element mapping. Never override built-in styles, use semantic variants
- **Code Formatting Standards**: Maintain blank lines between imports and functions, consistent spacing throughout codebase
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
  - Single `<main>` wrapper from layout (no duplicate main tags in pages)
  - Semantic `<section>` elements for content areas
  - Consistent spacing: `py-16` for sections
  - Typography: `tracking-tight` for headlines
- **Semantic HTML best practices**: Section backgrounds at section level, Container inside for content width
- **Tailwind CSS v4**: No config file needed, CSS-first configuration in globals.css
- **shadcn/ui Integration**: 
  - Complete design system foundation with 14 components
  - Core: Alert, Button, Container, Typography, Sheet
  - Forms: Input, Textarea, Label, Select, Toggle
  - Display: Card, Badge, Avatar, Accordion
  - Configuration: baseColor: neutral, cssVariables: true
  - All components documented at `/design-system` with interactive examples
  - Install: `npx shadcn@latest add [component]`

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
- **Design System**: Complete shadcn/ui implementation with comprehensive documentation
  - Foundation: Colors (oklch), Typography (14 variants), Spacing system
  - UI Components: 14 fully implemented (Alert, Avatar, Badge, Button, Card, Input, Label, Select, Textarea, Toggle, Accordion, Container, Typography, Sheet)
  - Interactive Examples: All components have working examples with multiple variations
  - Documentation: 9 dedicated pages covering usage patterns, states, and best practices
  - Landing Page Integration: All components used consistently across Home, About, Contact, Pricing
  - Code Quality: Consistent formatting with proper import/function spacing across 42 files
- **Console Structure**: Dashboard, Users, Settings pages exist but need design system integration

---

## Additional Resources (Reference when needed)
- 📝 [@doc/commit-guide.md](/@doc/commit-guide.md) - Git commit standards
- 🎨 [@doc/design-system.md](/@doc/design-system.md) - Colors & components
- 🛠️ [@doc/commands.md](/@doc/commands.md) - All commands & slash commands
- 📁 [@doc/project-structure.md](/@doc/project-structure.md) - Detailed file structure
- 💻 [@doc/tech-stack.md](/@doc/tech-stack.md) - Full tech stack details