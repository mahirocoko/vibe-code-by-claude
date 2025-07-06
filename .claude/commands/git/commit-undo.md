---
allowed-tools: Bash(git log:*), Bash(git reset:*), Bash(git status:*)
description: Undo the last commit (keep changes)
---

## Context
- Last commit to undo: !`git log -1 --oneline`
- Current status: !`git status`

## Your task
1. Show the last commit that will be undone
2. Undo the commit with `git reset --soft HEAD~1`
3. Show git status to confirm:
   - Changes are preserved and unstaged
   - Ready for a new commit
4. Inform user that the commit was undone but all changes are kept