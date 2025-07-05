# Development Commands

## Essential Commands
```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm check        # Biome check with auto-fix
pnpm typecheck    # Type checking
pnpm format       # Biome formatting
pnpm start:esm    # Start ESM server
```

## Custom Slash Commands
Project-specific commands in `.claude/commands/`:

- `/project:commit` - Stage all changes and create a properly formatted commit
- `/project:push` - Push commits to remote repository
- `/project:commit-push` - Commit and push in one command
- `/project:commit-amend` - Amend the last commit
- `/project:commit-undo` - Undo last commit (keep changes)

## Command Usage
```bash
# Run development server
pnpm dev

# Check and fix code issues
pnpm check

# Type check before commits
pnpm typecheck

# Use custom commands
/project:commit "feat: add new feature"
/project:commit-push
```

## Pre-commit Checklist
1. Run `pnpm typecheck` to ensure no type errors
2. Run `pnpm check` to fix formatting/linting
3. Review changes with `git diff`
4. Use `/project:commit` for consistent commit format