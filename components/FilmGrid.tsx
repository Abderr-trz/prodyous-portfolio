"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Film } from "@/lib/categories";
import { getVideoUrl } from "@/lib/media";

type FullscreenVideo = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void;
};

export function FilmGrid({ films }: { films: readonly Film[] }) {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const landscapeCount = films.filter((film) => film.width > film.height).length;
  const portraitCount = films.length - landscapeCount;
  const layoutClass = landscapeCount === 0
    ? ""
    : portraitCount <= landscapeCount
      ? " film-grid-mixed film-grid-landscape-led"
      : " film-grid-mixed film-grid-portrait-led";

  function playFullscreen(index: number) {
    const video = videoRefs.current[index] as FullscreenVideo | null;
    if (!video) return;

    videoRefs.current.forEach((item, itemIndex) => {
      if (item && itemIndex !== index) item.pause();
    });

    setActiveFilm(index);
    void video.play();

    if (video.requestFullscreen) {
      void video.requestFullscreen().catch(() => {
        // Playback remains available inline when browser policy blocks fullscreen.
      });
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    }
  }

  return (
    <div className={`film-grid${layoutClass}`}>
      {films.map((film, index) => {
        const isActive = activeFilm === index;
        const orientation = film.width > film.height ? "landscape" : "portrait";

        return (
          <article className={`film-card film-card-${orientation}`} key={film.src}>
            <div className={`film-frame film-frame-${orientation}`}>
              <video
                ref={(element) => { videoRefs.current[index] = element; }}
                src={getVideoUrl(film.src)}
                poster={film.poster}
                controls={isActive}
                playsInline
                preload="none"
                aria-label={film.title}
              >
                Your browser does not support HTML video.
              </video>
              {!isActive ? (
                <button type="button" onClick={() => playFullscreen(index)} aria-label={`Play ${film.title} in fullscreen`}>
                  <Image
                    src={film.poster}
                    alt={`Still from ${film.title}`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
                  <span className="film-play" aria-hidden="true"><span /></span>
                </button>
              ) : null}
            </div>
            <div className="film-meta">
              <h2>{film.title}</h2>
              <p>{film.duration}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
