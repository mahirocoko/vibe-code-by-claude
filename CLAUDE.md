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

## Development Notes
- Import alias: `@/*` → `app/*`
- Use Container component for layouts
- Run typecheck before commits
- Design system at `/design-system` (fully implemented with comprehensive components)
- Install packages with fixed versions (no ^ or ~)
- File-based routing: `_landing.*` for landing pages, `console.*` for console
- Use React Router v7 CLI commands (not Vite)
- Component organization: `layouts/` (page layouts), `modules/` (feature components), `ui/` (reusable components)
- Console pages exist but need migration to design system components
- Smooth scroll behavior enabled globally
- Primary color system uses oklch(0.5 0.28 269.85) for better perceptual uniformity

## Architecture Patterns
- **Component Structure**: 
  - `app/components/ui/` - Reusable UI components (Button, Container, Alert, etc.)
  - `app/components/layouts/` - Page layout components (Header, Footer)
  - `app/components/modules/` - Feature-specific components (PricingSection, etc.)
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