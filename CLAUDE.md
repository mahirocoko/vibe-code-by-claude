# Vibe by Claude - Core Context

## Quick Start
```bash
pnpm dev          # Start development
pnpm check        # Fix code issues
pnpm typecheck    # Type checking
```

## Tech Stack
- React 19.1.0, TypeScript, React Router v7
- Vite 6.3.5 (migrated from Rsbuild)
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

---

## Additional Resources (Reference when needed)
- 📝 [@doc/commit-guide.md](/@doc/commit-guide.md) - Git commit standards
- 🎨 [@doc/design-system.md](/@doc/design-system.md) - Colors & components
- 🛠️ [@doc/commands.md](/@doc/commands.md) - All commands & slash commands
- 📁 [@doc/project-structure.md](/@doc/project-structure.md) - Detailed file structure
- 💻 [@doc/tech-stack.md](/@doc/tech-stack.md) - Full tech stack details