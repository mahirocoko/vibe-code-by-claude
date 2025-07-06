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

2. **Check @doc consistency**:
   - Compare findings with @doc files
   - Identify discrepancies or outdated info

3. **Update intelligently**:
   - Update CLAUDE.md with findings
   - Update corresponding @doc files if needed
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

## Intelligent Analysis:
- **Pattern Recognition**: Detect coding patterns and architectural decisions
- **Dependency Analysis**: Track package.json changes and recommend updates
- **Git History Mining**: Extract completed features from commit messages
- **Code Usage Analysis**: Identify unused patterns and deprecated code
- **Documentation Sync**: Ensure @doc files match current implementation
- **Performance Impact**: Assess memory size vs. development efficiency

## Analysis targets:
- **package.json**: Dependencies, scripts, versions
- **File structure**: New components, routes, configs
- **Git commits**: Recently completed features
- **@doc files**: Consistency with current state
- **Config files**: Build tools, linting, formatting

## Smart updates:
- Automatically remove TODOs for implemented features
- Add new dependencies to tech stack
- Update version numbers when changed
- Sync development notes with actual practices
- Keep @doc files consistent with CLAUDE.md

## Memory Optimization Features:
- **Auto-cleanup**: Remove outdated TODOs, completed features, deprecated patterns
- **Duplicate detection**: Identify and merge redundant information
- **Priority scoring**: Rank information by relevance and recency
- **Size monitoring**: Track CLAUDE.md size and alert when optimization needed
- **Smart compression**: Condense verbose descriptions while preserving key details
- **Context relevance**: Remove information that's no longer applicable

## Optimization Triggers:
- CLAUDE.md exceeds 15KB (warning) or 25KB (auto-optimize)
- More than 10 completed TODOs in the list
- Dependencies with version mismatches
- Duplicate patterns or redundant notes
- Information older than 30 days without recent use

## Memory Health Metrics:
- **Size efficiency**: Content-to-value ratio
- **Relevance score**: How often information is referenced
- **Freshness**: Last update timestamp for each section
- **Completeness**: Coverage of current project state

## Auto-Cleanup Rules:
- **Completed TODOs**: Move to "Recently Completed" after verification
- **Outdated Dependencies**: Remove versions that no longer match package.json
- **Deprecated Patterns**: Remove notes about practices no longer used
- **Duplicate Information**: Merge similar notes and consolidate patterns
- **Stale Commands**: Remove scripts that no longer exist in package.json
- **Archive Old Sections**: Move rarely-used info to @doc files

## Optimization Strategies:
1. **Semantic Compression**: Use more concise language without losing meaning
2. **Reference Consolidation**: Link to @doc files instead of duplicating content
3. **Priority Filtering**: Keep only high-impact development information
4. **Context Grouping**: Organize related information together efficiently
5. **Version Archiving**: Move old version notes to historical @doc files

## Memory Size Tracking & Alerts:

### Size Monitoring:
- **Real-time tracking**: Monitor CLAUDE.md file size during updates
- **Growth analysis**: Track size changes over time and identify bloat sources
- **Section breakdown**: Analyze which sections consume most space
- **Alert thresholds**: 
  - 🟡 **15KB Warning**: Suggest reviewing content for optimization opportunities
  - 🟠 **20KB Caution**: Recommend running cleanup and consolidation
  - 🔴 **25KB Critical**: Auto-trigger optimization with user confirmation

### Optimization Dashboard:
```
Memory Health Report:
├── Total Size: 18.2KB (🟠 Approaching limit)
├── Section Analysis:
│   ├── Current TODOs: 3.1KB (17%) - 12 items
│   ├── Tech Stack: 2.8KB (15%) - Recently updated
│   ├── Development Notes: 5.2KB (29%) - Needs compression
│   ├── Recently Completed: 4.1KB (23%) - Archive candidates
│   └── Quick Start: 1.2KB (7%) - Optimal
├── Recommendations:
│   ├── Archive 8 completed TODOs → Save ~2.1KB
│   ├── Compress Development Notes → Save ~1.5KB
│   ├── Move detailed patterns to @doc → Save ~2.3KB
└── Estimated optimized size: 12.3KB (32% reduction)
```

### Smart Alerts:
- **Proactive suggestions**: Identify optimization opportunities before hitting limits
- **Impact analysis**: Show potential space savings for each cleanup action
- **Backup creation**: Auto-backup before major optimizations
- **Rollback support**: Easily revert optimization if information is needed