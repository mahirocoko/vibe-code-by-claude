# Vibe by Claude - Project Context

## Tech Stack
- React 19.1.0, TypeScript 5.8.3, React Router v7.4.1
- Rsbuild 1.4.1, Tailwind CSS 4.1.11 (PostCSS)
- Biome 1.9.4 (linting/formatting), shadcn/ui components
- Import alias: `@/*` → `app/*`

## Design System
- **Colors**: oklch color space, blue primary
- **Semantic**: info (blue), warning (yellow), success (green), error (red)
- **Theme**: Light/dark mode support
- **Documentation**: Available at `/design-system`

## Key Commands
```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm check        # Biome check with auto-fix
pnpm typecheck    # Type checking
```

## Project Structure
```
app/
├── components/ui/      # shadcn components
├── routes/
│   ├── landing/       # Public pages
│   ├── console/       # App dashboard
│   └── design-system/ # Documentation
└── styles/globals.css # Theme variables
```

## Git Standards
```
<emoji> <type>: <subject>

<body>

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types**: ✨ feat, 🐛 fix, 🔧 chore, 📝 docs, 💄 style, ♻️ refactor, ✅ test, ⚡ perf

## Custom Commands
- `/project:commit` - Stage and commit with standards
- `/project:push` - Push to remote
- `/project:commit-push` - Commit and push
- `/project:commit-amend` - Amend last commit
- `/project:commit-undo` - Undo last commit

## Current TODOs
- Implement About, Contact, Pricing pages
- Complete landing header/footer components
- Add console functionality

## Important Notes
- Use Container component for consistent layout
- React Router v7 (not react-router-dom syntax)
- Always use shadcn/ui components when available
- Run type checking before commits