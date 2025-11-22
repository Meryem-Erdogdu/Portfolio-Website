# Portfolio Website - Meryem Erdoğdu

## Overview

This is a personal portfolio website for Meryem Erdoğdu, an AI/ML Software Developer. The application showcases professional experience, projects, skills, certificates, and achievements. It is built as a static single-page application with a modern, responsive design and is deployed to GitHub Pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast Hot Module Replacement (HMR)
- **Wouter** for lightweight client-side routing (single-page application pattern)
- **TanStack Query** for state management and data fetching capabilities

**Styling Approach**
- **Tailwind CSS** for utility-first styling with custom configuration
- **shadcn/ui** component library (New York style preset) for consistent, accessible UI components
- **CSS Variables** for theming with dark mode as the default
- Custom color palette defined in `index.css` with support for dynamic theme switching
- Radix UI primitives for accessible, unstyled component foundations

**Component Structure**
- Organized into feature-based sections: `AboutSection`, `ExperienceSection`, `ProjectsSection`, `SkillsSection`, `CertificatesSection`, `InterestsSection`, `WritingSection`
- Reusable card components: `ExperienceCard`, `ProjectCard`, `WritingCard`
- Shared UI components from shadcn/ui in `components/ui/`
- Navigation component with scroll-based active section highlighting
- Mouse-tracking gradient effect for visual interactivity

**Responsive Design**
- Mobile-first approach with breakpoints for tablet and desktop
- Sticky navigation on desktop, mobile-optimized navigation on smaller screens
- Custom hook (`use-mobile`) for detecting device type and adapting UI

### Backend Architecture

**Server Setup**
- **Express.js** server with TypeScript for development environment
- Minimal API surface - primarily serves static files
- Vite middleware integration for development with HMR
- No database or authentication required (static portfolio site)

**Development vs Production**
- Development: Vite dev server with middleware mode
- Production: Static files built and served from `dist/public`
- GitHub Pages deployment via GitHub Actions workflow

### Build & Deployment

**Build Process**
1. Frontend: `vite build` compiles React/TypeScript to optimized static assets
2. Backend: `esbuild` bundles server code (for potential server deployment)
3. Output: Static files in `dist/public` directory

**Deployment Strategy**
- Automated deployment to GitHub Pages via GitHub Actions
- SPA routing handled with `404.html` redirect script for client-side routing
- Asset paths configured for GitHub Pages subdirectory structure
- Environment variables kept in `.env` (excluded from version control)

**Development Workflow**
- Hot Module Replacement for instant feedback during development
- TypeScript strict mode for type safety
- ESLint and Prettier configuration (implied by shadcn/ui setup)

### Data Management

**Static Content**
- All portfolio content (experiences, projects, skills, certificates) is hardcoded in component files
- Images stored in `attached_assets` directory and imported as modules
- No content management system or database required
- Future consideration: Could migrate to a headless CMS for easier content updates

**Asset Handling**
- Vite handles asset optimization and hashing
- Images imported as ES modules with proper type definitions
- Favicon and metadata in `index.html` for SEO

## External Dependencies

### Third-Party Libraries

**UI Components & Styling**
- `@radix-ui/*` - Accessible component primitives (accordion, dialog, dropdown, tooltip, etc.)
- `tailwindcss` & `autoprefixer` - Utility-first CSS framework
- `class-variance-authority` & `clsx` - Dynamic className composition
- `lucide-react` - Icon library

**State Management & Data Fetching**
- `@tanstack/react-query` - Async state management (prepared for future API integration)
- `wouter` - Lightweight routing library

**Form Handling**
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Schema validation integration
- `zod` - TypeScript-first schema validation

**Development Tools**
- `@replit/vite-plugin-*` - Replit-specific development plugins (cartographer, error modal, dev banner)
- `tsx` - TypeScript execution for development server
- `esbuild` - Fast bundler for server code
- `cross-env` - Cross-platform environment variable setting

### Potential Database Integration

**Database Schema Preparation**
- `drizzle-orm` & `drizzle-zod` - ORM and schema validation (currently unused)
- `@neondatabase/serverless` - Neon Postgres serverless driver
- `connect-pg-simple` - PostgreSQL session store for Express

**Note**: Database dependencies are installed but not actively used. The current implementation is fully static. These dependencies suggest future plans for dynamic content or user authentication features.

### Development Environment

**Type Definitions**
- `@types/node` - Node.js type definitions
- TypeScript strict mode enabled
- Path aliases configured: `@/` for client source, `@shared/` for shared code, `@assets/` for images

**Build Configuration**
- Vite config with React plugin and custom aliases
- PostCSS with Tailwind and Autoprefixer
- Module resolution set to "bundler" for modern import handling
