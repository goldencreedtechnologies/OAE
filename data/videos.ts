export type ReelKey = 'superTrailer' | 'documentary' | 'narrative' | 'events';
export const videos: Record<ReelKey, { src: string; poster: string; label: string }> = {
  superTrailer: { src: '/media/hero-video.mp4', poster: '/media/oae-cinema-master.png', label: 'OAE Super Trailer' },
  documentary: { src: '/media/page-video.mp4', poster: '/media/oae-cinema-master.png', label: 'Documentary Reel' },
  narrative: { src: '/media/page-video.mp4', poster: '/media/oae-cinema-master.png', label: 'Feature & Short Films Reel' },
  events: { src: '/media/page-video.mp4', poster: '/media/oae-cinema-master.png', label: 'Events Reel' },
};
