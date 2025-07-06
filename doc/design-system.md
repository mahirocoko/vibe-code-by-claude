# Design System Guide

## Color System
- **Color Space**: oklch for perceptually uniform colors
- **Primary**: Blue (oklch based)
- **Theme**: Light/dark mode support

## Semantic Colors
- **Info**: Blue - Informational messages
- **Warning**: Yellow - Warning states
- **Success**: Green - Success feedback
- **Error**: Red - Error states
- **Destructive**: Red - Destructive actions

## Component Guidelines
- Use shadcn/ui components when available (15 components implemented)
- Follow baseColor: neutral configuration with CSS variables
- Keep components flat and clean
- Avoid unnecessary nesting
- **Typography**: Use semantic variants (h1-h6, body, muted) instead of custom text styling
- **Bento Grid**: Use for modern card layouts with responsive behavior and image backgrounds
- **Container**: Use size variants (sm/md/lg/xl/full) with asChild for semantic HTML
- **Motion**: Use motion library for performance-optimized animations

## Component Usage Patterns
- **Avoid redundant className props**: Don't duplicate styles already in component variants
- **Semantic HTML**: Use asChild prop for proper element rendering
- **Consistent spacing**: Use design system spacing tokens
- **Form validation**: Use react-hook-form with zod schemas

## Design System Documentation
Available at `/design-system` route with:
- **Foundation**: Colors (oklch-based), Typography (14 variants), Spacing
- **Components**: 14 fully implemented components with interactive examples
  - Core: Alert, Button, Container, Typography, Sheet
  - Forms: Input, Textarea, Label, Select, Toggle
  - Display: Card, Badge, Avatar, Accordion
- **Live examples**: Working demonstrations with multiple states and variations
- **Code snippets**: Copy-paste ready implementation examples

## CSS Variables
All colors use CSS variables defined in `app/styles/globals.css`:
- `--primary`, `--primary-foreground`
- `--info`, `--info-foreground`
- `--warning`, `--warning-foreground`
- `--success`, `--success-foreground`
- `--error`, `--error-foreground`

## Available Components (15)
**Core Components:**
- Alert, Button, Container, Typography, Sheet, BentoGrid

**Form Components:** 
- Input, Textarea, Label, Select, Toggle

**Display Components:**
- Card, Badge, Avatar, Accordion

## Usage Examples
```tsx
// Tailwind classes
<div className="bg-primary text-primary-foreground">Primary</div>
<Button variant="info">Info Button</Button>
<Alert variant="success">Success message</Alert>

// Bento Grid Layout
<BentoGrid className="md:grid-cols-3">
  <BentoCard name="Feature" description="Description" Icon={Rocket} />
</BentoGrid>

// Direct CSS variable usage
.custom {
  background-color: oklch(var(--primary));
}
```