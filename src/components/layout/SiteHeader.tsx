import Link from "next/link";
import { site } from "@/data/site";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

// Links use "/#id" (not "#id") so they keep working from future pages like /projects/[slug].
const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>
        <div className="flex items-center gap-1 sm:gap-3">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-3 text-sm text-muted sm:gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
