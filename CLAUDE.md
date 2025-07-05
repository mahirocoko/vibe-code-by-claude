# Vibe by Claude - Core Context

## Quick Start
```bash
pnpm dev          # Start development
pnpm check        # Fix code issues
pnpm typecheck    # Type checking
```

## Tech Essentials
- React 19.1.0, TypeScript, React Router v7
- Tailwind CSS 4.1.11, shadcn/ui components  
- Import alias: `@/*` → `app/*`
- Biome 1.9.4 for linting/formatting

## Project Structure
```
app/
├── components/ui/    # shadcn components
├── routes/          # Pages & layouts
├── lib/utils.ts     # cn() helper
└── styles/          # Theme CSS
```

## Current TODOs
- Implement About, Contact, Pricing pages
- Complete landing header/footer components
- Add console functionality

## Development Notes
- Use Container component for layouts
- Run typecheck before commits
- Follow shadcn/ui patterns
- Design system at `/design-system`

---

## Additional Resources (Reference only when needed)
- 📝 [@doc/commit-guide.md](/@doc/commit-guide.md) - Git commit standards
- 🎨 [@doc/design-system.md](/@doc/design-system.md) - Colors & components
- 🛠️ [@doc/commands.md](/@doc/commands.md) - All commands & slash commands
- 📁 [@doc/project-structure.md](/@doc/project-structure.md) - Detailed file structure
- 💻 [@doc/tech-stack.md](/@doc/tech-stack.md) - Full tech stack details