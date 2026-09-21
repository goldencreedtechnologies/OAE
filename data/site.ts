export const logos = { welcome: '/images/OAE Logo Transparent.png', navigation: '/images/OAE Logo Transparent.png' };
export const awards: { name: string; details: string; logo: string }[] = [];
export const projects: { name: string; kicker: string; description: string; href: string; image: string; logo?: string }[] = [
  { name: 'ỌNUỌRA MENSWEAR', kicker: 'Design', description: 'Contemporary menswear grounded in African identity.', href: 'https://onuoramenswear.com', image: '/images/onuora-hero.png' },
  { name: 'ABIBITUMI FILM FESTIVAL', kicker: 'Cinema', description: 'A gathering for bold stories, filmmakers and audiences.', href: 'https://filmfestival.abibifahodie.org', image: '/media/film festival.png' },
  { name: 'OPEN DOOR DIALOGUES', kicker: 'Ideas', description: 'Conversations that move culture forward.', href: 'https://www.abibitumi.com/abibitumi-event/open-door-dialogues-2026/', image: '/media/open door dialogues.jpg' },
];
type FilmProject = { title: string; releaseDate: string; thumbnail: string; link: string; previewUrl: string };
// Dates and posters intentionally blank until confirmed; provider hashes are preserved.
export const filmProjects: Record<'documentary' | 'narrative', FilmProject[]> = {
  documentary: [
    { title: 'KMT', releaseDate: '', thumbnail: '', link: 'https://vimeo.com/836168431', previewUrl: 'https://player.vimeo.com/video/836168431?autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Dahomey and Vodun', releaseDate: '', thumbnail: '', link: 'https://youtu.be/G93TsdYFgoY?si=ioxlIMvEAAF_-6A9', previewUrl: 'https://www.youtube-nocookie.com/embed/G93TsdYFgoY?autoplay=1&mute=1&controls=0&loop=1&playlist=G93TsdYFgoY' },
    { title: 'Revolution Now', releaseDate: '', thumbnail: '', link: 'https://vimeo.com/647411793', previewUrl: 'https://player.vimeo.com/video/647411793?autoplay=1&muted=1&controls=0&loop=1' },
  ],
  narrative: [
    { title: 'Tafiya', releaseDate: '', thumbnail: '', link: 'https://vimeo.com/597166533', previewUrl: 'https://player.vimeo.com/video/597166533?autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Oji', releaseDate: '', thumbnail: '', link: 'https://player.vimeo.com/video/547692019?h=c151762eb5', previewUrl: 'https://player.vimeo.com/video/547692019?h=c151762eb5&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Mona', releaseDate: '', thumbnail: '', link: 'https://player.vimeo.com/video/190173293?h=8c7ac8a910', previewUrl: 'https://player.vimeo.com/video/190173293?h=8c7ac8a910&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'The Unlucky Mother', releaseDate: '', thumbnail: '', link: 'https://player.vimeo.com/video/27408125?h=c5b2307972', previewUrl: 'https://player.vimeo.com/video/27408125?h=c5b2307972&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Woolwich Boys', releaseDate: '', thumbnail: '', link: 'https://player.vimeo.com/video/96725826?h=3dec819739', previewUrl: 'https://player.vimeo.com/video/96725826?h=3dec819739&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Title forthcoming', releaseDate: '', thumbnail: '', link: '', previewUrl: '' },
  ],
};
export const team = [
  { name: 'Onuora Abuah', role: 'Founder & Managing Director', email: 'onuora@onuoraenterprises.com', image: '/images/onuora.png' },
  { name: 'Charles Samuel', role: 'Head of Production', email: 'charles@onuoraenterprises.com', image: '/images/charles.jpg' },
  { name: 'Awele', role: 'Business Development Executive', email: 'awele@onuoraenterprises.com' },
];
