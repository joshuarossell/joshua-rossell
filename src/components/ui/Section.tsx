// Shared wrapper: every section gets an anchor id, a real <h2>, and
// aria-labelledby so screen readers announce it as a named region.
export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    // scroll-mt keeps the heading from hiding under the sticky header.
    <section id={id} aria-labelledby={headingId} className="scroll-mt-20 border-t border-border py-16">
      <h2 id={headingId} className="mb-6 text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}
