---
shortcode: project:update-memory
description: Update Claude's memory in CLAUDE.md
---

Read the current CLAUDE.md file and update it with new information provided by the user. This command helps maintain Claude's context about the project.

## What to update:
- **Current TODOs**: Add/remove/update TODO items based on progress
- **Tech Essentials**: Update dependencies, versions, or new tools
- **Development Notes**: Add important patterns, conventions, or decisions
- **Project Structure**: Update if significant changes to file structure
- **Quick Start**: Update commands if they change

## What NOT to update:
- Additional Resources section (update individual @doc files instead)
- Core project info unless explicitly asked

## Usage:
```
/project:update-memory "Remove TODO: Implement About page - completed"
/project:update-memory "Add TODO: Implement dark mode toggle"
/project:update-memory "Add Development Note: Use Tanstack Query for data fetching"
```

## Process:
1. Read current CLAUDE.md
2. Parse the update request
3. Modify the appropriate section
4. Preserve existing structure and formatting
5. Show diff of changes before applying