export const logos = { welcome: '/images/OAE Logo Transparent.png', navigation: '/images/OAE Logo Transparent.png' };
export const projects: { name: string; kicker: string; description: string; href: string; image: string; logo?: string }[] = [
  { name: 'ỌNUỌRA MENSWEAR', kicker: 'Design', description: 'Contemporary menswear grounded in African identity.', href: 'https://onuoramenswear.com', image: '/images/onuora-hero.png', logo: '/media/onuoramenswear-logo.png' },
  { name: 'ABIBITUMI FILM FESTIVAL', kicker: 'Cinema', description: 'A gathering for bold stories, filmmakers and audiences.', href: 'https://filmfestival.abibifahodie.org', image: '/media/film festival.png', logo: '/media/Abibitumi-300x300.webp' },
  { name: 'OPEN DOOR DIALOGUES', kicker: 'Ideas', description: 'Conversations that move culture forward.', href: 'https://www.abibitumi.com/abibitumi-event/open-door-dialogues-2026/', image: '/media/open door dialogues.jpg', logo: '/media/DOOR-logo-300x212.webp' },
];
type FilmProject = { title: string; releaseDate: string; thumbnail: string; link: string; previewUrl: string };
// Unconfirmed dates and artwork stay blank; provider hashes are preserved.
export const filmProjects: Record<'documentary' | 'narrative', FilmProject[]> = {
  documentary: [
    { title: 'Danhomey', releaseDate: '', thumbnail: '/media/Danhomey-thumb.jpg', link: 'https://www.youtube.com/embed/G93TsdYFgoY?si=I_XjA233LO5lR7pp', previewUrl: 'https://www.youtube-nocookie.com/embed/G93TsdYFgoY?si=I_XjA233LO5lR7pp&autoplay=1&mute=1&controls=0&loop=1&playlist=G93TsdYFgoY' },
    { title: 'Danhomey 2', releaseDate: '', thumbnail: '', link: 'https://www.youtube.com/embed/ibJ_bPb4jOQ?si=b6TmrrO6nvm_VymL', previewUrl: 'https://www.youtube-nocookie.com/embed/ibJ_bPb4jOQ?si=b6TmrrO6nvm_VymL&autoplay=1&mute=1&controls=0&loop=1&playlist=ibJ_bPb4jOQ' },
    { title: 'km.t', releaseDate: '', thumbnail: '', link: 'https://www.youtube.com/embed/ukBwMZqcCGA?si=d2AsVHFrzFaOULM2', previewUrl: 'https://www.youtube-nocookie.com/embed/ukBwMZqcCGA?si=d2AsVHFrzFaOULM2&autoplay=1&mute=1&controls=0&loop=1&playlist=ukBwMZqcCGA' },
    { title: 'Revolution Now', releaseDate: '', thumbnail: '', link: 'https://www.youtube.com/embed/skDqooLVVx8?si=a7y0D-2zdvIyZoA2', previewUrl: 'https://www.youtube-nocookie.com/embed/skDqooLVVx8?si=a7y0D-2zdvIyZoA2&autoplay=1&mute=1&controls=0&loop=1&playlist=skDqooLVVx8' },
    { title: 'Kano', releaseDate: '', thumbnail: '', link: 'https://www.youtube.com/embed/Ho07jSBzcAA?si=gL7E9LIHw08X4-Uv', previewUrl: 'https://www.youtube-nocookie.com/embed/Ho07jSBzcAA?si=gL7E9LIHw08X4-Uv&autoplay=1&mute=1&controls=0&loop=1&playlist=Ho07jSBzcAA' },
    { title: '1000 yrs To Tombouctou', releaseDate: '', thumbnail: '', link: 'https://www.youtube.com/embed/S9u_6SGqm4w?si=yvF2_4eSOiPdeJFa', previewUrl: 'https://www.youtube-nocookie.com/embed/S9u_6SGqm4w?si=yvF2_4eSOiPdeJFa&autoplay=1&mute=1&controls=0&loop=1&playlist=S9u_6SGqm4w' },
  ],
  narrative: [
    { title: 'Tafiya', releaseDate: '', thumbnail: '', link: 'https://vimeo.com/597166533', previewUrl: 'https://player.vimeo.com/video/597166533?autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Oji', releaseDate: '', thumbnail: '', link: 'https://player.vimeo.com/video/547692019?h=c151762eb5', previewUrl: 'https://player.vimeo.com/video/547692019?h=c151762eb5&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Mona', releaseDate: '', thumbnail: '/media/Mona-thumb.jpg', link: 'https://player.vimeo.com/video/190173293?h=8c7ac8a910', previewUrl: 'https://player.vimeo.com/video/190173293?h=8c7ac8a910&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'The Unlucky Mother', releaseDate: '', thumbnail: '', link: 'https://player.vimeo.com/video/27408125?h=c5b2307972', previewUrl: 'https://player.vimeo.com/video/27408125?h=c5b2307972&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Woolwich Boys', releaseDate: '', thumbnail: '', link: 'https://player.vimeo.com/video/96725826?h=3dec819739', previewUrl: 'https://player.vimeo.com/video/96725826?h=3dec819739&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Title forthcoming', releaseDate: '', thumbnail: '', link: '', previewUrl: '' },
  ],
};
export const team = [
  { name: 'Onuora Abuah', role: 'Founder & Managing Director', email: 'onuora@onuoraenterprises.com', image: '/images/onuora.png' },
  { name: 'Charles Samuel', role: 'Head of Production', email: 'charles@onuoraenterprises.com', image: '/images/charles.jpg' },
  { name: 'Awele Ozieh', role: 'Business Development Executive', email: 'awele@onuoraenterprises.com' },
];
