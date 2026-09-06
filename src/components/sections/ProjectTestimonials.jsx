import { useState } from 'react';
import testimonials from './project-testimonials.json';
export default function ProjectTestimonials() {
  const [active, setActive] = useState(0);
  const change = step => setActive(index => Math.max(0, Math.min(testimonials.length - 1, index + step)));
  return <section className="project-testimonials" aria-labelledby="testimonials-title" aria-roledescription="carousel">
    <div className="container">
      <div className="block-header"><h2 id="testimonials-title" className="block-title">See what clients say about working together</h2><hr className="block-header__separator" /></div>
      <div className="project-testimonials__stage">
        {testimonials.map((item, index) => {
          const offset = index - active;
          const position = offset === 0 ? 'active' : offset === 1 ? 'next' : offset === -1 ? 'previous' : 'hidden';
          return <article key={item.name} className={`project-testimonials__card is-${position}`} aria-hidden={index !== active} aria-roledescription="slide" aria-label={`${index + 1} of ${testimonials.length}`}>
            <img src={item.image} alt={item.name} loading="lazy" />
            <div className="project-testimonials__copy"><span className="project-testimonials__quote-mark" aria-hidden="true">&#8220;</span><blockquote>{item.quote}</blockquote><p><strong>{item.name}</strong><span>{item.role}</span></p></div>
          </article>;
        })}
      </div>
      <div className="project-testimonials__controls">
        <button type="button" aria-label="Previous testimonial" disabled={active === 0} onClick={() => change(-1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5m7-7-7 7 7 7" /></svg></button>
        <span aria-live="polite" aria-atomic="true">{active + 1} / {testimonials.length}</span>
        <button type="button" aria-label="Next testimonial" disabled={active === testimonials.length - 1} onClick={() => change(1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7" /></svg></button>
      </div>
    </div>
  </section>;
}
