---
allowed-tools: Glob, Read, Edit, MultiEdit, Write, Bash(pnpm check:*), Bash(pnpm typecheck:*)
description: Comprehensive design system sync - documentation, routes, and navigation
---

## Context
- UI components directory: app/components/ui/
- Design system documentation: @doc/design-system.md
- Project structure documentation: @doc/project-structure.md
- Main project memory: CLAUDE.md
- Design system routes: app/routes/design-system.*
- Navigation sidebar: app/routes/design-system.tsx

## Your task
1. **Inventory actual UI components**:
   - Use Glob to list all files in app/components/ui/
   - Count the total number of components
   - Identify component types (Core, Form, Display)

2. **Check documentation consistency**:
   - Read design system documentation for component counts and lists
   - Compare with actual UI component inventory
   - Identify missing components from documentation
   - Find inconsistent component counts across files

3. **Update documentation to match reality**:
   - Fix component counts in all documentation files
   - Add missing components to component lists
   - Update usage examples if needed
   - Ensure consistent categorization (Core/Form/Display)

4. **Check and create design-system routes**:
   - Use Glob to list existing design-system route files
   - Identify missing route files for components
   - Create missing showcase pages for new components
   - Update design-system index page with correct component count and links

5. **Update navigation sidebar**:
   - Read design-system.tsx for current navigation structure
   - Add missing components to navigationItems array
   - Ensure proper alphabetical ordering
   - Update component labels to match actual functionality

6. **Verify and validate**:
   - Run `pnpm check` to fix formatting
   - Run `pnpm typecheck` to ensure no errors
   - Test navigation links work correctly
   - Show comprehensive summary of all changes made

## Files to Update
- `doc/design-system.md` - Main design system documentation
- `doc/project-structure.md` - Project structure with component listings
- `CLAUDE.md` - Core project memory
- `app/routes/design-system._index.tsx` - Design system overview page
- `app/routes/design-system.tsx` - Navigation sidebar with component links
- `app/routes/design-system.components.*.tsx` - Individual component showcase pages
- Any other files with component counts or lists

## Expected Output
- ✅ Updated documentation with correct component counts (17 components)
- ✅ Consistent component categorization across all files
- ✅ Complete showcase pages for all components
- ✅ Working navigation sidebar with all component links
- ✅ Proper alphabetical ordering in navigation
- ✅ Summary of changes made to maintain consistency

## Component Categories (Reference)
**Core Components (6):** Alert, Button, Container, Typography, Sheet, BentoGrid
**Form Components (7):** Input, Textarea, Label, Select, Toggle, Switch, Form
**Display Components (4):** Card, Badge, Avatar, Accordion

## Navigation Best Practices
- Keep components in alphabetical order within each section
- Use descriptive labels (e.g., "Toggles & Switch" instead of just "Toggles")
- Ensure all showcase pages have corresponding navigation links
- Remove "(Legacy)" or similar outdated labels
- Match navigation labels with actual component functionality

## Showcase Page Template
When creating new component showcase pages, use this structure:
```tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { ComponentName } from '@/components/ui/component-name'

export default function ComponentShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="text-3xl font-bold mb-2">
          Component Name
        </Typography>
        <Typography className="text-muted-foreground">
          Brief description of the component's purpose and usage
        </Typography>
      </div>

      <div className="grid gap-8">
        {/* Basic Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Usage</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Component examples */}
          </CardContent>
        </Card>

        {/* Variants/States */}
        <Card>
          <CardHeader>
            <CardTitle>Variants & States</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Different variants */}
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Code examples and best practices */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
```