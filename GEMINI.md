# Project Architecture Summary

This document outlines the main architectural pieces of the `vibe-by-gemini` system.

## Core Technologies

*   **Framework:** React & TypeScript
*   **Routing:** React Router v7 (Note: Not `react-router-dom`)
*   **Build System:** Rsbuild
*   **Styling:** Tailwind CSS
*   **Code Quality:** Biome (Linting & Formatting)

## Design Philosophy

*   **Theme:** The website should have a modern and minimal theme and tone.
*   **Color:** Use `oklch` for CSS color variables.
*   **Component Structure:** Avoid creating unnecessarily nested elements. Aim for a flat and clean component structure to improve readability and maintainability.

## Key Architectural Patterns

*   **Server-Side Rendering (SSR):** The application uses a server-side rendering approach, indicated by the presence of `app/entry.client.tsx` and `app/entry.server.tsx`. This improves initial page load times and SEO.
*   **File-Based Routing:** The project utilizes a file-based routing system configured in `app/routes.ts`. This maps URL paths to component files within the `app/routes/` directory, simplifying route management.
*   **Containerization:** The `Dockerfile` details a multi-stage build process to create an optimized production Docker image. This ensures a lean and secure deployment environment.
*   **Import Alias:** The project uses a path alias where `@/*` maps to `app/*`. All imports of modules within the `app` directory should use this alias for consistency (e.g., `import MyComponent from '@/components/my-component'`).
*   **UI Components:** Base UI components should always be sourced from `https://ui.shadcn.com/`. To use shadcn components, they must be installed via the CLI.

## Development Workflow

*   **Formatting:** Run `pnpm format` after any code changes to ensure consistency.


## Project File Structure Context:

*   **`/` (Root):** Contains main project configuration files (`package.json`, `rsbuild.config.ts`, `tailwind.config.ts`, `Dockerfile`, `GEMINI.md`).
*   **`app/`:** Main application source code.
    *   `routes/`: Page components mapped to URLs.
    *   `components/`: Reusable React components.
    *   `styles/`: Global CSS files.
    *   `entry.client.tsx` & `entry.server.tsx`: Entry points for client-side and server-side rendering.
    *   `root.tsx`: The main application layout and error boundary.
    *   `routes.ts`: Defines all application routing rules.
*   **`public/`:** Static assets (images, favicons).
*   **`build/`:** Output directory for the compiled project files.