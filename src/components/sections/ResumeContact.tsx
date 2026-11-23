import { site } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { ExternalLink } from "@/components/ui/ExternalLink";

const linkClass = "text-accent underline-offset-4 hover:underline";

export function ResumeContact() {
  return (
    <Section id="contact" title="Resume & Contact">
      <a
        href={site.resumePath}
        download
        className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
      >
        Download resume (PDF)
      </a>

      <dl className="mt-8 grid grid-cols-[max-content_1fr] gap-x-6 gap-y-3 text-sm">
        <dt className="text-muted">Email</dt>
        <dd>
          <a href={`mailto:${site.email}`} className={linkClass}>
            {site.email}
          </a>
        </dd>
        <dt className="text-muted">GitHub</dt>
        <dd>
          <ExternalLink href={site.links.github} className={linkClass}>
            {site.links.github.replace("https://", "")}
          </ExternalLink>
        </dd>
        <dt className="text-muted">LinkedIn</dt>
        <dd className="min-w-0 break-words">
          <ExternalLink href={site.links.linkedin} className={linkClass}>
            {site.links.linkedin.replace("https://www.", "")}
          </ExternalLink>
        </dd>
      </dl>
    </Section>
  );
}
