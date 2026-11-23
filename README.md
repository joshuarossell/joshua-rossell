# Joshua Rossell — Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Run locally

Requires Node.js 22 or later.

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run lint     # ESLint
npm run build    # production build (also type-checks)
npm start        # serve the production build
```

## Project structure

```
src/
  app/
    layout.tsx          # <html>, fonts, theme provider, header/footer, skip link
    page.tsx            # home page: composes the sections in order
    globals.css         # Tailwind import + light/dark color tokens
  components/
    layout/             # SiteHeader, SiteFooter
    sections/           # Hero, About, Projects, ResumeContact
    projects/           # ProjectCard
    theme/              # ThemeProvider, ThemeToggle
    ui/                 # Section, ExternalLink (shared building blocks)
  data/
    site.ts             # name, pitch, about copy, email, social links
    projects.ts         # project list + Project type
public/
  resume.pdf            # replace with the real resume (same filename)
```

## Editing content

All copy lives in `src/data/`. Components contain no personal text.

- **Personal details:** edit `src/data/site.ts`. Values in `[brackets]` are placeholders.
- **Resume:** replace `public/resume.pdf`.
- **Add a project:** add one object to the `projects` array in `src/data/projects.ts`:

  ```ts
  {
    slug: "my-project",            // unique, URL-safe
    title: "My Project",
    description: "One line about it.",
    tags: ["TypeScript", "PostgreSQL"],
    status: "Live",                // "Live" | "In progress" | "Coming soon"
    repoUrl: "https://github.com/...",
    demoUrl: "https://...",        // optional
  },
  ```

  TypeScript rejects entries with missing fields or an invalid status.

## Adding project detail pages later

Each project already has a `slug`, and `getProjectBySlug()` exists in `src/data/projects.ts`. To add detail pages, create `src/app/projects/[slug]/page.tsx` with `generateStaticParams()` returning `projects.map(p => ({ slug: p.slug }))`, and set `export const dynamicParams = false` so unknown slugs return 404.

Don't create this route before at least one project needs a page. This project uses Cache Components (the Next.js 16 default), and an empty `generateStaticParams` result fails the build.

## Deployment

The site is fully static (every route prerenders at build time), so it can be deployed to Vercel or Azure Static Web Apps.

<!-- Deployment steps will be added once a host is chosen. -->
