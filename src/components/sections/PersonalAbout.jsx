import { useEffect, useRef } from 'react';
import aboutCopy from './profile-copy.json';
const experience = [
  { company: 'Apple', role: 'Software Engineer', dates: 'November 2023 - December 2025', description: 'Built React and TypeScript tooling for test execution at scale, reducing deployment time by 30%. Developed a Gemini-powered support chatbot and Java / Spring Boot services, and shared expertise in observability and Kubernetes.', tags: 'React / TypeScript / Gemini / Spring Boot' },
  { company: 'Amazon', role: 'Software Engineer', dates: 'January 2020 - September 2023', description: 'Built event-driven services with Kafka and AWS SNS, moved payment services to native AWS, and supported launches in Sweden and Poland. Improved monitoring, introduced Redis caching, and mentored two interns.', tags: 'AWS / Kafka / Redis / React' },
  { company: 'Amazon', role: 'Software Engineer', dates: 'September 2017 - January 2020', description: 'Migrated payment systems from Oracle to DynamoDB and refactored services for extensibility and testability. Designed resilient AWS systems and maintained continuous integration and deployment workflows.', tags: 'DynamoDB / Distributed systems / CI/CD' },
  { company: 'PIC Business Systems', role: 'Web Developer', dates: 'July 2015 - November 2016', description: 'Developed REST APIs, a PHP EDI library, SOAP integrations, and browser interfaces. Connected customer and retailer workflows and implemented MapQuest integrations.', tags: 'PHP / CodeIgniter / REST / JavaScript' },
  { company: 'DELTALOG', role: 'SCRUM Master', dates: 'October 2011 - January 2012', description: 'Combined software development with Scrum facilitation and Agile delivery practices.', tags: 'Scrum / Agile / Software development' },
];
export default function PersonalAbout() {
  const experienceRef = useRef(null);
  useEffect(() => {
    const list = experienceRef.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!list || motion.matches || !('IntersectionObserver' in window)) return;
    const rows = [...list.children];
    const observer = new IntersectionObserver(entries => {
      entries.filter(entry => entry.isIntersecting).forEach((entry, index) => {
        entry.target.style.setProperty('--reveal-delay', `${index * 80}ms`);
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    rows.forEach(row => { row.classList.add('experience-reveal'); observer.observe(row); });
    const showAll = () => {
      if (motion.matches) {
        observer.disconnect();
        rows.forEach(row => row.classList.remove('experience-reveal'));
      }
    };
    motion.addEventListener('change', showAll);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', showAll);
      rows.forEach(row => row.classList.remove('experience-reveal', 'is-visible'));
    };
  }, []);
  return <section id="about-me" className="personal-about">
    <div className="container">
      <div className="block-header personal-section-heading">
        <h2 className="block-title">About me</h2>
        <p>Thoughtful engineering, clear communication, and a focus on the people behind every product.</p>
        <hr className="block-header__separator" />
        
      </div>
      <div className="personal-about__grid">
        <div className="personal-about__copy personal-about__text">
          <p className="personal-about__lead">{aboutCopy.slice(0, aboutCopy.indexOf(' I value'))}</p>
          <p>{aboutCopy.slice(aboutCopy.indexOf(' I value'), aboutCopy.indexOf(' I see good collaboration'))}</p>
          <p>{aboutCopy.slice(aboutCopy.indexOf(' I see good collaboration'))}</p>
        </div>
        <aside className="personal-facts" aria-label="About Dan">
          <dl>
            <div><dt>Based in</dt><dd>Washington Township, NJ</dd></div>
            <div><dt>Focus</dt><dd className="personal-facts__focus">Full-Stack &amp; AI Engineering</dd></div>
            <div><dt>Language</dt><dd>English (Native)</dd></div>
            <div><dt>Education</dt><dd>Master's degree in Computer Science<span>Princeton University</span></dd></div>
            <div><dt>Status</dt><dd className="personal-facts__status"><i aria-hidden="true" />Open to collaboration</dd></div>
          </dl>
        </aside>
      </div>
      <div className="personal-experience" aria-labelledby="experience-title"><div className="block-header personal-section-heading">
          <h2 id="experience-title" className="block-title">Experience</h2>
          <p>15+ years of software engineering, including building products and platforms at Apple and Amazon.</p>
        <hr className="block-header__separator" />
          
        </div>
        <div className="personal-experience__list" ref={experienceRef}>{experience.map(item => <article className="personal-experience__item" key={item.company + item.dates}><div className="personal-experience__meta"><h3>{item.company}</h3><p>{item.dates}</p></div><div><h4>{item.role}</h4><p>{item.description}</p><span className="personal-experience__tags">{item.tags}</span></div></article>)}</div>
      </div>
    </div>
  </section>;
}
