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
- Use shadcn/ui components when available
- Follow New York style configuration
- Keep components flat and clean
- Avoid unnecessary nesting

## Design System Documentation
Available at `/design-system` route with:
- Foundation (colors, typography)
- Components (buttons, alerts, forms, cards)
- Live examples and API references

## CSS Variables
All colors use CSS variables defined in `app/styles/globals.css`:
- `--primary`, `--primary-foreground`
- `--info`, `--info-foreground`
- `--warning`, `--warning-foreground`
- `--success`, `--success-foreground`
- `--error`, `--error-foreground`

## Usage Examples
```tsx
// Tailwind classes
<div className="bg-primary text-primary-foreground">Primary</div>
<Button variant="info">Info Button</Button>
<Alert variant="success">Success message</Alert>

// Direct CSS variable usage
.custom {
  background-color: oklch(var(--primary));
}
```