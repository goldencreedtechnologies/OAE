export const projects = [
  { name: 'ỌNUỌRA MENSWEAR', kicker: 'Design', description: 'Contemporary menswear grounded in African identity.', href: 'https://onuoramenswear.com', image: '/images/onuora-hero.png' },
  { name: 'ABIBITUMI FILM FESTIVAL', kicker: 'Cinema', description: 'A gathering for bold stories, filmmakers and audiences.', href: 'https://filmfestival.abibifahodie.org', image: '/media/film festival.png' },
  { name: 'OPEN DOOR DIALOGUES', kicker: 'Ideas', description: 'Conversations that move culture forward.', href: 'https://www.abibitumi.com/abibitumi-event/open-door-dialogues-2026/', image: '/media/open door dialogues.jpg' },
];
export const filmBullets = {
  documentary: ['Cultural identity', 'People & places', 'Living histories'],
  narrative: ['Character-driven storytelling', 'Creative development', 'Script-to-screen production'],
};
export const filmProjects = {
  documentary: ['121636', '122406', '123419', '123530', '123749', '123957', '124046', '124545', '124631', '124720', '130046'].map((time, i) => ({ image: `/media/documentaries/Screenshot 2026-09-18 ${time}.jpg`, alt: `Documentary film still ${i + 1}` })),
  narrative: ['130829', '131359', '131725', '132007', '132258'].map((time, i) => ({ image: `/media/feature film/Screenshot 2026-09-18 ${time}.jpg`, alt: `Narrative film still ${i + 1}` })),
};
export const team = [
  { name: 'Onuora Abuah', role: 'Founder & Managing Director', email: 'onuora@onuoraenterprises.com', image: '/images/onuora.png' },
  { name: 'Charles', role: 'Head of Production', email: 'charles@onuoraenterprises.com', image: '/images/charles.jpg' },
  { name: 'Awele', role: 'Business Development Executive', email: 'awele@onuoraenterprises.com' },
];
