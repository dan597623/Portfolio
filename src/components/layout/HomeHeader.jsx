"use client";
import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
const links = [
  ['About me', '#about-me'],
  ['Experience', '.personal-experience'],
  ['Projects', '.case-studies-block'],
  ['Services', '.services-filter-block'],
  ['Industries', '.industry-carousel'],
];
export default function HomeHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (pathname === '/projects' && sessionStorage.getItem('portfolio-projects-top')) {
      sessionStorage.removeItem('portfolio-projects-top');
      requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
    }
    const target = pathname === '/' ? sessionStorage.getItem('portfolio-scroll-target') : null;
    if (target) {
      sessionStorage.removeItem('portfolio-scroll-target');
      requestAnimationFrame(() => go(target));
    }
    const close = event => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [pathname]);
  const go = selector => {
    setOpen(false);
    if (selector === '/projects') {
      sessionStorage.removeItem('portfolio-scroll-target');
      if (pathname === '/projects') {
        window.scrollTo({ top: 0, left: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      } else {
        sessionStorage.setItem('portfolio-projects-top', 'true');
        router.push('/projects', { scroll: false });
      }
      return;
    }
    if (pathname !== '/') {
      sessionStorage.setItem('portfolio-scroll-target', selector);
      router.push('/');
      return;
    }
    if (selector === '__top__') {
      sessionStorage.removeItem('portfolio-scroll-target');
      window.scrollTo({ top: 0, left: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      return;
    }
    const target = document.querySelector(selector);
    if (!target) return;
    const offset = document.querySelector('.personal-header')?.getBoundingClientRect().height || 80;
    window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - offset - 24, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return <header className="site-header header header--pinned personal-header">
    <div className="container personal-header__inner">
      <button type="button" className="personal-header__brand" onClick={() => go('__top__')} aria-label="Daniel, back to top"><BrandLogo /></button>
      <nav id="personal-navigation" aria-label="Main navigation" className={open ? 'personal-header__nav is-open' : 'personal-header__nav'}>
        {links.map(([label, selector]) => <button type="button" key={label} onClick={() => go(selector)}>{label}</button>)}
      </nav>
      <div className="personal-header__actions">
        <Link className="btn btn-black" href="/contact">Let's Talk</Link>
        <button type="button" className="theme-toggle-btn" aria-label="Switch color theme"><svg className="icon"><use href="/assets/sprite.svg#icon-moon" /></svg><svg className="icon"><use href="/assets/sprite.svg#icon-sun" /></svg></button>
        <button type="button" className="personal-header__toggle" aria-expanded={open} aria-controls="personal-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}><span /><span /><span /></button>
      </div>
    </div>
  </header>;
}
