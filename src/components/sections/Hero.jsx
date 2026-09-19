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
  return <section className="personal-hero studio-hero" aria-labelledby="personal-title">
    <div className="studio-hero__backdrop" aria-hidden="true">
      <Image className="studio-hero__image studio-hero__image--dark" src="/assets/profile/hero-studio-dark-v4.png" alt="" fill sizes="100vw" priority />
      <Image className="studio-hero__image studio-hero__image--light" src="/assets/profile/hero-studio-light-v4.png" alt="" fill sizes="100vw" priority />
    </div>
    <div className="container studio-hero__inner">
      <div className="studio-hero__content">
        <div className="studio-hero__badge"><span />Software builder</div>
        <h1 id="personal-title">Hi, I'm Daniel.<br /><span>I build software<br />people rely on.</span></h1>
        <p className="personal-hero__intro">I help ambitious teams turn complex ideas into reliable, scalable software. Focused on people, product and real-world impact.</p>
        <div className="personal-hero__actions">
          <Link className="btn btn-blue btn-large" href="/contact">Let's work together <span aria-hidden="true">&#8599;</span></Link>
          <button type="button" className="btn btn-large personal-contact" onClick={() => scrollToSection('.case-studies-block')}>View my work <span aria-hidden="true">&#8595;</span></button>
        </div>
        <SocialLinks className="personal-hero__socials" showResume />
      </div>
    </div>
  </section>;
}
