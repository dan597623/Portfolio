"use client";
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import BrandLogo from './BrandLogo';
import SocialLinks from '../SocialLinks';
export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const navigate = selector => {
    if (selector === '__top__') {
      if (pathname !== '/') {
        sessionStorage.setItem('portfolio-scroll-target', '__top__');
        router.push('/');
      } else {
        sessionStorage.removeItem('portfolio-scroll-target');
        window.scrollTo({ top: 0, left: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      }
      return;
    }
    const target = document.querySelector(selector);
    if (pathname !== '/' || !target) {
      sessionStorage.setItem('portfolio-scroll-target', selector);
      router.push('/');
      return;
    }
    const headerHeight = document.querySelector('header')?.getBoundingClientRect().height || 80;
    window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - headerHeight - 24,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return <footer className="personal-footer">
    <div className="container">
      <div className="personal-footer__main">
        <div className="personal-footer__intro"><Link href="/" className="personal-footer__brand" onClick={event => { event.preventDefault(); navigate('__top__'); }} aria-label="Daniel home"><BrandLogo /></Link><p>Full-stack engineering. Practical AI.<br />Software built with care.</p><span className="personal-footer__location">Blackwood, New Jersey</span><SocialLinks className="personal-footer__socials" /></div>
        <nav className="personal-footer__nav" aria-label="Footer navigation">
          <button type="button" onClick={() => navigate('#about-me')}>About me</button>
          <button type="button" onClick={() => navigate('.personal-experience')}>Experience</button>
          <Link href="/projects" scroll={false} onClick={event => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            if (pathname === '/projects') {
              event.preventDefault();
              window.scrollTo({ top: 0, left: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
            } else {
              sessionStorage.setItem('portfolio-projects-top', 'true');
            }
          }}>Projects</Link>
          <button type="button" onClick={() => navigate('.services-filter-block')}>Services</button>
        </nav>
        <div className="personal-footer__contact"><p>Have a project in mind?</p><Link className="btn btn-blue" href="/contact">Let's Talk <span aria-hidden="true">&#8599;</span></Link><span>Open to collaboration</span></div>
      </div>
      <div className="personal-footer__bottom"><span>&copy; {new Date().getFullYear()} Daniel. All rights reserved.</span><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>Back to top <span aria-hidden="true">&#8593;</span></button></div>
    </div>
  </footer>;
}
