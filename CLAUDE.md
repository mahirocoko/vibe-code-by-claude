# Project Memory - Vibe by Claude

## Core Technologies
- **Framework**: React 19.1.0 & TypeScript 5.8.3
- **Routing**: React Router v7.4.1 (full ecosystem with Express, Node, Serve, Dev)
- **Build System**: Rsbuild 1.4.1 with React Router plugin
- **Styling**: Tailwind CSS 4.1.11 with PostCSS plugin
- **Code Quality**: Biome 2.0.6 (linting & formatting)
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Utilities**: class-variance-authority, tailwind-merge, clsx, tw-animate-css

## Design Principles
- **Theme**: Modern and minimal design with light/dark theme support
- **Colors**: Use `oklch` color system with comprehensive CSS variables
- **Component Structure**: Avoid unnecessary nesting, keep components flat and clean
- **shadcn/ui**: New York style configuration

## Current Route Structure
```
Landing Layout (/)
├── Index page (/)
├── About page (/about) - NEEDS IMPLEMENTATION
├── Contact page (/contact) - NEEDS IMPLEMENTATION
└── Pricing page (/pricing) - NEEDS IMPLEMENTATION

Console Layout (/console)
└── Console Dashboard (/console)
```

## Architecture Patterns
- **SSR**: Server-side rendering with React Router v7 patterns
- **File-Based Routing**: Configured in `app/routes.ts`
- **Import Alias**: `@/*` maps to `app/*` - always use this for app directory imports
- **UI Components**: shadcn/ui components (install via CLI)
- **Modular Layouts**: Separate header/footer components for landing

## Development Commands
- `pnpm dev` - Development server with experimental VM modules
- `pnpm build` - Production build
- `pnpm start:esm` - Start ESM server
- `pnpm typecheck` - Type checking with React Router typegen
- `pnpm check` - Biome check with auto-fix
- `pnpm format` - Biome formatting

## Current Component Structure
```
app/components/
├── container.tsx          # Layout container (reusable wrapper with responsive padding)
├── pricing-section.tsx    # Pricing section component
└── ui/
    ├── button.tsx        # shadcn Button with variants
    └── sheet.tsx         # shadcn Sheet/Dialog

app/routes/
├── landing/
│   ├── index.tsx         # Landing page (refactored to use Container component)
│   ├── pricing.tsx       # Pricing page - NEEDS IMPLEMENTATION
│   └── layout/
│       ├── index.tsx     # Main landing layout
│       ├── header.tsx    # Landing header - NEEDS IMPLEMENTATION
│       └── footer.tsx    # Landing footer - NEEDS IMPLEMENTATION
└── console/
    ├── index.tsx         # Console dashboard
    └── layout.tsx        # Console layout with sidebar
```

## Key Configuration Files
- `rsbuild.config.ts` - Build config with React Router plugin
- `biome.json` - Comprehensive linting/formatting rules
- `components.json` - shadcn/ui configuration
- `app/styles/globals.css` - Global styles and theme variables
- `app/lib/utils.ts` - Utility functions (cn helper)

## Important Development Notes
- React Router v7 uses new patterns (not react-router-dom syntax)
- Tailwind CSS 4.x with new PostCSS architecture
- oklch color space for all color variables
- Always run type checking before commits
- Use shadcn/ui components for consistency
- Biome handles both linting and formatting
- Use Container component for consistent layout wrapping (includes responsive padding)
- Container component automatically applies `container mx-auto px-4 lg:px-8` classes

## Recent Changes (2025-07-04)
- Refactored landing page to use Container component for consistent layout
- Removed manual container classes in favor of reusable Container component
- Fixed import ordering with Biome auto-fix

## Immediate TODOs
- Implement missing route components (About, Contact, Pricing)
- Complete header/footer components for landing layout
- Add actual functionality to console area
- Locate or create tailwind.config.ts file
- Consider refactoring PricingSection component to use Container