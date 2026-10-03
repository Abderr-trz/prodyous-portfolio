export type Film = {
  title: string;
  src: string;
  poster: string;
  duration: string;
  width: number;
  height: number;
};

export type WorkCategory = {
  slug: string;
  title: string;
  description: string;
  cover: string;
  coverAlt: string;
  films: readonly Film[];
};

export const categories = [
  {
    slug: "cinematic",
    title: "Cinematic",
    description: "Narrative images, branded stories, and atmospheric films shaped through movement, rhythm, and light.",
    cover: "/videos/cinematic/posters/film-06.jpg",
    coverAlt: "Yellow-lit corridor from the PRODYOUS cinematic portfolio",
    films: [
      { title: "11:14", src: "/videos/cinematic/film-01.mp4", poster: "/videos/cinematic/posters/film-01.jpg", duration: "1:11", width: 720, height: 1280 },
      { title: "Amori", src: "/videos/cinematic/film-02.mp4", poster: "/videos/cinematic/posters/film-02.jpg", duration: "0:52", width: 720, height: 1280 },
      { title: "Dr. Salma", src: "/videos/cinematic/film-03.mp4", poster: "/videos/cinematic/posters/film-03.jpg", duration: "1:08", width: 720, height: 1280 },
      { title: "Le Défi × Universia", src: "/videos/cinematic/film-04.mp4", poster: "/videos/cinematic/posters/film-04.jpg", duration: "7:00", width: 720, height: 1280 },
      { title: "Le Défi Foot", src: "/videos/cinematic/film-05.mp4", poster: "/videos/cinematic/posters/film-05.jpg", duration: "2:18", width: 720, height: 1280 },
      { title: "LDK Opening", src: "/videos/cinematic/film-06.mp4", poster: "/videos/cinematic/posters/film-06.jpg", duration: "0:42", width: 720, height: 1280 },
      { title: "Ismall Collection I", src: "/videos/cinematic/film-07.mp4", poster: "/videos/cinematic/posters/film-07.jpg", duration: "0:18", width: 720, height: 1280 },
      { title: "Ismall Collection II", src: "/videos/cinematic/film-08.mp4", poster: "/videos/cinematic/posters/film-08.jpg", duration: "1:51", width: 720, height: 1280 },
      { title: "Cinematic Study", src: "/videos/cinematic/film-09.mp4", poster: "/videos/cinematic/posters/film-09.jpg", duration: "0:52", width: 720, height: 1280 },
    ],
  },
  {
    slug: "immobilier",
    title: "Immobilier",
    description: "Property films that reveal space through natural movement, architectural detail, and a clear sense of place.",
    cover: "/media/categories/immobilier.jpg",
    coverAlt: "Contemporary villa photographed for the PRODYOUS immobilier portfolio",
    films: [
      { title: "Villa Tour", src: "/videos/immobilier/film-01.mp4", poster: "/videos/immobilier/posters/film-01.jpg", duration: "0:30", width: 720, height: 1280 },
      { title: "ARD Residence", src: "/videos/immobilier/film-02.mp4", poster: "/videos/immobilier/posters/film-02.jpg", duration: "1:05", width: 720, height: 1280 },
      { title: "Aerial Perspective", src: "/videos/immobilier/film-03.mp4", poster: "/videos/immobilier/posters/film-03.jpg", duration: "0:44", width: 720, height: 1280 },
      { title: "Architectural Study", src: "/videos/immobilier/film-04.mp4", poster: "/videos/immobilier/posters/film-04.jpg", duration: "0:22", width: 720, height: 1280 },
      { title: "Groupe Founty", src: "/videos/immobilier/film-05.mp4", poster: "/videos/immobilier/posters/film-05.jpg", duration: "0:59", width: 720, height: 1280 },
      { title: "Miaamar", src: "/videos/immobilier/film-06.mp4", poster: "/videos/immobilier/posters/film-06.jpg", duration: "0:38", width: 720, height: 1280 },
      { title: "Residence Reel", src: "/videos/immobilier/film-07.mp4", poster: "/videos/immobilier/posters/film-07.jpg", duration: "0:51", width: 720, height: 1280 },
      { title: "Spaces", src: "/videos/immobilier/film-08.mp4", poster: "/videos/immobilier/posters/film-08.jpg", duration: "2:17", width: 720, height: 1280 },
    ],
  },
  {
    slug: "social-media",
    title: "Social Media",
    description: "Fast, focused content designed for the rhythm of social platforms—from product stories to personality-led campaigns.",
    cover: "/videos/social-media/posters/film-09.jpg",
    coverAlt: "Perfume products under colorful studio lighting",
    films: [
      { title: "After Modif", src: "/videos/social-media/film-01.mp4", poster: "/videos/social-media/posters/film-01.jpg", duration: "0:24", width: 720, height: 1280 },
      { title: "Fin", src: "/videos/social-media/film-02.mp4", poster: "/videos/social-media/posters/film-02.jpg", duration: "3:01", width: 720, height: 1280 },
      { title: "Ibtisam", src: "/videos/social-media/film-03.mp4", poster: "/videos/social-media/posters/film-03.jpg", duration: "1:19", width: 720, height: 1280 },
      { title: "Mazouzi", src: "/videos/social-media/film-04.mp4", poster: "/videos/social-media/posters/film-04.jpg", duration: "1:14", width: 720, height: 1280 },
      { title: "PRF", src: "/videos/social-media/film-05.mp4", poster: "/videos/social-media/posters/film-05.jpg", duration: "1:11", width: 720, height: 1280 },
      { title: "PRODYOUS 2027", src: "/videos/social-media/film-06.mp4", poster: "/videos/social-media/posters/film-06.jpg", duration: "0:26", width: 720, height: 1280 },
      { title: "Social Cut", src: "/videos/social-media/film-07.mp4", poster: "/videos/social-media/posters/film-07.jpg", duration: "0:27", width: 720, height: 1280 },
      { title: "Value 4", src: "/videos/social-media/film-08.mp4", poster: "/videos/social-media/posters/film-08.jpg", duration: "0:44", width: 720, height: 1280 },
      { title: "Parfum Decant", src: "/videos/social-media/film-09.mp4", poster: "/videos/social-media/posters/film-09.jpg", duration: "0:40", width: 720, height: 1280 },
      { title: "Vente I", src: "/videos/social-media/film-10.mp4", poster: "/videos/social-media/posters/film-10.jpg", duration: "0:22", width: 720, height: 1280 },
      { title: "Vente II", src: "/videos/social-media/film-11.mp4", poster: "/videos/social-media/posters/film-11.jpg", duration: "0:14", width: 720, height: 1280 },
    ],
  },
] as const satisfies readonly WorkCategory[];

const categorySlugs = new Set(categories.map((category) => category.slug));
if (categorySlugs.size !== categories.length) throw new Error("Work category slugs must be unique.");

export function getAllCategories(): readonly WorkCategory[] { return categories; }
export function getCategoryBySlug(slug: string): WorkCategory | undefined {
  return categories.find((category) => category.slug === slug);
}
