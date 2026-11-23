import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { ResumeContact } from "@/components/sections/ResumeContact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <ResumeContact />
    </>
  );
}
