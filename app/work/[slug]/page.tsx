import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FilmGrid } from "@/components/FilmGrid";
import { getAllCategories, getCategoryBySlug } from "@/lib/categories";

type CategoryPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `/work/${category.slug}` },
    openGraph: {
      title: `${category.title} — PRODYOUS`,
      description: category.description,
      url: `/work/${category.slug}`,
      images: [{ url: category.cover, alt: category.coverAlt }],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <article className="collection-page">
      <header className="collection-header">
        <Link href="/#work">Back to portfolio</Link>
        <div>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </div>
        <p className="collection-count">{category.films.length} films</p>
      </header>
      <FilmGrid films={category.films} />
    </article>
  );
}
