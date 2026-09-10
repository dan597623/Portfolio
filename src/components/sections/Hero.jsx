"use client";
import Image from 'next/image';
import Link from 'next/link';
import SocialLinks from '../SocialLinks';
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
        <h1 id="personal-title">Hi, I'm Daniel.<br /><span>I build software<br />people rely on.</span></h1>
        <p className="personal-hero__intro">From a thoughtful interface to the systems behind it, I turn complex ideas into dependable products. Full-stack engineering, practical AI, and 15+ years of experience.</p>
        <div className="personal-hero__actions"><button type="button" className="btn btn-blue btn-large" onClick={() => scrollToSection('.case-studies-block')}>My projects <span aria-hidden="true">&#8595;</span></button><Link className="btn btn-large personal-contact" href="/contact">Let's Talk <span aria-hidden="true">&#8599;</span></Link></div>
        <SocialLinks className="personal-hero__socials" />
      </div>
      <div className="personal-hero__portrait"><Image width={1261} height={1247} sizes="(max-width: 900px) 100vw, 50vw" priority src="/assets/profile/Dan.png" alt="Daniel, senior full-stack engineer" fetchPriority="high" /><div className="personal-hero__caption">ENGINEERING WITH PURPOSE<span>From architecture to production.</span></div></div>
    </div></div>
  </section>;
}
