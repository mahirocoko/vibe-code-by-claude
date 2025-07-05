# Project Structure

## Directory Layout
```
app/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── container.tsx    # Layout wrapper component
│   └── pricing-section.tsx
├── routes/
│   ├── landing/         # Public pages
│   │   ├── index.tsx
│   │   ├── about.tsx    # TODO: Implement
│   │   ├── contact.tsx  # TODO: Implement
│   │   ├── pricing.tsx  # TODO: Implement
│   │   └── layout/
│   │       ├── index.tsx
│   │       ├── header.tsx  # TODO: Implement
│   │       └── footer.tsx  # TODO: Implement
│   ├── console/         # App dashboard
│   │   ├── index.tsx
│   │   └── layout.tsx
│   └── design-system/   # Documentation
│       ├── index.tsx
│       ├── layout.tsx
│       ├── colors.tsx
│       ├── typography.tsx
│       └── components/
├── lib/
│   └── utils.ts         # cn() helper function
├── styles/
│   └── globals.css      # Theme variables
├── entry.client.tsx
├── entry.server.tsx
├── root.tsx
└── routes.ts           # Route configuration
```

## Key Files
- `rsbuild.config.ts` - Build configuration
- `biome.json` - Linting & formatting rules
- `components.json` - shadcn/ui configuration
- `CLAUDE.md` - Project memory for Claude Code
- `@doc/` - Additional documentation

## Import Patterns
- Use `@/*` alias for app directory imports
- Example: `import { Button } from '@/components/ui/button'`

## Component Patterns
- Use Container component for consistent layout
- Container applies: `container mx-auto px-4 lg:px-8`
- Follow shadcn/ui patterns for new components