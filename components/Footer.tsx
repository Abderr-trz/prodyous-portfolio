import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-invitation">Have a story worth holding onto?</p>
      <a className="footer-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      <div className="footer-base">
        <p>© {new Date().getFullYear()} PRODYOUS</p>
        <p>{siteConfig.location}</p>
        <Link href="/contact">Start a project</Link>
      </div>
    </footer>
  );
}
