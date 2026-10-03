import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";
import { getAllCategories } from "@/lib/categories";

export default function HomePage() {
  const categories = getAllCategories();

  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <h1 id="home-title">Hi, we are PRODYOUS!</h1>
          <p>
            We are an audiovisual production studio based in Morocco, Agadir. We create
            purposeful photography and films across culture, business, fashion,
            and documentary—bringing stories to life through images that hold
            attention and stay in memory.
          </p>
        </div>
        <a className="hero-index" href="#work" aria-label="Scroll to portfolio categories">
          <span>Portfolio</span>
          <span className="hero-chevron" aria-hidden="true" />
        </a>
      </section>

      <section className="work-section category-section" id="work" aria-labelledby="work-title">
        <div className="section-intro">
          <h2 id="work-title">Portfolio</h2>
        </div>
        <CategoryGrid categories={categories} />
      </section>

      <section className="manifesto" aria-label="Studio approach">
        <p>We look for the image beneath the image: the gesture between poses, the breath before action, the texture that makes a story feel lived.</p>
        <Link className="text-link" href="/about">Inside the studio</Link>
      </section>
    </>
  );
}
