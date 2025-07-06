---
allowed-tools: Glob, Grep, Read, Edit, MultiEdit, Bash(pnpm check:*), Bash(pnpm typecheck:*), Bash(find:*), Bash(wc:*)
description: End-to-end design system improvement workflow
---

## Context
- Auto-fix mode: $ARGUMENTS contains --auto-fix flag
- Scope limitation: $ARGUMENTS contains --scope=<pattern> for targeted analysis
- Full workflow: audit → prioritize → refactor → validate → report

## Your task
1. **📊 Initial comprehensive audit**:
   - Use Glob to scan all React components or scope pattern if specified
   - Read and analyze each component for design system violations
   - Generate initial compliance report with statistics

2. **🎯 Prioritize and present findings**:
   - Categorize issues by priority (High/Medium/Low)
   - Show impact vs effort analysis for each violation
   - Present interactive selection of components to refactor

3. **🔧 Execute refactoring workflow**:
   - If --auto-fix flag present, automatically fix safe issues
   - Otherwise, ask user which components to refactor
   - Apply Card, Badge, Typography refactoring systematically
   - Update imports and run formatting after each change

4. **✅ Validation and progress tracking**:
   - Re-run audit after refactoring to measure improvements
   - Compare before/after compliance statistics
   - Generate final progress report showing achievements

5. **📈 Final summary report**:
   - Show compliance improvement percentage
   - List components successfully refactored
   - Highlight remaining work and next recommended actions

## Expected Workflow Output:

### Phase 1 - Discovery:
- Scan results: "Found X components with Y violations"
- Priority breakdown: High/Medium/Low priority issues
- Initial compliance percentage

### Phase 2 - Planning:
- List specific components and their violations
- Show estimated effort and impact for each fix
- Present refactoring recommendations

### Phase 3 - Execution:
- Apply refactoring changes systematically
- Run formatting and type checking after each change
- Report progress for each component processed

### Phase 4 - Validation:
- Re-audit to measure improvements
- Calculate before/after compliance statistics
- Highlight successfully resolved issues
- Identify remaining work for future iterations

## Command Variations:
- `/project:design-system-workflow` - Full interactive workflow
- `/project:design-system-workflow --auto-fix` - Auto-fix safe issues
- `/project:design-system-workflow --scope="app/components/modules/**"` - Scope to modules only

## Key Benefits:
- **Comprehensive**: End-to-end improvement process
- **Measurable**: Before/after compliance metrics
- **Safe**: Type checking and formatting after changes
- **Progressive**: Tackle high-impact issues first
- **Validated**: Re-audit to confirm improvements