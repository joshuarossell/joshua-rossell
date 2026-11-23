// Opens in a new tab. rel="noopener noreferrer" stops the new page from
// accessing this one via window.opener. The sr-only text warns screen-reader users.
export function ExternalLink({
  href,
  className,
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
