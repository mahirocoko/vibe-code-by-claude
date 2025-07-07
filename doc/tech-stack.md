# Tech Stack Details

## Core Framework
- **React**: 19.1.0 - Latest React with improved performance
- **TypeScript**: 5.8.3 - Type safety and better DX
- **React Router**: v7.4.1 - Full ecosystem (Express, Node, Serve, Dev)

## Build & Development
- **React Router CLI**: 7.4.1 - Primary build tool (migrated from Vite)
- **React Router fs-routes**: 7.6.3 - File-based routing conventions
- **React Router Plugin**: For SSR and routing
- **Vite**: 6.3.5 - Still available but React Router CLI is preferred
- **ESM Support**: Experimental VM modules

## Styling
- **Tailwind CSS**: 4.1.11 - New PostCSS architecture
- **PostCSS**: For CSS processing
- **tw-animate-css**: Animation utilities

## Code Quality
- **Biome**: 1.9.4 - Fast linting & formatting (downgraded from 2.0.6)
- **TypeScript ESLint**: Via React Router typegen

## UI Components
- **shadcn/ui**: Component library foundation with 17 implemented components
- **Radix UI**: Accessible primitives (Slot, Dialog, Accordion, Avatar, Label, Select, Toggle, Switch)
- **Lucide React**: 0.525.0 - Icon library
- **Motion**: 12.22.0 - Animation library (migrated from framer-motion for performance)
- **class-variance-authority**: 0.7.1 - Component variants
- **tailwind-merge**: 3.3.1 - Class merging
- **clsx**: 2.1.1 - Conditional classes

## Form Handling
- **React Hook Form**: 7.60.0 - Performant forms with easy validation
- **Zod**: 3.25.74 - TypeScript-first schema validation
- **@hookform/resolvers**: 5.1.1 - Form validation resolver integration

## Important Notes
- React Router v7 syntax (not react-router-dom)
- File-based routing: Use `_layout.*` pattern for pathless layouts
- Route naming: `_landing.*` for landing pages, `console.*` for console
- Tailwind CSS 4.x requires new configuration approach
- Biome 1.9.4 has different config than 2.0.x
- Always run type checking before commits
- Install packages with fixed versions (no ^ or ~) for consistency
- **Container component**: Enhanced with size variants (sm/md/lg/xl/full) and asChild prop (default: xl)
- **Semantic HTML patterns**: 
  - `<section><Container>content</Container></section>` for backgrounds
  - `<Container asChild><section>content</section></Container>` for no backgrounds
- **Landing pages**: Modular architecture with 4 distinct sections (Hero, Features, Pricing, CTA)
- **Component modules**: Landing sections extracted to `app/components/modules/home/` for reusability
- **Motion animations**: Use `import { motion } from "motion/react"` for performance-optimized animations
- **Code quality**: Mandatory `pnpm check` workflow and removal of redundant className props
- **TailwindCSS**: IntelliSense configured with tailwind.config.js for VS Code support
- Replaced Tailwind container class with custom max-width system for better control