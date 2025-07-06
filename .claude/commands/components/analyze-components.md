---
allowed-tools: Glob, Grep, Read, Bash(find:*), Bash(wc:*)
description: Analyze React components for design system violations
---

## Context
- Target pattern: $ARGUMENTS (default: **/*.tsx if not specified)
- Design system reference: @doc/design-system.md
- Available components: Card, Badge, Button, Typography, Alert, etc.

## Your task
1. **Scan components by pattern**:
   - Use Glob tool to find React component files matching $ARGUMENTS pattern
   - If no $ARGUMENTS provided, scan all .tsx files in app/components/
   - Read each component file to analyze design system usage

2. **Identify design system violations**:
   - Look for custom Card implementations (divs with border/shadow/rounded classes)
   - Find custom Badge/Tag divs instead of Badge component
   - Detect redundant className props in Typography components
   - Check for hardcoded styles instead of design tokens

3. **Generate comprehensive report**:
   - List each component with violations found
   - Rate compliance level (High/Medium/Low)
   - Suggest specific refactoring actions
   - Prioritize by impact and effort required
   - Show statistics of design system adoption

## Report Format:
Generate a structured analysis report showing:

### Component Compliance Summary:
- Total components scanned
- Compliance percentage by component type
- High/Medium/Low priority violations

### Detailed Findings:
- File path and violation details
- Specific recommendations for each component
- Estimated effort and impact ratings

### Design System Adoption Metrics:
- Card component usage statistics
- Badge component adoption rate
- Typography compliance percentage
- Overall design system health score

## Common Violation Patterns to Check:
- `className="rounded-lg border p-6 shadow-sm"` → Should use Card
- `className="inline-block rounded bg-secondary px-3 py-1"` → Should use Badge
- `<Typography variant="h2" className="text-4xl font-bold">` → Redundant classes
- Hardcoded color values instead of CSS variables