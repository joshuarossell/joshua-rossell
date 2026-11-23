import { site } from "@/data/site";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="py-20 sm:py-28">
      <h1 id="hero-heading" className="text-4xl font-bold tracking-tight sm:text-5xl">
        {site.name}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">{site.pitch}</p>
      <ul className="mt-8 flex flex-wrap gap-3">
        <li>
          <ExternalLink
            href={site.links.github}
            className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            GitHub
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            href={site.links.linkedin}
            className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface"
          >
            LinkedIn
          </ExternalLink>
        </li>
      </ul>
    </section>
  );
}
