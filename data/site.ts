export const logos = { welcome: '/images/OAE Logo Transparent.png', navigation: '/images/OAE Logo Transparent.png' };
export const projects: { name: string; kicker: string; description: string; href: string; image: string; logo?: string }[] = [
  { name: 'ỌNUỌRA MENSWEAR', kicker: 'Design', description: 'Contemporary menswear grounded in African identity.', href: 'https://onuoramenswear.com', image: '/images/onuora-hero.png', logo: '/media/onuoramenswear-logo.png' },
  { name: 'ABIBITUMI FILM FESTIVAL', kicker: 'Cinema', description: 'A gathering for bold stories, filmmakers and audiences.', href: 'https://filmfestival.abibifahodie.org', image: '/media/film festival.png', logo: '/media/Abibitumi-300x300.webp' },
  { name: 'OPEN DOOR DIALOGUES', kicker: 'Ideas', description: 'Conversations that move culture forward.', href: 'https://www.abibitumi.com/abibitumi-event/open-door-dialogues-2026/', image: '/media/open door dialogues.jpg', logo: '/media/DOOR-logo-300x212.webp' },
];
type FilmProject = { title: string; releaseDate: string; thumbnail: string; link: string; previewUrl: string };
export const filmProjects: Record<'documentary' | 'feature' | 'short', FilmProject[]> = {
  documentary: [
    { title: 'Kano', releaseDate: '', thumbnail: '/media/Kano thumbnail.png', link: 'https://player.vimeo.com/video/1229636250?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479', previewUrl: 'https://player.vimeo.com/video/1229636250?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'KMT', releaseDate: '', thumbnail: '/media/KMT THUMBNAIL.png', link: 'https://player.vimeo.com/video/1229634968?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479', previewUrl: 'https://player.vimeo.com/video/1229634968?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'A Thousand Years to Timbuktu', releaseDate: '', thumbnail: '/media/A Thousand Years Thumbnail.png', link: 'https://player.vimeo.com/video/1229636431?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479', previewUrl: 'https://player.vimeo.com/video/1229636431?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Revolution Now', releaseDate: '', thumbnail: '/media/Revoution Now Thumbnail.png', link: 'https://player.vimeo.com/video/1229634802?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479', previewUrl: 'https://player.vimeo.com/video/1229634802?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Dahomey and Vodun', releaseDate: '', thumbnail: '/media/AEA FILMS YOUTUBE Thumbnails-56.png', link: 'https://player.vimeo.com/video/1230277553?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479', previewUrl: 'https://player.vimeo.com/video/1230277553?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1' },
  ],
  feature: [
    { title: 'Mona', releaseDate: '', thumbnail: '/media/Mona Thumbnail.png', link: 'https://player.vimeo.com/video/1229637389?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479', previewUrl: 'https://player.vimeo.com/video/1229637389?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Catching a Thief', releaseDate: '', thumbnail: '/media/Catching a Thief Thumbnail.png', link: 'https://player.vimeo.com/video/911335203?h=0daff20575&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479', previewUrl: 'https://player.vimeo.com/video/911335203?h=0daff20575&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Woolwich Boys', releaseDate: '', thumbnail: '/media/Woolwich Boys Thumbnail.png', link: 'https://player.vimeo.com/video/1229637539?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479', previewUrl: 'https://player.vimeo.com/video/1229637539?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1' },
  ],
  short: [
    { title: 'Tafiya', releaseDate: '', thumbnail: '/media/Tafiya Thumbnail.png', link: 'https://player.vimeo.com/video/1229637267?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479', previewUrl: 'https://player.vimeo.com/video/1229637267?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Oji', releaseDate: '', thumbnail: '/media/Oji Thumbnail.png', link: 'https://player.vimeo.com/video/547692019?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479', previewUrl: 'https://player.vimeo.com/video/547692019?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Tainted Canvas', releaseDate: '', thumbnail: '/media/Tainted Canvas Thumbnail.png', link: 'https://player.vimeo.com/video/1229638100?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479', previewUrl: 'https://player.vimeo.com/video/1229638100?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'The Unlucky Mother', releaseDate: '', thumbnail: '/media/The Unlucky Mother.png', link: 'https://player.vimeo.com/video/27408125?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479', previewUrl: 'https://player.vimeo.com/video/27408125?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1' },
    { title: 'Woodfalls', releaseDate: '', thumbnail: 'https://i.vimeocdn.com/video/2204344445-576f41bb00cd227fdb665ef61916e89bdcda601cfee2baa373630b0f1f37b6bd-d_640', link: 'https://player.vimeo.com/video/1229637892?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479', previewUrl: 'https://player.vimeo.com/video/1229637892?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1' },
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
