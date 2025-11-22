# Meryem Erdoğdu - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, projects, skills, and achievements of an AI/ML Software Developer.

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations and interactive elements
- **Mouse-Tracking Gradient**: Dynamic visual effects that follow cursor movement
- **Responsive Layout**: Seamless experience across desktop, tablet, and mobile devices
- **Single Page Application**: Fast navigation with client-side routing
- **Dark Mode**: Elegant dark theme optimized for readability
- **Accessible**: Built with accessibility best practices and semantic HTML
- **Type-Safe**: Full TypeScript implementation for reliability
- **Performance Optimized**: Fast load times with optimized assets

## 🛠 Tech Stack

- **Framework**: React 18 with TypeScript for type-safe development
- **Build Tool**: Vite for lightning-fast HMR and optimized builds
- **Styling**: Tailwind CSS with custom theming and shadcn/ui components
- **Routing**: Wouter for lightweight client-side navigation
- **State Management**: TanStack Query for async state handling
- **UI Components**: shadcn/ui (New York style) built on Radix UI primitives
- **Icons**: Lucide React for consistent, beautiful icons
- **Validation**: Zod for TypeScript-first schema validation
- **Forms**: React Hook Form for efficient form handling

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Git for version control

## 🏗 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5000`

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/
│   │   │   │   ├── AboutSection.tsx
│   │   │   │   ├── ExperienceSection.tsx
│   │   │   │   ├── ProjectsSection.tsx
│   │   │   │   ├── SkillsSection.tsx
│   │   │   │   ├── CertificatesSection.tsx
│   │   │   │   ├── InterestsSection.tsx
│   │   │   │   └── WritingSection.tsx
│   │   │   ├── ui/                    # shadcn/ui components
│   │   │   ├── Navigation.tsx
│   │   │   ├── ExperienceCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── WritingCard.tsx
│   │   ├── hooks/
│   │   │   └── use-mobile.tsx
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── index.css                      # Global styles & theme
├── server/
│   └── index.ts                       # Express server
├── attached_assets/                   # Images and static files
├── public/                            # Public static assets
├── dist/                              # Build output
├── tailwind.config.ts                 # Tailwind configuration
├── vite.config.ts                     # Vite configuration
└── package.json                       # Dependencies
```

## 🎨 Customization

### Colors

The website uses a custom dark theme with CSS variables. Modify colors in `client/index.css`:

```css
:root {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  /* ... more color variables */
}
```

### Content

Update portfolio content in the respective section components:

- **Experience**: `client/src/components/sections/ExperienceSection.tsx`
- **Projects**: `client/src/components/sections/ProjectsSection.tsx`
- **Skills**: `client/src/components/sections/SkillsSection.tsx`
- **Certificates**: `client/src/components/sections/CertificatesSection.tsx`

### Animations

Mouse-tracking gradient effect can be adjusted in `client/src/App.tsx`. Tailwind transitions are used throughout components for smooth interactions.

## 🚀 Deployment

The site is configured for automatic deployment to GitHub Pages:

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   
   Push to the main branch - GitHub Actions will automatically build and deploy

3. **Manual deployment**
   ```bash
   npm run deploy
   ```

## 📊 Performance

- **Build Size**: Optimized with Vite code splitting
- **Load Time**: Fast initial load with lazy-loaded components
- **Responsive**: Mobile-first approach with optimized breakpoints
- **Type Safety**: Full TypeScript coverage prevents runtime errors

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - TypeScript type checking

### Custom Hooks

- `use-mobile` - Responsive breakpoint detection for mobile/desktop UI adaptation

### Path Aliases

- `@/` - Client source directory
- `@shared/` - Shared code between client and server
- `@assets/` - Image and static asset imports

## 🔮 Future Enhancements

- Database integration with Neon Postgres (dependencies already installed)
- Content Management System for easier updates
- Blog functionality with markdown support
- Contact form with backend integration
- Analytics integration

## 🙏 Acknowledgments

- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Form handling with [React Hook Form](https://react-hook-form.com/)
- Validation with [Zod](https://zod.dev/)

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Meryem Erdoğdu
