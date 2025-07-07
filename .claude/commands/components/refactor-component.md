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

2. **Analyze section patterns (if target is a section component)**:
   - Read other section components in app/components/modules/home/ to understand patterns
   - Check section structure consistency (Container usage, semantic HTML)
   - Analyze spacing patterns (py-*, mb-*, gap-* classes)
   - Verify alignment patterns (text-center, max-width, mx-auto)
   - Check typography hierarchy (Badge → h2 → lead pattern)

3. **Refactor to use shadcn/ui components**:
   - Replace custom Card divs with proper Card, CardHeader, CardContent, CardFooter structure
   - Replace custom badge spans/divs with Badge component and appropriate variants
   - Clean up Typography components by removing redundant className props
   - Update imports to include necessary shadcn/ui components

4. **Apply spacing and alignment consistency (for sections)**:
   - Ensure section padding follows standard patterns: py-16 md:py-24 lg:py-32
   - Apply consistent header spacing: mb-12 lg:mb-16
   - Use standard text alignment: text-center for headers
   - Apply max-width constraints: max-w-3xl for titles, max-w-2xl for descriptions
   - Ensure proper Container usage pattern based on background needs

5. **Apply changes and verify**:
   - Use Edit or MultiEdit tool to apply refactoring changes
   - Run `pnpm check` to fix formatting and imports
   - Run `pnpm typecheck` to ensure no type errors
   - Show summary of changes made including consistency improvements

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

## Section Consistency Patterns:

### Section Structure:
```tsx
// Semantic HTML pattern (no background)
<Container asChild>
  <section className="py-16 md:py-24 lg:py-32">
    {/* content */}
  </section>
</Container>

// Background pattern (with styling)
<section className="py-16 md:py-24 lg:py-32 bg-neutral-50">
  <Container>
    {/* content */}
  </Container>
</section>
```

### Section Header Pattern:
```tsx
// Standard section header structure
<div className="text-center mb-12 lg:mb-16">
  <Badge variant="secondary" className="mb-6">Section Badge</Badge>
  <Typography variant="h2" className="mb-6 max-w-3xl mx-auto tracking-tight">
    Section Title with <span className="text-primary">Accent</span>
  </Typography>
  <Typography variant="lead" className="max-w-2xl mx-auto text-muted-foreground">
    Section description text
  </Typography>
</div>
```

### Spacing Standards:
```tsx
// Section padding patterns
className="py-16 md:py-24 lg:py-32"        // Standard sections
className="py-20 lg:py-40"                 // Hero/Features sections

// Internal spacing patterns
className="mb-12 lg:mb-16"                 // Header to content
className="mb-6"                           // Badge to title, title to description
className="mt-12"                          // Content to grid/cards
```

### Alignment Standards:
```tsx
// Text alignment patterns
className="text-center"                    // All section headers
className="max-w-3xl mx-auto"             // Section titles
className="max-w-2xl mx-auto"             // Section descriptions

// Button alignment patterns
className="flex flex-col gap-4 sm:flex-row sm:justify-center"
```