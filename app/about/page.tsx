import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Meet PRODYOUS, an independent photography and film studio based in Morocco and working worldwide.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="editorial-page">
      <header className="page-lead about-lead">
        <p>Independent studio / Morocco</p>
        <h1>Close enough to feel it. Far enough to see.</h1>
      </header>
      <div className="about-image">
        <Image src="/media/hands-of-earth.jpg" alt="Artisan working with clay in a sunlit workshop" fill priority sizes="(max-width: 767px) 100vw, 58vw" />
      </div>
      <div className="about-copy">
        <p className="about-opening">PRODYOUS is a photography and film studio drawn to people, movement, and the traces that places leave behind.</p>
        <div>
          <p>We work across editorial, fashion, documentary, and commercial commissions. Our process stays deliberately small: careful preparation, a calm set, and room for the unplanned moment to arrive.</p>
          <p>Based in Morocco and available worldwide, we collaborate with artists, agencies, and brands that care about images with a point of view.</p>
          <Link className="text-link" href="/contact">Work with us</Link>
        </div>
      </div>
      <section className="services" aria-labelledby="services-title">
        <h2 id="services-title">Practice</h2>
        <ul>
          <li>Campaign photography</li>
          <li>Editorial & portraiture</li>
          <li>Creative direction</li>
          <li>Film & moving image</li>
        </ul>
      </section>
    </article>
  );
}
