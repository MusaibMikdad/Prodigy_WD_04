import { useEffect, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'motion/react';
import { ArrowUpRight, ArrowDown, Copy, Check, Moon, Sun, X, Menu, FileText } from 'lucide-react';
import { PROFILE, STACK_MARQUEE, PROJECTS, PUBLICATIONS, SKILLS, JOURNEY } from './data.js';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'research', label: 'Research' },
  { id: 'academic', label: 'Hardware' },
];

const LINK_ORDER = ['live', 'ieee', 'springer', 'github', 'gdrive'];

const LINK_LABELS = {
  live: 'Live site',
  github: 'Source code',
  ieee: 'Read on IEEE',
  springer: 'Read on Springer',
  gdrive: 'Project doc',
};

const ease = [0.22, 1, 0.36, 1];

/* ---------- small helpers ---------- */

function readStoredTheme() {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = readStoredTheme();
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable: theme still works for this visit */
    }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))];
}

function useDhakaTime() {
  const fmt = () =>
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Dhaka',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Reveal({ children, delay = 0, className, as = 'div' }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </Tag>
  );
}

function SectionHead({ index, label, title, accent }) {
  return (
    <div className="section-head">
      <span className="mono eyebrow">
        ({index}) {label}
      </span>
      <Reveal as="h2" className="section-title">
        {title} {accent && <em className="serif">{accent}</em>}
      </Reveal>
    </div>
  );
}

/* Big name that slides up letter by letter on load */
function SplitWord({ word, delay = 0, className }) {
  const reduce = useReducedMotion();
  return (
    <span className={className} aria-label={word}>
      {word.split('').map((ch, i) => (
        <span className="char-mask" key={i} aria-hidden="true">
          <motion.span
            className="char"
            initial={reduce ? false : { y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease, delay: delay + i * 0.045 }}
          >
            {ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ---------- sections ---------- */

function Nav({ theme, toggleTheme, active }) {
  const [open, setOpen] = useState(false);
  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <motion.header
        className="nav"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.2 }}
      >
        <button className="nav-logo" onClick={() => go('top')} aria-label="Back to top">
          M<span className="accent-dot">.</span>
        </button>
        <nav className="nav-links" aria-label="Sections">
          {NAV.map((n) => (
            <button
              key={n.id}
              className={`nav-link ${active === n.id ? 'is-active' : ''}`}
              onClick={() => go(n.id)}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle colour theme">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a className="btn btn-ink nav-cta" href={`mailto:${PROFILE.email}`}>
            Let’s talk
          </a>
          <button className="icon-btn nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease }}
          >
            {NAV.map((n, i) => (
              <button key={n.id} className="mobile-link" onClick={() => go(n.id)}>
                <span className="mono">0{i + 1}</span>
                {n.label}
              </button>
            ))}
            <a className="btn btn-accent" href={encodeURI(PROFILE.cv)} target="_blank" rel="noreferrer">
              <FileText size={15} /> Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const time = useDhakaTime();
  return (
    <section className="hero" id="top">
      <div className="hero-meta mono">
        <span>
          <span className="live-dot" /> Available for work &amp; research
        </span>
        <span className="hide-sm">{PROFILE.location}</span>
        <span>Dhaka {time}</span>
      </div>

      <h1 className="hero-name">
        <SplitWord word={PROFILE.first.toUpperCase()} className="hero-line" />
        <span className="hero-mid">
          <motion.span
            className="hero-intro"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
          >
            <span className="hero-role">
              Web &amp; <em className="serif">AI</em> Engineer
            </span>
            {PROFILE.intro}
          </motion.span>
          <motion.span
            className="hero-portrait"
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
          >
            <img src={PROFILE.portrait} alt={PROFILE.full} />
          </motion.span>
          <motion.span
            className="hero-ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.85 }}
          >
            <a className="btn btn-accent" href="#work">
              See my work <ArrowDown size={15} />
            </a>
            <a className="btn btn-ghost" href={encodeURI(PROFILE.cv)} target="_blank" rel="noreferrer">
              Download CV <ArrowUpRight size={15} />
            </a>
          </motion.span>
        </span>
        <SplitWord word={PROFILE.last.toUpperCase()} className="hero-line hero-line-right" delay={0.15} />
      </h1>
    </section>
  );
}

function Marquee() {
  const items = [...STACK_MARQUEE, ...STACK_MARQUEE];
  return (
    <div className="marquee" aria-label="Technologies I use">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="marquee-item">
            {t} <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const time = useDhakaTime();
  return (
    <section className="section" id="about">
      <SectionHead index="01" label="About" title="Models that see," accent="apps that ship." />
      <div className="bento">
        <Reveal className="tile tile-bio">
          <p className="bio-lead">
            I’m Musaib, a computer science graduate from BRAC University who works where machine learning
            meets the web.
          </p>
          <p className="muted">
            My research covers detecting infrastructure in drone imagery and reading crisis signals in social
            media. On the product side I build React and Node applications that are fast, responsive and
            pleasant to use. I like taking a model out of a notebook and putting it in front of real users.
          </p>
        </Reveal>
        <Reveal className="tile tile-photo" delay={0.08}>
          <img src={PROFILE.portraitAlt} alt="Musaib outdoors at night" />
        </Reveal>
        <Reveal className="tile tile-stat tile-accent" delay={0.12}>
          <span className="stat-num">2</span>
          <span className="stat-label">Peer-reviewed papers · IEEE &amp; Springer Nature</span>
        </Reveal>
        <Reveal className="tile tile-stat" delay={0.16}>
          <span className="stat-num">10+</span>
          <span className="stat-label">Projects shipped across web, ML and hardware</span>
        </Reveal>
        <Reveal className="tile tile-now" delay={0.2}>
          <span className="mono eyebrow">Currently</span>
          <p>Open to full-stack and ML engineering roles, and research collaborations.</p>
          <span className="mono small muted">Dhaka · {time} GMT+6</span>
        </Reveal>
        <Reveal className="tile tile-skills" delay={0.24}>
          {SKILLS.map((s) => (
            <div key={s.group} className="skill-group">
              <span className="mono eyebrow">{s.group}</span>
              <div className="chips">
                {s.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Work({ onOpen }) {
  const [filter, setFilter] = useState('all');
  const [hovered, setHovered] = useState(null);
  const listRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 28 });
  const sy = useSpring(y, { stiffness: 260, damping: 28 });

  const shown = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.filterTag === filter);

  const onMove = (e) => {
    const r = listRef.current.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  return (
    <section className="section" id="work">
      <SectionHead index="02" label="Selected work" title="Things I’ve" accent="built." />
      <div className="filters" role="tablist" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            className={`filter ${filter === f.id ? 'is-active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
            <span className="filter-count">
              {f.id === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.filterTag === f.id).length}
            </span>
          </button>
        ))}
      </div>

      <div
        className="work-list"
        ref={listRef}
        onMouseMove={onMove}
        onMouseLeave={() => setHovered(null)}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {shown.map((p, i) => (
            <motion.button
              layout
              key={p.id}
              className="work-row"
              onMouseEnter={() => setHovered(p)}
              onClick={() => onOpen(p)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease }}
            >
              <span className="mono work-idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="work-thumb">
                <img src={p.image} alt="" loading="lazy" />
              </span>
              <span className="work-main">
                <span className="work-title">{p.title}</span>
                <span className="work-sub">{p.subtitle}</span>
              </span>
              <span className="mono work-cat">{p.category}</span>
              <span className="mono work-year">{p.year}</span>
              <span className="work-arrow">
                <ArrowUpRight size={20} />
              </span>
            </motion.button>
          ))}
        </AnimatePresence>

        <motion.div
          className="work-preview"
          style={{ x: sx, y: sy }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.25, ease }}
          aria-hidden="true"
        >
          {hovered && <img src={hovered.image} alt="" />}
        </motion.div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="section" id="research">
      <SectionHead index="03" label="Research" title="Published" accent="papers." />
      <div className="pubs">
        {PUBLICATIONS.map((p, i) => (
          <Reveal key={p.href} delay={i * 0.1}>
            <a className="pub" href={p.href} target="_blank" rel="noreferrer">
              <span className="pub-top">
                <span className="pub-venue">{p.venue}</span>
                <ArrowUpRight size={22} className="pub-arrow" />
              </span>
              <span className="pub-title">{p.title}</span>
              <span className="pub-note muted">{p.note}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="section" id="journey">
      <SectionHead index="04" label="Journey" title="Where I’ve" accent="been." />
      <ol className="journey">
        {JOURNEY.map((j, i) => (
          <Reveal as="li" key={j.what} className="journey-row" delay={i * 0.06}>
            <span className="mono journey-when">{j.when}</span>
            <span className="journey-what">{j.what}</span>
            <span className="journey-where muted">{j.where}</span>
            {j.note && <span className="journey-note muted">{j.note}</span>}
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ Name: form.name, Email: form.email, Message: form.message }),
      });
      const data = await res.json();
      if (data.success === true || data.success === 'true') {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section className="section contact" id="contact">
      <span className="mono eyebrow">(05) Contact</span>
      <Reveal as="h2" className="contact-title">
        Let’s build <em className="serif">something</em> together.
      </Reveal>

      <div className="contact-grid">
        <div className="contact-left">
          <button className="email-big" onClick={copy}>
            <span>{PROFILE.email}</span>
            <span className="email-icon">{copied ? <Check size={20} /> : <Copy size={20} />}</span>
          </button>
          <span className="mono small muted">{copied ? 'Copied to clipboard' : 'Click to copy'}</span>
          <div className="contact-lines">
            <a href={PROFILE.phoneHref}>{PROFILE.phone}</a>
            <span>{PROFILE.location}</span>
          </div>
          <div className="socials">
            {PROFILE.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social">
                {s.label} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <label>
            <span className="mono eyebrow">Name</span>
            <input name="name" required value={form.name} onChange={update} placeholder="Your name" />
          </label>
          <label>
            <span className="mono eyebrow">Email</span>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={update}
              placeholder="you@company.com"
            />
          </label>
          <label>
            <span className="mono eyebrow">Message</span>
            <textarea
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={update}
              placeholder="Tell me about the project or role"
            />
          </label>
          <button className="btn btn-accent btn-lg" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'} <ArrowUpRight size={16} />
          </button>
          {status === 'sent' && <p className="form-note ok">Thanks, your message is on its way.</p>}
          {status === 'error' && (
            <p className="form-note err">
              That didn’t send. Please email me directly at {PROFILE.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row mono small">
        <span>© {new Date().getFullYear()} {PROFILE.full}</span>
        <button className="link-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top ↑
        </button>
      </div>
      <div className="footer-word" aria-hidden="true">
        MIKDAD<span className="accent-dot">.</span>
      </div>
    </footer>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.article
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
          >
            <button className="icon-btn modal-close" onClick={onClose} aria-label="Close">
              <X size={16} />
            </button>
            <div className="modal-img">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="modal-body">
              <span className="mono eyebrow">
                {project.category} · {project.duration}
              </span>
              <h3 className="modal-title">{project.title}</h3>
              <div className="chips">
                {project.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              {project.description.map((d, i) => (
                <p key={i} className="muted">
                  {d}
                </p>
              ))}
              {project.links && (
                <div className="modal-links">
                  {LINK_ORDER.filter((k) => project.links[k]).map((k) => [k, project.links[k]]).map(([k, href], i) => (
                    <a
                      key={k}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn ${i === 0 ? 'btn-accent' : 'btn-ghost'}`}
                    >
                      {LINK_LABELS[k] || k} <ArrowUpRight size={15} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [project, setProject] = useState(null);
  const [active, setActive] = useState('');

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} active={active} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work onOpen={setProject} />
        <Research />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={project} onClose={() => setProject(null)} />
    </>
  );
}
