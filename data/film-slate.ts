export type FilmSlateProject = {
  slug: string;
  title: string;
  genre: string;
  status: string;
  synopsis: string;
  artwork: string;
  teaserPoster: string;
  vimeoId: string;
  vimeoHash?: string;
  pitchDeck: string;
};

export const filmSlateProjects: FilmSlateProject[] = [
  {
    slug: 'catching-a-thief',
    title: 'Catching a Thief',
    genre: 'Action Thriller / Espionage',
    status: 'Final Stages of Post-Production',
    synopsis:
      'Inspired by the 1984 Dikko Affair, Catching a Thief follows a covert operation involving Nigerian intelligence and Mossad agents tasked with capturing a fugitive former minister in London. With just 48 hours to execute the mission, the team faces growing threats and the possibility of betrayal from within.',
    artwork: '/media/catching-a-thief-slate.webp',
    teaserPoster: '/media/Catching a Thief Thumbnail.webp',
    vimeoId: '1231032122',
    vimeoHash: 'f16b048083',
    pitchDeck: '/documents/CATCHING%20A%20THIEF%20PITCH%20DECK.pdf',
  },
];
