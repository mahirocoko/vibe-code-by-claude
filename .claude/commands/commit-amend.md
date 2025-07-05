---
allowed-tools: Bash(git log:*), Bash(git status:*), Bash(git add:*), Bash(git commit:*)
description: Amend the last commit
---

## Context
- Last commit: !`git log -1 --pretty=format:"%h %s%n%n%b"`
- Current changes: !`git status`

## Your task
1. Show the last commit message and hash
2. Check for any new unstaged changes
3. If there are new changes, stage them with `git add -A`
4. Amend the commit with `git commit --amend --no-edit` (keep same message)
   - If user provides new message in $ARGUMENTS, use `git commit --amend -m "$ARGUMENTS"`
5. Show the amended commit details