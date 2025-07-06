---
allowed-tools: Read, Edit, MultiEdit, Glob, Grep, Bash(pnpm check:*), Bash(pnpm typecheck:*)
description: Refactor React component to use shadcn/ui design system
---

## Context
- Target component file: $ARGUMENTS
- Design system components: @doc/design-system.md
- Available shadcn/ui components: Card, Badge, Button, Typography, Alert, etc.

## Your task
1. **Read and analyze the target component file**:
   - Check for custom Card implementations (divs with border/shadow classes)
   - Identify custom Badge/Tag divs that should use Badge component
   - Find redundant className props in Typography components
   - Look for custom Button implementations

2. **Refactor to use shadcn/ui components**:
   - Replace custom Card divs with proper Card, CardHeader, CardContent, CardFooter structure
   - Replace custom badge spans/divs with Badge component and appropriate variants
   - Clean up Typography components by removing redundant className props
   - Update imports to include necessary shadcn/ui components

3. **Apply changes and verify**:
   - Use Edit or MultiEdit tool to apply refactoring changes
   - Run `pnpm check` to fix formatting and imports
   - Run `pnpm typecheck` to ensure no type errors
   - Show summary of changes made

## Refactoring Patterns:

### Card Component Replacement:
```tsx
// Before: Custom Card div
<div className="rounded-lg border p-6 shadow-sm">
  <h3>Title</h3>
  <p>Description</p>
</div>

// After: shadcn/ui Card
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
</Card>
```

### Badge Component Replacement:
```tsx
// Before: Custom Badge div
<div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Label</div>

// After: shadcn/ui Badge
<Badge variant="secondary">Label</Badge>
```

### Typography Cleanup:
```tsx
// Before: Redundant classes
<Typography variant="h2" className="text-4xl font-bold">Title</Typography>

// After: Clean variant usage
<Typography variant="h2">Title</Typography>
```