# Vibe by Claude

A modern, fast, and scalable foundation for web applications built with React Router v7, TypeScript, and Tailwind CSS.

## ✨ Features

- **⚡ Lightning Fast**: Built on React Router v7 with optimized performance
- **🎨 Beautiful Design**: Complete shadcn/ui design system with 14+ components
- **📱 Responsive**: Mobile-first design with Tailwind CSS v4
- **🔧 Developer Experience**: TypeScript, hot reload, and modern tooling
- **🚀 Production Ready**: Optimized builds and deployment-ready
- **♿ Accessible**: Semantic HTML and ARIA compliance

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd vibe-by-gemini

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Open http://localhost:5173
```

### Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Type checking
pnpm typecheck

# Code formatting & linting
pnpm check
```

## 🏗️ Tech Stack

### Core
- **React 19.1.0** - UI framework
- **TypeScript** - Type safety
- **React Router v7** - File-based routing & full-stack framework
- **Tailwind CSS 4.1.11** - Utility-first CSS (config-free)

### UI Components
- **shadcn/ui** - Complete design system
- **Radix UI** - Accessible primitives
- **Lucide React** - Beautiful icons
- **class-variance-authority** - Component variants

### Development Tools
- **Biome** - Fast linting & formatting
- **TypeScript** - Static type checking
- **React Hook Form + Zod** - Form validation

## 📁 Project Structure

```
app/
├── components/
│   ├── ui/           # Reusable UI components (shadcn/ui)
│   ├── layouts/      # Page layouts (Header, Footer)
│   └── modules/      # Feature-specific components
├── routes/
│   ├── _landing.*    # Landing pages (Home, About, Contact, Pricing)
│   ├── console.*     # Dashboard/admin pages
│   └── design-system.* # Component documentation
└── styles/
    └── globals.css   # Global styles & CSS variables
```

## 🎨 Design System

Explore the complete design system at `/design-system` with:

- **Foundation**: Colors, Typography, Spacing
- **Components**: 14+ UI components with live examples
- **Patterns**: Layout patterns and best practices

### Available Components
- Alert, Avatar, Badge, Button, Card
- Container, Input, Label, Select, Textarea
- Toggle, Accordion, Typography, Sheet

## 🌐 Pages

### Landing Pages
- **Home** (`/`) - Hero, features, pricing, CTA
- **About** (`/about`) - Mission, vision, team
- **Contact** (`/contact`) - Contact form & information
- **Pricing** (`/pricing`) - Plans, FAQ, testimonials

### Console Pages
- **Dashboard** (`/console`) - Analytics overview
- **Users** (`/console/users`) - User management
- **Settings** (`/console/settings`) - Configuration

## 🛠️ Development Guide

### Adding New Components

```bash
# Install shadcn/ui component
npx shadcn@latest add [component-name]

# Components are added to app/components/ui/
```

### Styling Guidelines

- Use Tailwind utility classes
- Follow mobile-first responsive design
- Use semantic HTML elements
- Maintain consistent spacing (`py-16` for sections)

### Component Patterns

```tsx
// Container with size variants
<Container size="md">Content</Container>

// Semantic HTML with asChild
<Container asChild>
  <section>Content</section>
</Container>

// Typography with variants
<Typography variant="h1">Heading</Typography>
<Typography variant="lead">Subtitle</Typography>
```

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm typecheck` | Run TypeScript checking |
| `pnpm check` | Format & lint code |
| `pnpm routes` | View route structure |

## 🚀 Deployment

The app is built for production and can be deployed to:

- **Vercel** (recommended for React Router v7)
- **Netlify**
- **Railway** 
- **Any Node.js hosting**

```bash
# Build and deploy
pnpm build
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Router](https://reactrouter.com) - Full-stack web framework
- [shadcn/ui](https://ui.shadcn.com) - Beautiful component library
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Radix UI](https://radix-ui.com) - Accessible component primitives

---

**Built with ❤️ using React Router v7 and modern web technologies**