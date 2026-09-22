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
    { title: 'Tafiya', releaseDate: '', thumbnail: '', link: 'https://vimeo.com/597166533', previewUrl: 'https://player.vimeo.com/video/597166533?autoplay=1&muted=1&controls=0&loop=1&title=0&byline=0&portrait=0' },
    { title: 'Oji', releaseDate: '', thumbnail: '', link: 'https://player.vimeo.com/video/547692019?h=c151762eb5', previewUrl: 'https://player.vimeo.com/video/547692019?h=c151762eb5&autoplay=1&muted=1&controls=0&loop=1&title=0&byline=0&portrait=0' },
    { title: 'Mona', releaseDate: '', thumbnail: '/media/Mona-thumb.jpg', link: 'https://player.vimeo.com/video/190173293?h=8c7ac8a910', previewUrl: 'https://player.vimeo.com/video/190173293?h=8c7ac8a910&autoplay=1&muted=1&controls=0&loop=1&title=0&byline=0&portrait=0' },
    { title: 'Unlucky Mother', releaseDate: '', thumbnail: '', link: 'https://player.vimeo.com/video/27408125?h=c5b2307972', previewUrl: 'https://player.vimeo.com/video/27408125?h=c5b2307972&autoplay=1&muted=1&controls=0&loop=1&title=0&byline=0&portrait=0' },
  ],
};
export const team = [
  { name: 'Onuora Abuah', role: 'Founder & Managing Director', email: 'onuora@onuoraenterprises.com', image: '/images/onuora-headshot.png' },
  { name: 'Charles Samuel', role: 'Head of Production', email: 'charles@onuoraenterprises.com', image: '/images/Charles-Headshot.png' },
  { name: 'Awele Ozieh', role: 'Business Development Executive', email: 'awele@onuoraenterprises.com', image: '/images/Awele-Headshot.png' },
];

export const contactRecipient = 'charles@onuoraenterprises.com';

export const legalDocuments = {
  privacy: {
    title: 'PRIVACY',
    paragraphs: [
      'OAE receives the information you choose to send when you contact us, such as your name, email address, company and project details. We use it only to respond to your enquiry and discuss potential work.',
      'This website uses hosting and embedded-media providers that may process limited technical information under their own privacy terms. OAE does not sell personal information.',
      'You may contact OAE to ask about information you have sent, including requests to correct or delete it where applicable.',
    ],
  },
  terms: {
    title: 'TERMS',
    paragraphs: [
      'This website presents OAE\'s work and services for general information. Site content may be updated, corrected or withdrawn without notice.',
      'Unless stated otherwise, OAE owns or is authorised to present the text, branding and production materials shown here. They may not be reproduced or used commercially without permission.',
      'Any production engagement, deliverables, fees and rights will be governed by a separate written agreement. External websites are governed by their own terms.',
    ],
  },
  accessibility: {
    title: 'ACCESSIBILITY',
    paragraphs: [
      'OAE aims to make this website clear, navigable and usable across current devices and assistive technologies.',
      'We continue to review colour contrast, keyboard access, readable text, alternative descriptions and motion preferences as the site develops.',
      'If you encounter a barrier or need information in another format, please contact OAE and describe the page or content you need.',
    ],
  },
  legal: {
    title: 'LEGAL',
    paragraphs: [
      'OAE is the trading identity presented on this website. References to projects, collaborators and associated worlds are provided for portfolio and informational purposes.',
      'Third-party names, trademarks, video platforms and linked materials remain the property of their respective owners. Their appearance does not transfer ownership to OAE.',
      'Nothing on this website creates a client relationship, partnership or binding offer. Formal commitments arise only through an agreement accepted by the relevant parties.',
    ],
  },
} as const;
