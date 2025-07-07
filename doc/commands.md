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
Project-specific commands organized in `.claude/commands/`:

### **📁 Git Commands** (`git/`)
- `/project:commit [message]` - Stage all changes and create properly formatted commit
- `/project:push [branch]` - Push commits to remote repository
- `/project:commit-push [message]` - Commit and push in single workflow

### **🧩 Component Commands** (`components/`)
- `/project:refactor-component <file>` - Refactor single component to use shadcn/ui
- `/project:analyze-components [pattern]` - Analyze components for design system violations
- `/project:design-system-audit [--fix]` - Comprehensive project-wide design system audit
- `/project:design-system-workflow [--auto-fix]` - **End-to-end design system improvement workflow**
- `/project:design-system-sync` - **Comprehensive sync for documentation, routes, and navigation**

### **📚 Documentation Commands** (`docs/`)
- `/project:update-memory [--optimize]` - Update Claude's memory and documentation

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

# Component refactoring workflow (recommended)
/project:design-system-workflow --auto-fix

# Individual component operations
/project:refactor-component app/components/modules/home/pricing-section.tsx
/project:analyze-components app/components/modules/**
/project:design-system-audit --fix
```

## Pre-commit Checklist
1. Run `pnpm check` to fix formatting/linting (MANDATORY)
2. Run `pnpm typecheck` to ensure no type errors
3. Review changes with `git diff`
4. Check for redundant className props in components
5. Use `/project:commit` for consistent commit format

## Component Development Guidelines
1. **Typography**: Use semantic variants, don't add redundant text styling
   ```tsx
   // ❌ Redundant
   <Typography variant="h1" className="text-4xl font-bold">Title</Typography>
   
   // ✅ Clean
   <Typography variant="h1">Title</Typography>
   ```

2. **Badge/Card**: Don't duplicate default styling
   ```tsx
   // ❌ Redundant
   <Badge className="px-2 py-0.5">Label</Badge>
   
   // ✅ Clean
   <Badge>Label</Badge>
   ```

3. **Container**: Use size variants and asChild for semantic HTML
   ```tsx
   // For semantic sections
   <Container asChild><section>content</section></Container>
   
   // For styled containers
   <section><Container>content</Container></section>
   ```