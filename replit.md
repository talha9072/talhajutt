# Muhammad Talha - Android Developer Portfolio

## Overview

This is a modern, responsive portfolio website for Muhammad Talha, an Android Developer from Islamabad, Pakistan. The application showcases professional experience, projects, skills, and services with a clean, minimalist design inspired by modern developer portfolios (Linear, Vercel, GitHub profiles). The site features both dark and light modes with an Android-focused visual language incorporating Material Design influences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing (single-page application with "/" and 404 routes)
- React Query (TanStack Query) for server state management and data fetching

**UI Component System:**
- Shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for component variant management
- Design system follows "new-york" style variant with custom theming

**Styling Architecture:**
- CSS custom properties for theming (dark/light mode support via ThemeProvider)
- Tailwind configuration with extended color palette featuring Android green accents
- Typography: Inter (body/UI) and Space Grotesk (headings/display) from Google Fonts
- Responsive design with mobile-first approach using Tailwind breakpoints

**State Management:**
- React Query for async state (projects, services, skills, experience data)
- React Context for theme management (dark/light mode persistence via localStorage)
- React Hook Form with Zod validation for form handling (contact form)
- Local component state with React hooks

### Backend Architecture

**Server Framework:**
- Express.js on Node.js with TypeScript
- RESTful API design pattern
- Middleware stack for JSON parsing, URL encoding, and request logging

**API Structure:**
- `/api/portfolio/info` - Portfolio metadata
- `/api/projects` - Project listings with featured flag support
- `/api/projects/:id` - Individual project details
- `/api/services` - Service offerings
- `/api/skills` - Technical skills categorized by type
- `/api/experiences` - Work experience timeline
- `/api/contact` - Contact form submission endpoint

**Data Layer:**
- In-memory storage implementation (`MemStorage`) for development
- Drizzle ORM configured for PostgreSQL (production-ready schema defined)
- Zod schemas for runtime validation and type inference
- Shared schema definitions between client and server (`@shared/schema`)

**Development Setup:**
- Vite integration in development mode for SSR template rendering
- Static file serving in production
- Request/response logging middleware
- Error handling with standardized JSON error responses

### Data Storage

**Schema Design (Drizzle ORM):**
- **Projects**: Portfolio projects with categories (native, ui_ux, firebase, full_stack), technologies array, external links (GitHub, Play Store), and featured flag
- **Services**: Service offerings with numbered identifiers and icon references
- **Skills**: Technical skills categorized by type (language, framework, tool, platform)
- **Experience**: Work history with achievements array
- **Contact Messages**: Form submissions with validation
- **Portfolio Info**: General metadata and bio information

**Database Configuration:**
- PostgreSQL via Neon serverless driver (@neondatabase/serverless)
- Connection pooling for serverless environments
- Migration system via drizzle-kit
- Environment-based configuration (DATABASE_URL)

### External Dependencies

**Core Frontend Libraries:**
- `react` & `react-dom` - UI framework
- `@tanstack/react-query` - Server state management
- `wouter` - Routing
- `react-hook-form` & `@hookform/resolvers` - Form handling
- `zod` - Schema validation
- `tailwindcss` - Utility CSS framework
- `lucide-react` - Icon system (supplemented by `react-icons` for brand icons)

**UI Component Dependencies (Radix UI):**
- Complete suite of accessible, unstyled primitives: Dialog, Dropdown, Popover, Tooltip, Accordion, Tabs, Toast, Select, etc.
- `class-variance-authority` & `clsx` for component styling utilities
- `tailwind-merge` for class merging
- `cmdk` for command palette functionality
- `embla-carousel-react` for carousel components

**Backend Libraries:**
- `express` - Web server framework
- `drizzle-orm` & `drizzle-zod` - ORM and schema validation
- `@neondatabase/serverless` - PostgreSQL driver
- `vite` - Build tool and dev server integration
- `esbuild` - Production bundling

**Development Tools:**
- `typescript` - Type system
- `tsx` - TypeScript execution for development
- `@replit/vite-plugin-*` - Replit-specific development enhancements
- `drizzle-kit` - Database migration tooling

**Additional Integrations:**
- Google Fonts (Inter, Space Grotesk) via CDN
- Form validation with Zod schemas shared between client/server
- Toast notifications for user feedback
- Responsive image handling with aspect ratios

**Build & Deployment:**
- Development: `tsx server/index.ts` with Vite middleware
- Production: Vite builds client to `dist/public`, esbuild bundles server to `dist`
- Environment variables for database connection and feature flags
- Type checking via `tsc --noEmit`