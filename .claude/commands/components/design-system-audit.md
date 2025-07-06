---
allowed-tools: Glob, Grep, Read, Edit, MultiEdit, Bash(find:*), Bash(wc:*), Bash(pnpm check:*), Bash(pnpm typecheck:*)
description: Comprehensive design system audit with optional auto-fix
---

## Context
- Project scope: Entire codebase scan for design system compliance
- Design system reference: @doc/design-system.md
- Auto-fix capability: $ARGUMENTS contains --fix flag
- Report-only mode: $ARGUMENTS contains --report-only flag

## Your task
1. **Comprehensive project scan**:
   - Use Glob to find all React component files (*.tsx)
   - Scan all routes, components, and modules directories
   - Read each file to analyze design system usage patterns

2. **Analyze design system compliance**:
   - Check shadcn/ui component adoption rates
   - Identify custom implementations that should use design system
   - Find redundant className props and styling inconsistencies
   - Verify import patterns and component organization

3. **Generate detailed audit report**:
   - Overall compliance statistics and health score
   - Component-by-component breakdown with specific issues
   - Prioritized refactoring roadmap (High/Medium/Low priority)
   - Estimated effort and impact for each recommendation

4. **Apply auto-fixes if --fix flag present**:
   - Clean up redundant className props in Typography components
   - Standardize import statements organization
   - Replace simple custom Badge/Card implementations
   - Run `pnpm check` and `pnpm typecheck` after changes

## Audit Scope:
- **Component Files**: All .tsx files in app/components/, app/routes/
- **Design System Elements**: Card, Badge, Button, Typography, Alert usage
- **Code Quality**: Import organization, redundant className props
- **Consistency**: Pattern adherence across the codebase

## Auto-fix Capabilities:
- ✅ Remove redundant className props from Typography
- ✅ Organize and clean up import statements  
- ✅ Replace simple Badge/Card custom implementations
- ⚠️ Complex structural changes require manual review

## Report Structure:
1. **Executive Summary**: Overall health score and compliance percentage
2. **Critical Issues**: High-priority violations requiring immediate attention
3. **Improvement Opportunities**: Medium/low priority optimizations
4. **Metrics Dashboard**: Component adoption rates and usage statistics
5. **Refactoring Roadmap**: Prioritized action items with effort estimates

## Key Audit Checks:
- **Card Usage**: Look for `className="rounded-lg border p-6 shadow-sm"` patterns
- **Badge Usage**: Find `className="inline-block rounded bg-secondary px-3 py-1"` custom badges  
- **Typography**: Check for redundant className props like `className="text-4xl font-bold"` on h1 variants
- **Import Patterns**: Verify shadcn/ui imports are properly organized
- **Component Consistency**: Ensure uniform usage patterns across similar components

