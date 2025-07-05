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
- Enhance console functionality (users, settings pages exist)
- Implement console dashboard features
- Add authentication system

## Development Notes
- Import alias: `@/*` → `app/*`
- Use Container component for layouts
- Run typecheck before commits
- Design system at `/design-system`
- Install packages with fixed versions (no ^ or ~)
- File-based routing: `_landing.*` for landing pages, `console.*` for console
- Use React Router v7 CLI commands (not Vite)

---

## Additional Resources (Reference when needed)
- 📝 [@doc/commit-guide.md](/@doc/commit-guide.md) - Git commit standards
- 🎨 [@doc/design-system.md](/@doc/design-system.md) - Colors & components
- 🛠️ [@doc/commands.md](/@doc/commands.md) - All commands & slash commands
- 📁 [@doc/project-structure.md](/@doc/project-structure.md) - Detailed file structure
- 💻 [@doc/tech-stack.md](/@doc/tech-stack.md) - Full tech stack details