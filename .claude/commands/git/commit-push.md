---
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*), Bash(git log:*), Bash(git push:*), Bash(git branch:*)
description: Commit all changes and push to remote
---

## Context
- Current git status: !`git status`
- Recent commits: !`git log --oneline -5`
- Current branch: !`git branch --show-current`
- Commit standards: @doc/commit-guide.md

## Your task
1. First, analyze and commit changes:
   - Review changes with git status and git diff
   - Determine commit type and emoji from the commit guide:
     - ✨ feat: New feature
     - 🐛 fix: Bug fix  
     - 🔧 chore: Maintenance, dependency updates, configuration
     - 📝 docs: Documentation changes
     - 💄 style: Code style changes (formatting, missing semicolons, etc)
     - ♻️ refactor: Code refactoring without changing functionality
     - ✅ test: Adding or updating tests
     - ⚡ perf: Performance improvements
   - Stage all changes with `git add -A`
   - Create commit following project standards from @doc/commit-guide.md:
     - Format: `<emoji> <type>: <subject>` (max 50 chars, no capital first letter, no period)
     - Include descriptive body with bullet points explaining the changes
     - Add Claude signature
   
2. Then push to remote:
   - Push with `git push origin <branch>`
   - Show both commit and push results
   - Handle any warnings or errors