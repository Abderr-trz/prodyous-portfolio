import Image from "next/image";
import Link from "next/link";

const desktopLinks = [
  { href: "/#work", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

const mobileLinks = [
  ...desktopLinks,
  { href: "/about", label: "About" },
] as const;

export function Header() {
  return (
    <header className="site-header">
      <nav className="desktop-nav" aria-label="Primary navigation">
        {desktopLinks.map((link) => (
          <Link href={link.href} key={link.href}>{link.label}</Link>
        ))}
      </nav>
      <Link className="brand" href="/" aria-label="PRODYOUS home">
        <Image src="/prodyous-mark.png" alt="PRODYOUS" width={86} height={86} priority />
      </Link>
      <details className="mobile-nav">
        <summary aria-label="Open navigation"><span>Menu</span></summary>
        <nav aria-label="Mobile navigation">
          {mobileLinks.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
