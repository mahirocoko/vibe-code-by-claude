# Tech Stack Details

## Core Framework
- **React**: 19.1.0 - Latest React with improved performance
- **TypeScript**: 5.8.3 - Type safety and better DX
- **React Router**: v7.4.1 - Full ecosystem (Express, Node, Serve, Dev)

## Build & Development
- **Vite**: 6.3.5 - Fast build tool (migrated from Rsbuild)
- **React Router fs-routes**: 7.6.3 - File-based routing conventions
- **React Router Plugin**: For SSR and routing
- **ESM Support**: Experimental VM modules

## Styling
- **Tailwind CSS**: 4.1.11 - New PostCSS architecture
- **PostCSS**: For CSS processing
- **tw-animate-css**: Animation utilities

## Code Quality
- **Biome**: 1.9.4 - Fast linting & formatting (downgraded from 2.0.6)
- **TypeScript ESLint**: Via React Router typegen

## UI Components
- **shadcn/ui**: Component library
- **Radix UI**: Accessible primitives
- **Lucide React**: Icon library
- **class-variance-authority**: Component variants
- **tailwind-merge**: Class merging
- **clsx**: Conditional classes

## Important Notes
- React Router v7 syntax (not react-router-dom)
- File-based routing: Use `_layout.*` pattern for pathless layouts
- Route naming: `_landing.*` for landing pages, `console.*` for console
- Tailwind CSS 4.x requires new configuration approach
- Biome 1.9.4 has different config than 2.0.x
- Always run type checking before commits
- Install packages with fixed versions (no ^ or ~) for consistency