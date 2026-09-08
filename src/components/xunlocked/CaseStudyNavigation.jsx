"use client";
import { useEffect, useState } from 'react';

const sections = [
  ['company-overview', 'Company overview'],
  ['customer-review', 'Customer review'],
  ['business-context', 'Business context'],
  ['challenges', 'Challenges'],
  ['solutions-we-implemented', 'Solutions I implemented'],
  ['features', 'Features'],
  ['results', 'Results'],
];

export default function CaseStudyNavigation() {
  const [active, setActive] = useState(sections[0][0]);
  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const passed = sections.filter(([id]) => document.getElementById(id)?.getBoundingClientRect().top <= 180);
        setActive(passed.at(-1)?.[0] || sections[0][0]);
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => { window.removeEventListener('scroll', update); cancelAnimationFrame(frame); };
  }, []);
  return <nav aria-label="Case study contents"><ol className="post-index__list post-index-list">
    {sections.map(([id, label]) => <li key={id} className={active === id ? 'active' : ''}>
      <button type="button" aria-current={active === id ? 'location' : undefined} onClick={() => {
        const target = document.getElementById(id);
        if (!target) return;
        const headerHeight = document.querySelector('.personal-header')?.getBoundingClientRect().height || 80;
        window.scrollTo({ top: Math.max(0, window.scrollY + target.getBoundingClientRect().top - headerHeight - 24), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
        setActive(id);
      }}>{label}</button>
    </li>)}
  </ol></nav>;
}
