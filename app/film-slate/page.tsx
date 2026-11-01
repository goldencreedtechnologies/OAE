import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Download, Mail, Menu } from 'lucide-react';
import { filmSlateProjects } from '@/data/film-slate';
import { logos } from '@/data/site';
import { videos } from '@/data/videos';
import { FilmSlateHeroVideo } from './FilmSlateHeroVideo';
import { VimeoTeaser } from './VimeoTeaser';
import styles from './film-slate.module.css';

const productionUrl = 'https://www.onuoraenterprises.com/film-slate';

export const metadata: Metadata = {
  title: 'Film Slate | OAE',
  description: "Explore OAE's film slate, including Catching A Thief - an action thriller currently in the final stages of post-production.",
  alternates: { canonical: productionUrl },
  openGraph: {
    title: 'Film Slate | OAE',
    description: "Explore OAE's film slate, including Catching A Thief - an action thriller currently in the final stages of post-production.",
    url: productionUrl,
    siteName: 'OAE',
    type: 'website',
    images: [{ url: 'https://www.onuoraenterprises.com/media/catching-a-thief-slate.webp', width: 1404, height: 993, alt: 'Catching A Thief official artwork' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Film Slate | OAE',
    description: "Explore OAE's film slate, including Catching A Thief.",
    images: ['https://www.onuoraenterprises.com/media/catching-a-thief-slate.webp'],
  },
};

const navigation = [
  { label: 'FILM', href: '/#film' },
  { label: 'ABOUT', href: '/#about' },
  { label: 'CONTACT', href: '/#contact' },
];

function filmTitleInCopy(copy: string, title: string) {
  const position = copy.indexOf(title);
  if (position < 0) return copy;
  return <>{copy.slice(0, position)}<em className={styles.filmTitle}>{title}</em>{copy.slice(position + title.length)}</>;
}

export default function FilmSlatePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/" aria-label="OAE home">
          <Image src={logos.navigation} alt="OAE" width={1254} height={1254} priority />
        </Link>
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <details className={styles.mobileNav}>
          <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </details>
      </header>

      <section className={styles.intro} aria-labelledby="film-slate-title">
        <FilmSlateHeroVideo className={styles.introVideo} src={videos.documentary.src} poster={videos.documentary.poster} />
        <div className={styles.introContent}>
          <h1 id="film-slate-title">OUR FILM<br /><em>SLATE</em></h1>
          <p className={styles.introFoot}>Explore our productions and upcoming projects.</p>
        </div>
      </section>

      {filmSlateProjects.map((project, index) => (
        <article className={styles.project} id={project.slug} key={project.slug}>
          <section className={styles.projectHero} aria-labelledby={`${project.slug}-title`}>
            <div className={styles.artwork}>
              <Image
                src={project.artwork}
                alt={`${project.title} official artwork`}
                fill
                sizes="(max-width: 900px) 100vw, 62vw"
                priority={index === 0}
              />
            </div>
            <div className={styles.projectIdentity}>
              <h2 id={`${project.slug}-title`}><em className={styles.filmTitle}>{project.title}</em></h2>
              <dl>
                <div><dt>GENRE</dt><dd>{project.genre}</dd></div>
                <div><dt>STATUS</dt><dd>{project.status}</dd></div>
              </dl>
              <div className={styles.quickLinks}>
                <a href={`#${project.slug}-teaser`}>WATCH TEASER</a>
                <a href={`#${project.slug}-deck`}>PITCH DECK</a>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.synopsis}`} aria-labelledby={`${project.slug}-synopsis`}>
            <p className={styles.sectionLabel}>SYNOPSIS</p>
            <h3 id={`${project.slug}-synopsis`}>A mission with<br /><em>48 hours.</em></h3>
            <p>{filmTitleInCopy(project.synopsis, project.title)}</p>
          </section>

          <section className={`${styles.section} ${styles.teaser}`} id={`${project.slug}-teaser`} aria-labelledby={`${project.slug}-teaser-title`}>
            <div className={styles.sectionHeading}>
              <h3 id={`${project.slug}-teaser-title`} className={styles.sectionLabel}>WATCH THE TEASER</h3>
            </div>
            <VimeoTeaser title={project.title} videoId={project.vimeoId} hash={project.vimeoHash} poster={project.teaserPoster} />
          </section>

          <section className={`${styles.section} ${styles.contactRow}`} id={`${project.slug}-deck`} aria-label="Pitch deck and enquiries">
            <div className={styles.contactColumn}>
              <h3 id={`${project.slug}-deck-title`} className={styles.sectionLabel}>PITCH DECK</h3>
              <p>Open the full <em className={styles.filmTitle}>{project.title}</em> presentation or save a copy for review.</p>
              <div className={styles.deckActions}>
                <a className={styles.primaryAction} href={project.pitchDeck} target="_blank" rel="noopener noreferrer">
                  VIEW PITCH DECK <ArrowUpRight aria-hidden="true" />
                </a>
                <a className={styles.secondaryAction} href={project.pitchDeck} download="catching-a-thief-pitch-deck.pdf">
                  DOWNLOAD PITCH DECK <Download aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className={styles.contactColumn}>
              <h3 className={styles.sectionLabel}>ENQUIRIES</h3>
              <p>For financing, distribution and production partnership enquiries, contact OAE.</p>
              <a className={styles.emailLink} href="mailto:awele@onuoraenterprises.com?subject=Catching%20A%20Thief%20Film%20Slate%20Enquiry">
                <Mail aria-hidden="true" /> awele@onuoraenterprises.com
              </a>
            </div>
          </section>
        </article>
      ))}

      <footer className={styles.footer}>
        <span>© OAE 2026</span>
      </footer>
    </main>
  );
}
