'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import { filmProjects, legalDocuments, logos, projects, team } from '@/data/site';
import { type ReelKey, videos } from '@/data/videos';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

type Chapter = 'home' | 'film' | 'about' | 'contact';
type LegalPage = keyof typeof legalDocuments;
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
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [preview, setPreview] = useState<string | null>(null);
  const [legalPage, setLegalPage] = useState<LegalPage | null>(null);
  const gallery = useRef<HTMLDivElement>(null);
  const scrollGallery = (direction: number) => {
    const track = gallery.current;
    if (track) track.scrollBy({ left: direction * track.clientWidth * .75, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => { if (event.key === 'Escape') { setMenuOpen(false); setPreview(null); setLegalPage(null); } };
    window.addEventListener('keydown', closeMenu);
    return () => window.removeEventListener('keydown', closeMenu);
  }, []);
  useEffect(() => { const id = window.setTimeout(() => setIntro(false), 1150); return () => window.clearTimeout(id); }, []);
  const enter = (next: Chapter) => { setChapter(next); setMenuOpen(false); setFilmCategory(null); setPreview(null); setLegalPage(null); setReel(next === 'film' ? 'documentary' : 'superTrailer'); };
  const openFilm = (category: 'documentary' | 'narrative') => { setFilmCategory(category); setPreview(null); setReel(category); };

  return <main className={`experience chapter-${chapter}`}>
    <div className={`intro-curtain ${intro ? '' : 'gone'}`}><img className="intro-logo" src={logos.welcome} alt="OAE" /></div>
    <Media reel="superTrailer" active={reel === 'superTrailer'} playVideo={chapter === 'home'} />
    <Media reel="documentary" active={chapter === 'film'} />
    <div className="wash" /><div className="grain" />
    <header className="site-header">
      <button className="wordmark" onClick={() => enter('home')} aria-label="OAE home"><img className="company-logo" src={logos.navigation} alt="OAE" /></button>
      <nav aria-label="Primary navigation">{nav.map((item) => <button key={item.value} className={chapter === item.value ? 'active' : ''} onClick={() => enter(item.value)}>{item.label}</button>)}</nav>
      <button className="menu-toggle" onClick={() => { setMenuOpen(!menuOpen); setPreview(null); }} aria-expanded={menuOpen} aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} inert={!menuOpen} aria-label="Mobile navigation">{nav.map((item) => <button key={item.value} onClick={() => enter(item.value)}>{item.label}</button>)}</div>

    <section className={`chapter home ${chapter === 'home' ? 'active' : ''}`} aria-hidden={chapter !== 'home'}>
      <div className="hero-copy"><h1>FILM.<br />CULTURE.<br /><em>EXPERIENCES.</em></h1></div>
      <div className="home-bottom"><p>Stories with a pulse,<br />images that stay.</p><button onClick={() => enter('film')}>ENTER <ArrowDownRight /></button></div>
    </section>

    <section className={`chapter film ${filmCategory ? 'has-gallery' : ''} ${chapter === 'film' ? 'active' : ''}`} aria-hidden={chapter !== 'film'}>
      <button className="back" onClick={() => { setPreview(null); if (filmCategory) { setFilmCategory(null); setReel('documentary'); } else enter('home'); }}><ArrowLeft /> BACK</button>
      {filmCategory ? <div className="film-detail" key={filmCategory}>
        <p className="production-line">{filmCategory === 'documentary' ? 'DOCUMENTARY' : 'NARRATIVE'} PRODUCTION — FROM DEVELOPMENT TO FINAL CUT.</p>
        <h2>{filmCategory === 'documentary' ? 'DOCUMENTARIES' : <>FEATURE FILMS<br /><em>+</em> SHORT FILMS</>}</h2>
        <p className="film-capability">{filmCategory === 'documentary' ? 'Compelling documentaries, crafted with you from development through final cut.' : 'Bold narrative films, brought from concept to screen with you.'}</p>
        <div className="film-proof project-strip" ref={gallery} tabIndex={0} role="region" aria-roledescription="carousel" aria-label={`${filmCategory === 'documentary' ? 'Documentary' : 'Narrative'} projects — scroll horizontally`} onScroll={() => setPreview(null)} onKeyDown={(event) => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); scrollGallery(event.key === 'ArrowRight' ? 1 : -1); } }}>{filmProjects[filmCategory].map((project) => <article key={project.title} onPointerEnter={(event) => { if (event.pointerType === 'mouse' && project.previewUrl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPreview(project.title); }} onPointerLeave={(event) => { if (event.pointerType === 'mouse') setPreview(null); }}>
          <button className="project-poster" disabled={!project.previewUrl} aria-label={`${preview === project.title ? 'Stop' : 'Play'} preview: ${project.title}`} aria-pressed={preview === project.title} onClick={() => setPreview(preview === project.title ? null : project.title)}>
            {project.thumbnail ? <Image src={project.thumbnail} alt={`${project.title} poster`} width={1000} height={800} sizes="(max-width: 600px) 80vw, 36vw" loading="lazy" /> : <span className="poster-placeholder" aria-hidden="true" />}
            {preview === project.title && chapter === 'film' && project.previewUrl && <iframe src={project.previewUrl} title={`${project.title} preview`} allow="autoplay; fullscreen; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" tabIndex={-1} />}
          </button>
        </article>)}</div>
        <div className="film-actions"><button className="project-cta" onClick={() => enter('contact')}>START PROJECT <ArrowUpRight /></button><div className="gallery-controls"><button onClick={() => scrollGallery(-1)} aria-label="Previous projects"><ArrowLeft /></button><button onClick={() => scrollGallery(1)} aria-label="Next projects"><ArrowRight /></button></div></div>
      </div> : <>
        <p className="reel-label">FILM PRODUCTION — FROM DEVELOPMENT TO FINAL CUT.</p>
        <div className="film-options">
          <button className={reel === 'documentary' ? 'selected' : ''} onClick={() => openFilm('documentary')} onMouseEnter={() => setReel('documentary')}><span>DOCUMENTARIES</span><ArrowUpRight /></button>
          <button className={reel === 'narrative' ? 'selected' : ''} onClick={() => openFilm('narrative')} onMouseEnter={() => setReel('narrative')}><span>FEATURE FILMS<br /><i>+</i> SHORT FILMS</span><ArrowUpRight /></button>
        </div>
      </>}
    </section>

    <section className={`chapter about ${chapter === 'about' ? 'active' : ''}`} aria-hidden={chapter !== 'about'}>
      <button className="back" onClick={() => enter('home')}><ArrowLeft /> BACK</button>
      <div className="team">{team.map((person) => <article className="team-card" key={person.name}><div className="portrait">{person.image ? <Image src={person.image} alt={person.name} width={750} height={600} sizes="(max-width: 850px) 90vw, 31vw" /> : <b>{person.name.charAt(0)}</b>}<div className="team-card-copy"><h3>{person.name}</h3>{person.role && <p>{person.role}</p>}{person.email && <a href={`mailto:${person.email}`}>{person.email}</a>}</div></div></article>)}</div>
      <section className="about-events events" aria-label="Events">
      <Media reel="events" active={chapter === 'about'} /><div className="wash" />
      <div className="event-title"><p>EVENT PRODUCTION</p><h2>EXPERIENCES.<br /><em>LASTING MEMORIES.</em></h2><p className="event-statement">We produce experiences with the precision, professionalism and expertise to turn every event into a lasting memory.</p></div>
      <ul className="event-services">{['FILM FESTIVALS', 'CULTURAL EXPERIENCES', 'DIALOGUES', 'SCREENINGS', 'CONFERENCES', 'LIVE EXPERIENCES'].map((service) => <li key={service}>{service}</li>)}</ul>
      </section>
      <section className="about-world" aria-labelledby="world-title"><h2 id="world-title">ASSOCIATED WORLDS</h2>
      <div className="associated-logos">{projects.map((project) => <a href={project.href} key={project.name} target="_blank" rel="noopener noreferrer"><span>{project.logo && <img src={project.logo} alt={`${project.name} logo`} />}</span><strong>{project.name}</strong></a>)}</div>
      </section>
    </section>

    <section className={`chapter contact ${chapter === 'contact' ? 'active' : ''}`} id="contact" aria-hidden={chapter !== 'contact'}>
      <button className="back" onClick={() => enter('home')}><ArrowLeft /> BACK</button>
      <div className="contact-copy"><p>START A CONVERSATION</p><h2>LET'S MAKE<br /><em>SOMETHING.</em></h2><address className="contact-details"><a className="contact-detail" href="https://www.google.com/maps/search/?api=1&query=22%20GLOVER%20RD%2C%20IKOYI%2C%20LAGOS" target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" /><span>22 GLOVER RD, IKOYI, LAGOS<br />P.O. BOX 101233, LAGOS</span></a><div className="contact-detail"><Phone aria-hidden="true" /><div className="contact-phone-list"><span><a href="tel:+447519073560">+44 7519 0735 60</a><a className="whatsapp-link" href="https://wa.me/447519073560" target="_blank" rel="noopener noreferrer">WHATSAPP</a></span><span><a href="tel:09029786545">090 297 8654 5</a><a className="whatsapp-link" href="https://wa.me/2349029786545" target="_blank" rel="noopener noreferrer">WHATSAPP</a></span></div></div></address></div>
      <form className="contact-form" aria-busy={formStatus === 'sending'} onChange={() => { if (formStatus !== 'sending') setFormStatus('idle'); }} onSubmit={async (event) => { event.preventDefault(); if (formStatus === 'sending') return; const form = event.currentTarget; const data = new FormData(form); setFormStatus('sending'); try { const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: data.get('name'), email: data.get('email'), company: data.get('company'), message: data.get('message') }) }); if (!response.ok) throw new Error('Unable to send'); form.reset(); setFormStatus('success'); } catch { setFormStatus('error'); } }} aria-describedby="form-note">
        <div className="form-row">
          <label htmlFor="contact-name">Name<Input id="contact-name" name="name" autoComplete="name" placeholder="Your name" required maxLength={100} /></label>
          <label htmlFor="contact-email">Email<Input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
        </div>
        <label htmlFor="contact-company">Company <span>(optional)</span><Input id="contact-company" name="company" autoComplete="organization" placeholder="Company or organisation" maxLength={100} /></label>
        <label htmlFor="contact-message">Tell us about your project<Textarea id="contact-message" name="message" placeholder="The story, the idea, the experience..." required minLength={10} maxLength={3000} rows={4} /></label>
        <Button type="submit" className="form-submit" disabled={formStatus === 'sending'}>{formStatus === 'sending' ? 'SENDING…' : 'SEND MESSAGE'} <ArrowUpRight /></Button>
        <p id="form-note" className="form-note">Your message will be sent directly to OAE.</p>
        <div aria-live="polite">{formStatus === 'success' && <p className="form-status" role="status">Thank you. Your message has been sent.</p>}{formStatus === 'error' && <p className="form-status form-error" role="alert">We couldn't send your message. Please try again.</p>}</div>
      </form>
    </section>
    {legalPage && <section className="legal-panel" role="dialog" aria-modal="true" aria-labelledby="legal-title"><div className="legal-document"><button className="legal-close" onClick={() => setLegalPage(null)}><X /> CLOSE</button><h2 id="legal-title">{legalDocuments[legalPage].title}</h2>{legalDocuments[legalPage].paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>}
    <footer className="site-footer"><span>OAE 2026</span><div className="legal-links" aria-label="Legal information">{(Object.keys(legalDocuments) as LegalPage[]).map((key) => <button key={key} onClick={() => setLegalPage(key)}>{legalDocuments[key].title}</button>)}</div></footer>
  </main>;
}
