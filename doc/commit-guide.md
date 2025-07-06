# Git Commit Standards

## Commit Message Format
```
<emoji> <type>: <subject>

<body>

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## Commit Types
- ✨ **feat**: New feature
- 🐛 **fix**: Bug fix
- 🔧 **chore**: Maintenance, dependency updates, configuration
- 📝 **docs**: Documentation changes
- 💄 **style**: Code style changes (formatting, missing semicolons, etc)
- ♻️ **refactor**: Code refactoring without changing functionality
- ✅ **test**: Adding or updating tests
- ⚡ **perf**: Performance improvements

## Subject Rules
- Use imperative mood ("add" not "added" or "adds")
- Don't capitalize first letter
- No period at the end
- Max 50 characters

## Body Rules
- Use bullet points for multiple changes
- Explain what and why, not how
- Wrap at 72 characters
- Separate subject from body with blank line

## Example
```
✨ feat: add alert component with semantic variants

- Create Alert component with info, warning, success, error variants
- Add comprehensive documentation to design system
- Include accessible ARIA attributes
- Support icon placement and multiple sizes

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```