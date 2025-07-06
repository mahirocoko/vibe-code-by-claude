---
allowed-tools: Bash(git branch:*), Bash(git status:*), Bash(git push:*)
description: Push commits to remote repository
---

## Context
- Current branch: !`git branch --show-current`
- Repository status: !`git status`

## Your task
1. Check the current branch name
2. Verify there are commits to push
3. Push to the remote repository with `git push origin <branch>`
4. Show the push result and handle any warnings or errors