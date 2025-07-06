---
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*), Bash(git log:*)
description: Stage all changes and create a commit with proper format
---

## Context
- Current git status: !`git status`
- Recent commits for style reference: !`git log --oneline -5`
- Commit standards: @/CLAUDE.md#git-commit-standards

## Your task
1. Analyze the changes from git status and git diff
2. Determine the appropriate commit type (feat/fix/chore/docs/style/refactor/test/perf)
3. Stage all changes with `git add -A`
4. Create a commit following the project's commit standards:
   - Format: `<type>: <subject>` (max 50 chars)
   - Include descriptive body with bullet points explaining the changes
   - Add Claude signature at the end:
     ```
     🤖 Generated with [Claude Code](https://claude.ai/code)
     
     Co-Authored-By: Claude <noreply@anthropic.com>
     ```
5. Show the commit result