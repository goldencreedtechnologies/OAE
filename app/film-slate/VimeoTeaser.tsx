'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';
import { useState } from 'react';
import styles from './film-slate.module.css';

type VimeoTeaserProps = {
  title: string;
  videoId: string;
  hash?: string;
  poster: string;
};

export function VimeoTeaser({ title, videoId, hash, poster }: VimeoTeaserProps) {
  const [playing, setPlaying] = useState(false);
  const hashParam = hash ? `h=${hash}&` : '';
  const playerUrl = `https://player.vimeo.com/video/${videoId}?${hashParam}title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=1&muted=1`;

  return (
    <div className={styles.teaserFrame}>
      {playing ? (
        <iframe
          src={playerUrl}
          title={`${title} teaser`}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          className={styles.teaserPoster}
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title} teaser`}
        >
          <Image src={poster} alt="" fill sizes="(max-width: 800px) 100vw, 68vw" />
          <span className={styles.posterShade} />
          <span className={styles.playButton} aria-hidden="true"><Play fill="currentColor" /></span>
          <span className={styles.playLabel}>PLAY TEASER</span>
        </button>
      )}
    </div>
  );
}
