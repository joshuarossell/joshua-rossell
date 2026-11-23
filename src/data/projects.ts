// Single source of truth for projects.
// To add a project, add one object to the `projects` array. No component changes needed.

export type ProjectStatus = "Live" | "In progress" | "Coming soon";

export type Project = {
  /** URL-safe id, reserved for future detail pages at /projects/[slug]. Must be unique. */
  slug: string;
  title: string;
  /** One line, shown on the card. */
  description: string;
  tags: string[];
  status: ProjectStatus;
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "fantasy-football-analytics",
    title: "Weekly Fantasy Football Analytics",
    description: "[Placeholder: one-line description]",
    tags: [],
    status: "Coming soon",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
