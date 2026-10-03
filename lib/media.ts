const defaultVideoBaseUrl =
  "https://7a83mn90ichgitng.public.blob.vercel-storage.com";

export const videoBaseUrl =
  process.env.NEXT_PUBLIC_VIDEO_BASE_URL ?? defaultVideoBaseUrl;

export function getVideoUrl(path: string): string {
  if (path.startsWith("https://") || path.startsWith("http://")) return path;
  return `${videoBaseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
