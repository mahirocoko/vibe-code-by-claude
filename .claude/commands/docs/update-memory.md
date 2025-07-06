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

2. **Check doc/ consistency**:
   - Compare findings with doc files
   - Identify discrepancies or outdated info

3. **Update intelligently**:
   - Update CLAUDE.md with findings
   - Update corresponding doc files if needed
   - Show diff of all changes before applying

## Manual override usage:
```
/project:update-memory "Force add TODO: Implement dark mode toggle"
/project:update-memory "Force remove TODO: About page - completed"
/project:update-memory "Force add note: Use React Query for data fetching"
/project:update-memory --optimize  # Force memory optimization
/project:update-memory --analyze   # Show memory health report
/project:update-memory --cleanup   # Remove outdated content only
```

## Memory Optimization Features:
- **Auto-cleanup**: Remove outdated TODOs, completed features, deprecated patterns
- **Duplicate detection**: Identify and merge redundant information
- **Priority scoring**: Rank information by relevance and recency
- **Size monitoring**: Track CLAUDE.md size and alert when optimization needed
- **Smart compression**: Condense verbose descriptions while preserving key details