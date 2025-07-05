---
shortcode: project:update-memory
description: Analyze and update Claude's memory in CLAUDE.md
---

Analyze the current project state and automatically update CLAUDE.md with relevant changes. This command performs intelligent analysis to keep Claude's memory synchronized with the actual project state.

## What gets analyzed and updated:
- **Current TODOs**: Check completed/new features and update TODO list
- **Tech Stack**: Scan package.json for new dependencies or version changes
- **Development Notes**: Identify new patterns, conventions, or decisions
- **Quick Start**: Verify commands still work and update if needed
- **Project Structure**: Check for significant file/folder changes

## How it works:
1. **Analyze current state**: 
   - Read package.json for tech stack changes
   - Check project structure for new files/folders
   - Scan recent commits for completed TODOs
   - Verify commands still work

2. **Check @doc consistency**:
   - Compare findings with @doc files
   - Identify discrepancies or outdated info

3. **Update intelligently**:
   - Update CLAUDE.md with findings
   - Update corresponding @doc files if needed
   - Show diff of all changes before applying

## Manual override usage:
```
/project:update-memory "Force add TODO: Implement dark mode toggle"
/project:update-memory "Force remove TODO: About page - completed"
/project:update-memory "Force add note: Use React Query for data fetching"
```

## Analysis targets:
- **package.json**: Dependencies, scripts, versions
- **File structure**: New components, routes, configs
- **Git commits**: Recently completed features
- **@doc files**: Consistency with current state
- **Config files**: Build tools, linting, formatting

## Smart updates:
- Automatically remove TODOs for implemented features
- Add new dependencies to tech stack
- Update version numbers when changed
- Sync development notes with actual practices
- Keep @doc files consistent with CLAUDE.md