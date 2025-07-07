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
- Motion 12.22.0 for animations (migrated from framer-motion)
- Radix UI: Slot, Dialog, Accordion, Avatar, Label, Select, Toggle, Switch
- class-variance-authority 0.7.1, clsx 2.1.1, tailwind-merge 3.3.1
- Biome 1.9.4 for linting/formatting
- Lucide React 0.525.0 for icons
- React Hook Form 7.60.0 + Zod 3.25.74 for form validation

## Current TODOs
- Add authentication system (deferred - lower priority)
- Enhance console dashboard with interactive charts and real-time data (deferred)
- Consider adding dark mode toggle functionality
- Optimize testimonials section performance for large datasets

## Recently Completed
- ✅ **Testimonials Section Enhancement**: Animated columns design with infinite scroll using motion
- ✅ **TestimonialsColumn Component**: Reusable UI component with configurable animation durations
- ✅ **cn Utility Guidelines**: Comprehensive documentation for className merging best practices
- ✅ **Design System Compliance**: Maintained 96% compliance with enhanced refactor-component command
- ✅ **Component Architecture**: 19 UI components total (18 shadcn/ui + TestimonialsColumn)
- ✅ **Landing Page Sections**: Complete modular architecture (Hero, Features, Testimonials, Pricing, CTA)
- ✅ **Enhanced Slash Commands**: Updated refactor-component with spacing/alignment consistency checks

## Development Notes
- Import alias: `@/*` → `app/*`
- **Bento Grid**: Responsive 3-column layout with image backgrounds and gradient overlays
- **Container**: Size variants (sm/md/lg/xl/full) with asChild for semantic HTML
- **Typography**: 14 variants with asChild and automatic element mapping
- **Code Standards**: MANDATORY `pnpm check` → `pnpm typecheck` → `pnpm build`
- **Documentation Structure**: Use `doc/` folder for detailed docs, reference with `@doc/filename.md` format
- **Memory Update Workflow**: When using `/update-memory`, ALWAYS update both CLAUDE.md AND corresponding doc files for consistency
- **Resource Format**: Use compact pipe-separated format: `@doc/file1.md | @doc/file2.md | @doc/file3.md`
- **Slash Commands**: 5 component refactoring commands with Claude Code YAML format
  - `/project:refactor-component <file>` - Single component shadcn/ui migration
  - `/project:analyze-components [pattern]` - Design system violation analysis  
  - `/project:design-system-audit [--fix]` - Project-wide compliance audit
  - `/project:design-system-workflow [--auto-fix]` - End-to-end improvement workflow
  - `/project:design-system-sync` - Comprehensive sync for documentation, routes, and navigation
- Run typecheck before commits
- Design system at `/design-system` (fully implemented with 18 components including gradient variants)
- Install packages with fixed versions (no ^ or ~)
- File-based routing: `_landing.*` for landing pages, `console.*` for console
- Use React Router v7 CLI commands (not Vite)
- Component organization: `layouts/` (page layouts), `modules/` (feature components), `ui/` (reusable components)
- **Motion**: Use `motion/react` for animations with Button + Link patterns
- **cn Utility Usage**: Use `cn()` from `@/lib/utils` for className merging when:
  - Merging component props with default classes (recommended)
  - Conditional className logic (strongly recommended)
  - NOT required for simple static className strings
  - Example: `cn('base-class', conditionalClass, props.className)`
- Console pages exist but need migration to design system components
- Smooth scroll behavior enabled globally
- Primary color system uses oklch(0.5 0.28 269.85) for better perceptual uniformity
- **Landing Structure**: Semantic HTML with single `<main>` and consistent `py-16` spacing
- **shadcn/ui**: 18 components + TestimonialsColumn (baseColor: neutral) with `/design-system` documentation and 96% compliance
- **Gradient System**: Badge/Button gradient variants for primary actions and popular features
- **Testimonials System**: Animated infinite-scroll columns with motion, configurable durations, and responsive design

## Architecture Patterns
- **Component Structure**: 
  - `app/components/ui/` - Reusable UI components (Button, Container, Alert, Typography, BentoGrid, TestimonialsColumn, etc.)
  - `app/components/layouts/` - Page layout components (Header, Footer)
  - `app/components/modules/home/` - Landing page sections (HeroSection, FeaturesSection, TestimonialsSection, PricingSection, CtaSection)
- **Bento Grid Architecture**: Modern card-based layout system
  - BentoGrid: Responsive grid container with configurable columns
  - BentoCard: Individual cards with image backgrounds, content areas, and interactive elements
  - Mobile optimization: `justify-end` for content positioning, no animations
  - Desktop enhancement: Hover animations with smooth transitions
  - Background system: Image containers with gradient overlays for content readability
  - Icon design: Consistent white backgrounds with primary color icons
- **Container Component**: Enhanced with class-variance-authority
  - Variants: sm/md/lg/xl/full for different max-widths (default: xl)
  - asChild prop for semantic HTML rendering
  - Replaced Tailwind container class with custom max-width system
  - Two usage patterns: `Container asChild` and `<section><Container>`
- **Design System**: Complete shadcn/ui implementation with comprehensive documentation
  - Foundation: Colors (oklch), Typography (14 variants), Spacing system
  - UI Components: 18 shadcn/ui + TestimonialsColumn (Alert, Avatar, Badge, Button, Card, Input, Label, Select, Textarea, Toggle, Switch, Accordion, Container, Typography, Sheet, BentoGrid, Form + gradient variants)
  - Interactive Examples: All components have working examples with multiple variations
  - Documentation: 21 dedicated pages covering usage patterns, states, and best practices
  - Showcase Pages: Complete showcase with navigation sync and live examples
  - Landing Page Integration: All components used consistently across 5 sections (Hero, Features, Testimonials, Pricing, CTA)
  - Code Quality: 96% design system compliance, enterprise-grade consistency
  - Typography System: ALL redundant className props eliminated, semantic variants enforced
- **Testimonials Architecture**: Animated column system with infinite scroll
  - TestimonialsColumn: Configurable duration, responsive visibility, className merging with cn()
  - Animation: Motion-based infinite scroll with different speeds per column
  - Data: TypeScript interface for testimonial structure (text, image, name, role)
  - Responsive: 1 column mobile, 2 tablet, 3 desktop with gradient mask overlay
- **Console Structure**: Dashboard, Users, Settings pages exist but need design system integration

---

## Resources
@doc/commit-guide.md | @doc/design-system.md | @doc/commands.md | @doc/project-structure.md | @doc/tech-stack.md

**IMPORTANT**: When using `/update-memory`, ALWAYS check and update doc files to maintain consistency between CLAUDE.md and detailed documentation. Changes to architecture, tech stack, or development patterns must be reflected in both locations.