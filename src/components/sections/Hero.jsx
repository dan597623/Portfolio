"use client";
import Image from 'next/image';
import Link from 'next/link';
export default function Hero() {
  const scrollToSection = selector => {
    const target = document.querySelector(selector);
    if (!target) return;
    const headerHeight = document.querySelector('.personal-header')?.getBoundingClientRect().height || 80;
    window.scrollTo({
      top: window.scrollY + target.getBoundingClientRect().top - headerHeight - 24,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  };
  return <section className="personal-hero" aria-labelledby="personal-title">
    <div className="container"><div className="personal-hero__panel">
      <div className="personal-hero__copy">
        <h1 id="personal-title">Hi, I'm Dan.<br /><span>I build software<br />people rely on.</span></h1>
        <p className="personal-hero__intro">From a thoughtful interface to the systems behind it, I turn complex ideas into dependable products. Full-stack engineering, practical AI, and 15+ years of experience.</p>
        <div className="personal-hero__actions"><button type="button" className="btn btn-blue btn-large" onClick={() => scrollToSection('.case-studies-block')}>My projects <span aria-hidden="true">&#8595;</span></button><Link className="btn btn-large personal-contact" href="/contact">Let's Talk <span aria-hidden="true">&#8599;</span></Link></div>
        <div className="personal-hero__socials" aria-label="Social profiles and resume">
          <button type="button" disabled title="Profile link coming soon"><span className="personal-social-icon" aria-hidden="true">in</span>LinkedIn</button>
          <button type="button" disabled title="Profile link coming soon"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.6 8.5c-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3a4.7 4.7 0 0 1 1.2 3.3c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" /></svg>GitHub</button>
          <button type="button" className="personal-resume" disabled title="Resume will be available soon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></svg>Download Resume</button>
        </div>
      </div>
      <div className="personal-hero__portrait"><Image width={1261} height={1247} sizes="(max-width: 900px) 100vw, 50vw" priority src="/assets/profile/Dan.png" alt="Dan, senior full-stack engineer" fetchPriority="high" /><div className="personal-hero__caption">ENGINEERING WITH PURPOSE<span>From architecture to production.</span></div></div>
    </div></div>
  </section>;
}
