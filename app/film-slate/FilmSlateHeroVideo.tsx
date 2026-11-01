'use client';

type FilmSlateHeroVideoProps = {
  className: string;
  src: string;
  poster: string;
};

export function FilmSlateHeroVideo({ className, src, poster }: FilmSlateHeroVideoProps) {
  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
      onLoadedMetadata={(event) => { event.currentTarget.currentTime = 1; }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
