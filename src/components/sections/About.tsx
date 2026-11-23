import { site } from "@/data/site";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
