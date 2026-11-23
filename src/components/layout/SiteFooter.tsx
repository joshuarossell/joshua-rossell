import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-3xl px-4 py-8 text-sm text-muted sm:px-6">
        <p>&copy; {site.name}</p>
      </div>
    </footer>
  );
}
