---
shortcode: project:update-memory
description: Update Claude's memory in CLAUDE.md
---

Read the current CLAUDE.md file and update it with new information provided by the user. This command helps maintain Claude's context about the project and ensures consistency with @doc files.

## What to update:
- **Current TODOs**: Add/remove/update TODO items based on progress
- **Tech Stack**: Update dependencies, versions, or new tools
- **Development Notes**: Add important patterns, conventions, or decisions
- **Quick Start**: Update commands if they change

## What NOT to update:
- Additional Resources section (update individual @doc files instead)
- Core project info unless explicitly asked

## Usage:
```
/project:update-memory "Remove TODO: Implement About page - completed"
/project:update-memory "Add TODO: Implement dark mode toggle"
/project:update-memory "Add Development Note: Use Tanstack Query for data fetching"
/project:update-memory "Update tech stack: Add React Query"
/project:update-memory "Add Development Note: Install packages with fixed versions"
```

## Process:
1. Read current CLAUDE.md
2. Check relevant @doc files for consistency
3. Parse the update request
4. Modify the appropriate section in CLAUDE.md
5. Update corresponding @doc files if needed
6. Show diff of changes before applying
7. Preserve existing structure and formatting

## @doc Files to Check:
- **@doc/tech-stack.md**: When updating tech stack or dependencies
- **@doc/project-structure.md**: When updating project structure or file organization
- **@doc/commands.md**: When updating commands or scripts
- **@doc/design-system.md**: When updating UI components or styling
- **@doc/commit-guide.md**: When updating development processes