---
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*), Bash(git log:*), Bash(git push:*), Bash(git branch:*)
description: Commit all changes and push to remote
---

## Context
- Current git status: !`git status`
- Recent commits: !`git log --oneline -5`
- Current branch: !`git branch --show-current`
- Commit standards: @/CLAUDE.md#git-commit-standards

## Your task
1. First, analyze and commit changes:
   - Review changes with git status and git diff
   - Determine commit type (feat/fix/chore/docs/style/refactor/test/perf)
   - Stage all changes with `git add -A`
   - Create commit following project standards with Claude signature
   
2. Then push to remote:
   - Push with `git push origin <branch>`
   - Show both commit and push results
   - Handle any warnings or errors