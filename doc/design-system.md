# Design System Guide

## Form Component

### Overview
Comprehensive form component with react-hook-form integration, providing:
- FormField: Controller wrapper with context
- FormItem: Container with unique ID generation
- FormLabel: Accessible label with error state styling
- FormControl: Input wrapper with ARIA attributes
- FormDescription: Helper text with proper association
- FormMessage: Error message display

### Key Features
- **Accessibility**: Proper ARIA attributes and associations
- **Validation**: React Hook Form integration with field state management
- **Error Handling**: Automatic error state propagation and styling
- **Type Safety**: Full TypeScript support with generic field types
- **Context API**: Efficient state sharing between form components

### Usage Pattern
```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters')
})

function LoginForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '' }
  })

  return (
    <Form {...form}>
      <FormField control={form.control} name="email" render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" placeholder="Enter your email" {...field} />
          </FormControl>
          <FormDescription>We'll never share your email with anyone else.</FormDescription>
          <FormMessage />
        </FormItem>
      )} />
    </Form>
  )
}
```

### Form Components
- **Form**: FormProvider wrapper for react-hook-form
- **FormField**: Generic controller with context
- **FormItem**: Grid container with spacing and ID generation
- **FormLabel**: Accessible label with error state styling
- **FormControl**: Input wrapper with ARIA attributes
- **FormDescription**: Helper text with proper ID association
- **FormMessage**: Error message display with conditional rendering

---

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
- Use shadcn/ui components when available (17 components implemented)
- Follow baseColor: neutral configuration with CSS variables
- Keep components flat and clean
- Avoid unnecessary nesting
- **Typography**: Use semantic variants (h1-h6, body, muted) instead of custom text styling
- **Bento Grid**: Use for modern card layouts with responsive behavior and image backgrounds
- **Container**: Use size variants (sm/md/lg/xl/full) with asChild for semantic HTML
- **Motion**: Use motion library for performance-optimized animations
- **Form**: Use react-hook-form integration with proper validation and accessibility

## Component Usage Patterns
- **Avoid redundant className props**: Don't duplicate styles already in component variants
- **Semantic HTML**: Use asChild prop for proper element rendering
- **Consistent spacing**: Use design system spacing tokens
- **Form validation**: Use react-hook-form with zod schemas

## Design System Documentation
Available at `/design-system` route with:
- **Foundation**: Colors (oklch-based), Typography (14 variants), Spacing
- **Components**: 17 fully implemented components with interactive examples
  - Core: Alert, Button, Container, Typography, Sheet, BentoGrid
  - Forms: Input, Textarea, Label, Select, Toggle, Switch, Form
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

## Available Components (17)
**Core Components:**
- Alert, Button, Container, Typography, Sheet, BentoGrid

**Form Components:** 
- Input, Textarea, Label, Select, Toggle, Switch, Form

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

// Form with validation
<Form {...form}>
  <FormField control={form.control} name="email" render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input placeholder="Enter your email" {...field} />
      </FormControl>
      <FormDescription>We'll never share your email.</FormDescription>
      <FormMessage />
    </FormItem>
  )} />
</Form>

// Direct CSS variable usage
.custom {
  background-color: oklch(var(--primary));
}
```