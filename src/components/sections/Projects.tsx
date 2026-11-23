import { projects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug} className="flex">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
