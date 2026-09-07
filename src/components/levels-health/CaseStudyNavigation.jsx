"use client";
import { useEffect, useState } from 'react';

const sections = [["about-the-client", "About the client"], ["business-context", "Business context"], ["challenges", "Challenges"], ["solutions-we-implemented", "Solutions I implemented"], ["results", "Results"]];

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
      <span aria-current={active === id ? 'location' : undefined}>{label}</span>
    </li>)}
  </ol></nav>;
}
