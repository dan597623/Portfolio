export default function Footer() {
  const navigate = selector => {
    const target = document.querySelector(selector);
    if (!document.body.classList.contains('home') || !target) {
      sessionStorage.setItem('portfolio-scroll-target', selector);
      window.location.assign('/');
      return;
    }
    const headerHeight = document.querySelector('header')?.getBoundingClientRect().height || 80;
    window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - headerHeight - 24,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return <footer className="personal-footer">
    <div className="container">
      <div className="personal-footer__main">
        <div className="personal-footer__intro"><a href="/" className="personal-footer__brand" aria-label="Dan home">DAN<span>.</span></a><p>Full-stack engineering. Practical AI.<br />Software built with care.</p><span className="personal-footer__location">Washington Township, NJ</span></div>
        <nav className="personal-footer__nav" aria-label="Footer navigation">
          <button type="button" onClick={() => navigate('#about-me')}>About me</button>
          <button type="button" onClick={() => navigate('.personal-experience')}>Experience</button>
          <a href="/projects">Projects</a>
          <button type="button" onClick={() => navigate('.services-filter-block')}>Services</button>
        </nav>
        <div className="personal-footer__contact"><p>Have a project in mind?</p><a className="btn btn-blue" href="/contact">Let's Talk <span aria-hidden="true">&#8599;</span></a><span>Open to collaboration</span></div>
      </div>
      <div className="personal-footer__bottom"><span>&copy; {new Date().getFullYear()} Dan. All rights reserved.</span><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>Back to top <span aria-hidden="true">&#8593;</span></button></div>
    </div>
  </footer>;
}
