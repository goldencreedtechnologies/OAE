export type ReelKey = 'superTrailer' | 'documentary' | 'narrative' | 'events';
export const videos: Record<ReelKey, { src: string; poster: string; label: string }> = {
  superTrailer: { src: '', poster: '/media/oae-cinema-master.png', label: 'OAE Super Trailer' },
  documentary: { src: '', poster: '/media/oae-cinema-master.png', label: 'Documentary Reel' },
  narrative: { src: '', poster: '/media/oae-cinema-master.png', label: 'Feature & Short Films Reel' },
  events: { src: '', poster: '/media/oae-cinema-master.png', label: 'Events Reel' },
};
