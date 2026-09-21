'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { awards, filmProjects, logos, projects, team } from '@/data/site';
import { type ReelKey, videos } from '@/data/videos';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

type Chapter = 'home' | 'film' | 'about' | 'contact';
const nav: { label: string; value: Chapter }[] = [
  { label: 'FILM', value: 'film' },
  { label: 'ABOUT', value: 'about' }, { label: 'CONTACT', value: 'contact' },
];

function Media({ reel, active, playVideo = true }: { reel: ReelKey; active: boolean; playVideo?: boolean }) {
  const media = videos[reel];
  const container = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (container.current) observer.observe(container.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={container} className={`media media-${reel} ${active ? 'is-active' : ''}`} aria-hidden="true">
    {media.src && active && playVideo && visible ? <video autoPlay muted loop playsInline preload="metadata" poster={media.poster}><source src={media.src} type="video/mp4" /></video> : <img src={media.poster} alt="" />}
  </div>;
}

export default function Home() {
  const [chapter, setChapter] = useState<Chapter>('home');
  const [reel, setReel] = useState<ReelKey>('superTrailer');
  const [menuOpen, setMenuOpen] = useState(false);
  const [filmCategory, setFilmCategory] = useState<'documentary' | 'narrative' | null>(null);
  const [intro, setIntro] = useState(true);
  const [formReviewed, setFormReviewed] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const gallery = useRef<HTMLDivElement>(null);
  const scrollGallery = (direction: number) => {
    const track = gallery.current;
    if (track) track.scrollBy({ left: direction * track.clientWidth * .75, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => { if (event.key === 'Escape') { setMenuOpen(false); setPreview(null); } };
    window.addEventListener('keydown', closeMenu);
    return () => window.removeEventListener('keydown', closeMenu);
  }, []);
  useEffect(() => { const id = window.setTimeout(() => setIntro(false), 1150); return () => window.clearTimeout(id); }, []);
  const enter = (next: Chapter) => { setChapter(next); setMenuOpen(false); setFilmCategory(null); setPreview(null); setReel(next === 'film' ? 'documentary' : 'superTrailer'); };
  const openFilm = (category: 'documentary' | 'narrative') => { setFilmCategory(category); setPreview(null); setReel(category); };

  return <main className={`experience chapter-${chapter}`}>
    <div className={`intro-curtain ${intro ? '' : 'gone'}`}><img className="intro-logo" src={logos.welcome} alt="OAE" /></div>
    <Media reel="superTrailer" active={reel === 'superTrailer'} playVideo={chapter === 'home'} /><Media reel="documentary" active={reel === 'documentary'} />
    <Media reel="narrative" active={reel === 'narrative'} />
    <div className="wash" /><div className="grain" />
    <header className="site-header">
      <button className="wordmark" onClick={() => enter('home')} aria-label="OAE home"><img className="company-logo" src={logos.navigation} alt="OAE" /></button>
      <nav aria-label="Primary navigation">{nav.map((item) => <button key={item.value} className={chapter === item.value ? 'active' : ''} onClick={() => enter(item.value)}>{item.label}</button>)}</nav>
      <button className="menu-toggle" onClick={() => { setMenuOpen(!menuOpen); setPreview(null); }} aria-expanded={menuOpen} aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} inert={!menuOpen} aria-label="Mobile navigation">{nav.map((item, i) => <button key={item.value} onClick={() => enter(item.value)}><small>0{i + 1}</small>{item.label}</button>)}</div>

    <section className={`chapter home ${chapter === 'home' ? 'active' : ''}`} aria-hidden={chapter !== 'home'}>
      <div className="hero-copy"><h1>FILM.<br />CULTURE.<br /><em>EXPERIENCES.</em></h1></div>
      <div className="home-bottom"><p>Stories with a pulse,<br />images that stay.</p><button onClick={() => enter('film')}>ENTER <ArrowDownRight /></button></div>
    </section>

    <section className={`chapter film ${filmCategory ? 'has-gallery' : ''} ${chapter === 'film' ? 'active' : ''}`} aria-hidden={chapter !== 'film'}>
      <button className="back" onClick={() => { setPreview(null); if (filmCategory) { setFilmCategory(null); setReel('documentary'); } else enter('home'); }}><ArrowLeft /> BACK</button><p className="chapter-no">01 / FILM</p>
      {filmCategory ? <div className="film-detail" key={filmCategory}>
        <p className="production-line">{filmCategory === 'documentary' ? 'DOCUMENTARY' : 'NARRATIVE'} PRODUCTION — FROM DEVELOPMENT TO FINAL CUT.</p>
        <h2>{filmCategory === 'documentary' ? 'DOCUMENTARIES' : <>FEATURE FILMS<br /><em>+</em> SHORT FILMS</>}</h2>
        <p className="film-capability">{filmCategory === 'documentary' ? 'Compelling documentaries, crafted with you from development through final cut.' : 'Bold narrative films, brought from concept to screen with you.'}</p>
        <div className="film-proof project-strip" ref={gallery} tabIndex={0} role="region" aria-roledescription="carousel" aria-label={`${filmCategory === 'documentary' ? 'Documentary' : 'Narrative'} projects — scroll horizontally`} onScroll={() => setPreview(null)} onKeyDown={(event) => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); scrollGallery(event.key === 'ArrowRight' ? 1 : -1); } }}>{filmProjects[filmCategory].map((project) => <article key={project.title} onPointerEnter={(event) => { if (event.pointerType === 'mouse' && project.previewUrl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPreview(project.title); }} onPointerLeave={(event) => { if (event.pointerType === 'mouse') setPreview(null); }}>
          <button className="project-poster" disabled={!project.previewUrl} aria-label={`${preview === project.title ? 'Stop' : 'Play'} preview: ${project.title}`} aria-pressed={preview === project.title} onClick={() => setPreview(preview === project.title ? null : project.title)}>
            {project.thumbnail ? <Image src={project.thumbnail} alt={`${project.title} poster`} width={960} height={540} sizes="(max-width: 600px) 76vw, 32vw" /> : <span className="poster-placeholder"><span>{project.title}</span><small>POSTER FORTHCOMING</small></span>}
            {preview === project.title && chapter === 'film' && project.previewUrl && <iframe src={project.previewUrl} title={`${project.title} preview`} allow="autoplay; fullscreen; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" tabIndex={-1} />}
            <span className="preview-hint">{project.previewUrl ? preview === project.title ? 'STOP PREVIEW' : 'PLAY PREVIEW' : 'PREVIEW FORTHCOMING'}</span>
          </button>
          <div className="project-caption"><h3>{project.title}</h3><p>{project.releaseDate || 'Release date forthcoming'}</p>{project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer">WATCH FILM <ArrowUpRight /></a> : <span className="project-link-pending">Film link forthcoming</span>}</div>
        </article>)}</div>
        <div className="film-actions"><button className="project-cta" onClick={() => enter('contact')}>START PROJECT <ArrowUpRight /></button><div className="gallery-controls"><button onClick={() => scrollGallery(-1)} aria-label="Previous projects"><ArrowLeft /></button><button onClick={() => scrollGallery(1)} aria-label="Next projects"><ArrowRight /></button></div></div>
      </div> : <>
        <p className="reel-label">FILM PRODUCTION — FROM DEVELOPMENT TO FINAL CUT.</p>
        <div className="film-options">
          <button className={reel === 'documentary' ? 'selected' : ''} onClick={() => openFilm('documentary')} onMouseEnter={() => setReel('documentary')}><small>01</small><span>DOCUMENTARIES</span><ArrowUpRight /></button>
          <button className={reel === 'narrative' ? 'selected' : ''} onClick={() => openFilm('narrative')} onMouseEnter={() => setReel('narrative')}><small>02</small><span>FEATURE FILMS<br /><i>+</i> SHORT FILMS</span><ArrowUpRight /></button>
        </div>
      </>}
    </section>

    <section className={`chapter about ${chapter === 'about' ? 'active' : ''}`} aria-hidden={chapter !== 'about'}>
      <button className="back" onClick={() => enter('home')}><ArrowLeft /> BACK</button><p className="chapter-no">02 / ABOUT</p>
      <div className="team">{team.map((person, i) => <article key={person.name}><span>{i === 0 ? 'FOUNDER' : 'TEAM'}</span><div className="portrait">{person.image ? <Image src={person.image} alt={person.name} width={600} height={600} sizes="(max-width: 850px) 90vw, 30vw" /> : <b>{person.name.charAt(0)}</b>}</div><h3>{person.name}</h3><p>{person.role}</p><a href={`mailto:${person.email}`}>{person.email}</a></article>)}</div>
      <section className="about-events events" aria-label="Events">
      <Media reel="events" active={chapter === 'about'} /><div className="wash" />
      <div className="event-title"><p>EVENT PRODUCTION</p><h2>EXPERIENCES.<br /><em>LASTING MEMORIES.</em></h2><p className="event-statement">We produce experiences with the precision, professionalism and expertise to turn every event into a lasting memory.</p></div>
      <ul className="event-services">{['FILM FESTIVALS', 'CULTURAL EXPERIENCES', 'DIALOGUES', 'SCREENINGS', 'CONFERENCES', 'LIVE EXPERIENCES'].map((service) => <li key={service}>{service}</li>)}</ul>
      </section>
      <section className="about-awards" aria-labelledby="awards-title"><h2 id="awards-title">AWARDS / RECOGNITION</h2><div className="awards-grid">{awards.length ? awards.map((award) => <div key={award.name}>{award.logo && <img src={award.logo} alt="" />}<h3>{award.name}</h3><p>{award.details}</p></div>) : <div className="award-placeholder">Recognition details forthcoming</div>}</div></section>
      <section className="about-world" aria-labelledby="world-title"><h2 id="world-title">ASSOCIATED WORLDS</h2>
      <div className="world-grid">{projects.map((project, i) => <a href={project.href} key={project.name} target={project.href.startsWith('https://') ? '_blank' : undefined} rel={project.href.startsWith('https://') ? 'noopener noreferrer' : undefined}><div className={`project-image ${project.image ? 'authentic-preview' : ''}`} style={{ backgroundImage: project.image ? `url(${project.image})` : undefined, backgroundPosition: project.image ? 'center 16%' : `${25 + i * 28}% center` }} /><small>0{i + 1} / {project.kicker}</small><h2>{project.name}</h2><p>{project.description}</p><ArrowUpRight /></a>)}</div>
      </section>
      <div className="about-footer" aria-label="Associated brand logos">{projects.map((project) => <a key={project.name} href={project.href} target="_blank" rel="noopener noreferrer"><span className="brand-logo-placeholder">{project.logo ? <img src={project.logo} alt={`${project.name} logo`} /> : <span>LOGO<br />FORTHCOMING</span>}</span><span>{project.name}</span></a>)}</div>
    </section>

    <section className={`chapter contact ${chapter === 'contact' ? 'active' : ''}`} id="contact" aria-hidden={chapter !== 'contact'}>
      <button className="back" onClick={() => enter('home')}><ArrowLeft /> BACK</button><p className="chapter-no">03 / CONTACT</p>
      <div className="contact-copy"><p>START A CONVERSATION</p><h2>LET'S MAKE<br /><em>SOMETHING.</em></h2></div>
      <form className="contact-form" onChange={() => setFormReviewed(false)} onSubmit={(event) => { event.preventDefault(); setFormReviewed(true); }} aria-describedby="form-note">
        <div className="form-row">
          <label htmlFor="contact-name">Name<Input id="contact-name" name="name" autoComplete="name" placeholder="Your name" required maxLength={100} /></label>
          <label htmlFor="contact-email">Email<Input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
        </div>
        <label htmlFor="contact-company">Company <span>(optional)</span><Input id="contact-company" name="company" autoComplete="organization" placeholder="Company or organisation" maxLength={100} /></label>
        <label htmlFor="contact-message">Tell us about your project<Textarea id="contact-message" name="message" placeholder="The story, the idea, the experience..." required minLength={10} maxLength={3000} rows={4} /></label>
        <Button type="submit" className="form-submit">REVIEW MESSAGE <ArrowUpRight /></Button>
        <p id="form-note" className="form-note">Design prototype — this form does not send messages yet.</p>
        {formReviewed && <p className="form-status" role="status">Your message is ready to review. Nothing has been sent or stored.</p>}
      </form>
    </section>
    <footer className="site-footer"><span>OAE 2026</span><div className="legal-links" aria-label="Legal information forthcoming">{['PRIVACY', 'TERMS', 'ACCESSIBILITY', 'LEGAL'].map((label) => <span key={label} role="link" aria-disabled="true" title="Coming soon">{label}</span>)}</div></footer>
  </main>;
}
