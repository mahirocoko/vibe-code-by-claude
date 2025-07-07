# Project Structure

## Directory Layout
```
app/
├── components/
│   ├── ui/                    # shadcn/ui components (17 components)
│   │   ├── accordion.tsx
│   │   ├── alert.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── bento-grid.tsx     # Modern grid with responsive design
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── container.tsx      # Enhanced with size variants
│   │   ├── form.tsx           # React Hook Form integration
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── sheet.tsx
│   │   ├── switch.tsx         # Toggle switch component
│   │   ├── textarea.tsx
│   │   ├── toggle.tsx
│   │   └── typography.tsx     # 14 variants with asChild
│   ├── layouts/               # Page layout components
│   │   ├── landing/
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   └── console/
│   │       └── layout.tsx
│   └── modules/               # Feature-specific components
│       └── home/              # Landing page sections
│           ├── hero-section.tsx        # Animated hero with motion
│           ├── features-section.tsx    # Main features showcase
│           ├── pricing-section.tsx     # Pricing cards
│           └── cta-section.tsx         # Call to action
├── routes/
│   ├── _landing._index.tsx    # Landing home page
│   ├── _landing.about.tsx     # About page
│   ├── _landing.contact.tsx   # Contact with forms
│   ├── _landing.pricing.tsx   # Pricing page
│   ├── _landing.tsx           # Landing layout
│   ├── console._index.tsx     # Console dashboard
│   ├── console.settings.tsx   # Settings page
│   ├── console.users.tsx      # User management
│   ├── console.tsx            # Console layout
│   └── design-system/         # Component documentation
│       ├── _index.tsx
│       ├── components/        # Component showcases
│       │   ├── alerts.tsx
│       │   ├── avatars.tsx
│       │   ├── badges.tsx
│       │   ├── buttons.tsx
│       │   ├── cards.tsx
│       │   ├── forms.tsx
│       │   ├── inputs.tsx
│       │   ├── accordions.tsx
│       │   └── toggles.tsx
│       └── foundation/        # Design foundations
│           ├── colors.tsx
│           ├── typography.tsx
│           └── spacing.tsx
├── lib/
│   └── utils.ts              # cn() helper and utilities
├── styles/
│   └── globals.css           # Tailwind CSS v4 with theme variables
├── entry.client.tsx
├── entry.server.tsx
├── root.tsx
└── routes.ts                # Auto-generated route config
```

## Key Configuration Files
- `react-router.config.ts` - React Router v7 configuration
- `biome.json` - Linting & formatting rules (v1.9.4)
- `components.json` - shadcn/ui configuration (baseColor: neutral)
- `tailwind.config.js` - Tailwind CSS v4 configuration (config-free)
- `CLAUDE.md` - Project memory for Claude Code
- `doc/` - Detailed documentation files

## Component Architecture

### **UI Components** (`app/components/ui/`)
- **shadcn/ui foundation**: 17 fully implemented components
- **Typography**: 14 variants (h1-h6, body, muted, etc.) with automatic element mapping
- **Container**: Size variants (sm/md/lg/xl/full) with asChild prop for semantic HTML
- **Form components**: Input, Textarea, Label, Select, Toggle, Switch, Form with validation support
- **BentoGrid**: Modern grid layout with responsive design and image backgrounds
- **Form**: Comprehensive react-hook-form integration with proper validation and accessibility

### **Layout Components** (`app/components/layouts/`)
- **Landing layout**: Header, Footer for public pages
- **Console layout**: Dashboard navigation and structure
- **Semantic HTML**: Single main tag per page, proper section structure

### **Module Components** (`app/components/modules/`)
- **home/**: Landing page sections as separate, reusable components
- **Feature sections**: Modular architecture for better maintainability
- **Motion integration**: Animations using motion library for performance

## Routing Patterns

### **File-based Routing** (React Router v7 fs-routes)
- `_landing.*` - Public landing pages with shared layout
- `console.*` - Protected dashboard pages with console layout
- `design-system.*` - Component documentation and examples

### **Layout Structure**
- **Pathless layouts**: Use `_layout` prefix for nested layouts
- **Route groups**: Organize related routes with shared layouts
- **SEO optimization**: Proper meta tags and semantic structure

## Import Patterns
```typescript
// UI components
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

// Layout components
import { Header } from '@/components/layouts/landing/header'

// Module components
import { HeroSection } from '@/components/modules/home/hero-section'

// Utilities
import { cn } from '@/lib/utils'
```

## Development Patterns

### **Component Usage**
- **Typography**: Use semantic variants, avoid redundant className props
- **Container**: Use size variants and asChild for semantic HTML
- **Motion**: Import from `motion/react` for animations
- **Forms**: Use react-hook-form with zod validation

### **Code Quality**
- **Mandatory formatting**: Run `pnpm check` for all implementations
- **TypeScript**: Full type safety with automatic route typing
- **Component cleanup**: Remove redundant className props that duplicate variant styles

### **Architecture Principles**
- **Modular sections**: Extract complex components to separate modules
- **Semantic HTML**: Proper section structure with single main tag
- **Design system**: Consistent component usage following shadcn/ui patterns
- **Performance**: Motion library for optimized animations