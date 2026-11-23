import type { Project, ProjectStatus } from "@/data/projects";
import { ExternalLink } from "@/components/ui/ExternalLink";

const statusStyles: Record<ProjectStatus, string> = {
  Live: "border-emerald-600/40 text-emerald-700 dark:text-emerald-300",
  "In progress": "border-amber-600/40 text-amber-800 dark:text-amber-300",
  "Coming soon": "border-border text-muted",
};

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, status, repoUrl, demoUrl } = project;
  const hasLinks = Boolean(repoUrl || demoUrl);

  return (
    <article className="flex w-full flex-col rounded-lg border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold leading-snug">{title}</h3>
        <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}>
          {status}
        </span>
      </div>

      <p className="mt-2 text-sm text-muted">{description}</p>

      {tags.length > 0 && (
        <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="rounded bg-background px-2 py-0.5 font-mono text-xs text-muted">
              {tag}
            </li>
          ))}
        </ul>
      )}

      {hasLinks && (
        // mt-auto pins the links to the bottom so cards in a row line up.
        <div className="mt-auto flex gap-4 pt-5 text-sm font-medium">
          {repoUrl && (
            <ExternalLink href={repoUrl} className="text-accent underline-offset-4 hover:underline">
              Code<span className="sr-only"> for {title}</span>
            </ExternalLink>
          )}
          {demoUrl && (
            <ExternalLink href={demoUrl} className="text-accent underline-offset-4 hover:underline">
              Live demo<span className="sr-only"> of {title}</span>
            </ExternalLink>
          )}
        </div>
      )}
    </article>
  );
}
