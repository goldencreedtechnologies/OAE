'use client';

import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowLeft, ArrowUpRight, Menu, Volume2, VolumeX, X } from 'lucide-react';
import { projects, team } from '@/data/site';
import { type ReelKey, videos } from '@/data/videos';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

type Chapter = 'home' | 'film' | 'events' | 'world' | 'about' | 'contact';
const nav: { label: string; value: Chapter }[] = [
  { label: 'FILM', value: 'film' }, { label: 'EVENTS', value: 'events' }, { label: 'OUR WORLD', value: 'world' },
  { label: 'ABOUT', value: 'about' }, { label: 'CONTACT', value: 'contact' },
];

function Media({ reel, active }: { reel: ReelKey; active: boolean }) {
  const media = videos[reel];
  return <div className={`media media-${reel} ${active ? 'is-active' : ''}`} aria-hidden={!active}>
    {media.src ? <video autoPlay={active} muted loop playsInline preload={active ? 'auto' : 'none'} poster={media.poster}><source src={media.src} /></video> : <img src={media.poster} alt="" />}
  </div>;
}

export default function Home() {
  const [chapter, setChapter] = useState<Chapter>('home');
  const [reel, setReel] = useState<ReelKey>('superTrailer');
  const [menuOpen, setMenuOpen] = useState(false);
  const [muted, setMuted] = useState(true);
  const [intro, setIntro] = useState(true);
  const [formReviewed, setFormReviewed] = useState(false);
  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', closeMenu);
    return () => window.removeEventListener('keydown', closeMenu);
  }, []);
  useEffect(() => { const id = window.setTimeout(() => setIntro(false), 1150); return () => window.clearTimeout(id); }, []);
  const enter = (next: Chapter) => { setChapter(next); setMenuOpen(false); setReel(next === 'events' ? 'events' : next === 'film' ? 'documentary' : 'superTrailer'); };

  return <main className={`experience chapter-${chapter}`}>
    <div className={`intro-curtain ${intro ? '' : 'gone'}`}><img className="intro-logo" src="/images/oae-logo.jpeg" alt="Onuora Abuah Enterprises" /></div>
    <Media reel="superTrailer" active={reel === 'superTrailer'} /><Media reel="documentary" active={reel === 'documentary'} />
    <Media reel="narrative" active={reel === 'narrative'} /><Media reel="events" active={reel === 'events'} />
    <div className="wash" /><div className="grain" />
    <header className="site-header">
      <button className="wordmark" onClick={() => enter('home')} aria-label="OAE home"><img className="company-logo" src="/images/oae-logo.jpeg" alt="Onuora Abuah Enterprises" /></button>
      <nav aria-label="Primary navigation">{nav.map((item) => <button key={item.value} className={chapter === item.value ? 'active' : ''} onClick={() => enter(item.value)}>{item.label}</button>)}</nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} inert={!menuOpen} aria-label="Mobile navigation">{nav.map((item, i) => <button key={item.value} onClick={() => enter(item.value)}><small>0{i + 1}</small>{item.label}</button>)}</div>

    <section className={`chapter home ${chapter === 'home' ? 'active' : ''}`} aria-hidden={chapter !== 'home'}>
      <div className="hero-copy"><p className="eyebrow">Independent moving image / Lagos + the world</p><h1>FILM.<br />CULTURE.<br /><em>EXPERIENCES.</em></h1></div>
      <div className="home-bottom"><p>Stories with a pulse.<br />Images that stay.</p><button onClick={() => enter('film')}>ENTER OUR WORLD <ArrowDownRight /></button></div>
    </section>

    <section className={`chapter film ${chapter === 'film' ? 'active' : ''}`} aria-hidden={chapter !== 'film'}>
      <button className="back" onClick={() => enter('home')}><ArrowLeft /> BACK</button><p className="chapter-no">01 / FILM</p>
      <div className="film-options">
        <button className={reel === 'documentary' ? 'selected' : ''} onClick={() => setReel('documentary')} onMouseEnter={() => setReel('documentary')}><small>01</small><span>DOCUMENTARIES</span><ArrowUpRight /></button>
        <button className={reel === 'narrative' ? 'selected' : ''} onClick={() => setReel('narrative')} onMouseEnter={() => setReel('narrative')}><small>02</small><span>FEATURE FILMS<br /><i>+</i> SHORT FILMS</span><ArrowUpRight /></button>
      </div><p className="reel-label">{videos[reel].label} / Media placeholder</p>
    </section>

    <section className={`chapter events ${chapter === 'events' ? 'active' : ''}`} aria-hidden={chapter !== 'events'}>
      <button className="back" onClick={() => enter('home')}><ArrowLeft /> BACK</button><p className="chapter-no">02 / EVENTS</p>
      <div className="event-title"><p>WE CREATE</p><h2>ROOMS<br />THAT <em>MOVE.</em></h2></div>
      <p className="event-list">Film festivals · Cultural experiences · Dialogues<br />Screenings · Conferences · Live experiences</p>
    </section>

    <section className={`chapter world ${chapter === 'world' ? 'active' : ''}`} aria-hidden={chapter !== 'world'}>
      <button className="back" onClick={() => enter('home')}><ArrowLeft /> BACK</button><p className="chapter-no">03 / OUR WORLD</p>
      <div className="world-grid">{projects.map((project, i) => <a href={project.href} key={project.name} target={project.href.startsWith('https://') ? '_blank' : undefined} rel={project.href.startsWith('https://') ? 'noopener noreferrer' : undefined}><div className={`project-image ${project.image ? 'authentic-preview' : ''}`} style={{ backgroundImage: project.image ? `url(${project.image})` : undefined, backgroundPosition: project.image ? 'center 16%' : `${25 + i * 28}% center` }} /><small>0{i + 1} / {project.kicker}</small><h2>{project.name}</h2><p>{project.description}</p><ArrowUpRight /></a>)}</div>
    </section>

    <section className={`chapter about ${chapter === 'about' ? 'active' : ''}`} aria-hidden={chapter !== 'about'}>
      <button className="back" onClick={() => enter('home')}><ArrowLeft /> BACK</button><p className="chapter-no">04 / ABOUT</p>
      <div className="about-intro"><p>WHO WE ARE</p><h2>WE MAKE WORK AT THE INTERSECTION OF <em>FILM, CULTURE, STORYTELLING</em> AND LIVE EXPERIENCE.</h2></div>
      <div className="team">{team.map((person, i) => <article key={person.name}><span>0{i + 1}</span><div className="portrait"><b>{person.name.charAt(0)}</b></div><h3>{person.name}</h3><p>{person.role}</p><a href={`mailto:${person.email}`}>{person.email}</a></article>)}</div>
    </section>

    <section className={`chapter contact ${chapter === 'contact' ? 'active' : ''}`} id="contact" aria-hidden={chapter !== 'contact'}>
      <button className="back" onClick={() => enter('home')}><ArrowLeft /> BACK</button><p className="chapter-no">05 / CONTACT</p>
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
    <footer><span>© OAE / 2026</span><button onClick={() => setMuted(!muted)} aria-label={muted ? 'Unmute' : 'Mute'}>{muted ? <VolumeX /> : <Volume2 />} {muted ? 'SOUND OFF' : 'SOUND ON'}</button><span>LAGOS, NIGERIA</span></footer>
  </main>;
}
