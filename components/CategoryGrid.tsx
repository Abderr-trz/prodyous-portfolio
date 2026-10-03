import Image from "next/image";
import Link from "next/link";
import type { WorkCategory } from "@/lib/categories";

export function CategoryGrid({ categories }: { categories: readonly WorkCategory[] }) {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <article className="category-card" key={category.slug}>
          <Link href={`/work/${category.slug}`} aria-label={`Open the ${category.title} film collection`}>
            <div className="category-cover">
              <Image src={category.cover} alt={category.coverAlt} fill sizes="100vw" />
              <span className="category-play" aria-hidden="true">Play collection</span>
            </div>
            <div className="category-meta">
              <h3>{category.title}</h3>
              <p>{category.films.length} films</p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
