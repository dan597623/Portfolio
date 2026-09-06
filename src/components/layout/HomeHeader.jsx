import { useEffect, useState } from 'react';
const links = [
  ['About me', '#about-me'],
  ['Experience', '.personal-experience'],
  ['Projects', '/projects'],
  ['Services', '.services-filter-block'],
  ['Industries', '.industry-carousel'],
];
export default function HomeHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const target = document.body.classList.contains('home') ? sessionStorage.getItem('portfolio-scroll-target') : null;
    if (target) {
      sessionStorage.removeItem('portfolio-scroll-target');
      requestAnimationFrame(() => go(target));
    }
    const close = event => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  const go = selector => {
    setOpen(false);
    if (selector === '/projects') { window.location.assign('/projects'); return; }
    if (!document.body.classList.contains('home')) {
      sessionStorage.setItem('portfolio-scroll-target', selector);
      window.location.assign('/');
      return;
    }
    const target = document.querySelector(selector);
    if (!target) return;
    const offset = document.querySelector('.personal-header')?.getBoundingClientRect().height || 80;
    window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - offset - 24, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return <header className="site-header header header--pinned personal-header">
    <div className="container personal-header__inner">
      <button type="button" className="personal-header__brand" onClick={() => go('.personal-hero')} aria-label="Dan, back to top">DAN<span>.</span></button>
      <nav id="personal-navigation" aria-label="Main navigation" className={open ? 'personal-header__nav is-open' : 'personal-header__nav'}>
        {links.map(([label, selector]) => <button type="button" key={label} onClick={() => go(selector)}>{label}</button>)}
      </nav>
      <div className="personal-header__actions">
        <a className="btn btn-black" href="/contact">Let's Talk</a>
        <button type="button" className="theme-toggle-btn" aria-label="Switch color theme"><svg className="icon"><use href="/assets/sprite.svg#icon-moon" /></svg><svg className="icon"><use href="/assets/sprite.svg#icon-sun" /></svg></button>
        <button type="button" className="personal-header__toggle" aria-expanded={open} aria-controls="personal-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}><span /><span /><span /></button>
      </div>
    </div>
  </header>;
}
