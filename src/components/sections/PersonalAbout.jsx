"use client";
import { useEffect, useRef, useState, useId } from 'react';
import aboutCopy from './profile-copy.json';
const experience = [
  {"company": "Origami Studios", "role": "Lead AI & Full-Stack Software Engineer", "location": "Parsippany, NJ", "dates": "November 2023 - December 2025", "description": "Led full-stack delivery for **MyTutor\u2019s UK and U.S. tutoring platforms**, spanning four product streams, cloud modernization, scheduling, virtual classrooms, payments, authentication, and enterprise integrations. Helped evolve the platform toward **AWS-based microservices and serverless architecture**, supporting **250K+ learners, 1,500+ schools, and 4M+ lessons** while enabling faster releases and continued international growth.", "details": ["Led architecture and full-stack delivery for **MyTutor\u2019s UK and U.S. tutoring platforms**, working across four product streams spanning new-market expansion, white-label products, core platform development, and legacy modernization.", "Helped evolve the platform from an early **monolithic architecture toward AWS-based microservices, serverless components, and event-driven workflows**, creating a more scalable foundation for new markets, integrations, and product lines.", "Owned technical delivery across **React-based frontend applications, backend services, APIs, scheduling, classroom workflows, authentication, payments, analytics, and third-party integrations**, supporting students, tutors, schools, and administrators.", "Designed and delivered **complex scheduling and class-management capabilities**, including automated group formation, tutor availability, timetable management, CSV-based administration, and multi-role workflows for school programs.", "Built and integrated the platform\u2019s **online lesson experience**, connecting secure video sessions, shared lesson spaces, whiteboards, document workflows, and device synchronization into a unified learning environment.", "Led integration work across **Clever, ADP, Zoom, Google Analytics, AWS Amplify, and other external services**, with a strong focus on security, reliability, and maintainable API boundaries.", "Established stronger engineering and delivery practices across multiple workstreams, combining **Scrum-based feature delivery with continuous legacy modernization**, automated testing, regression coverage, performance testing, and production readiness.", "Partnered closely with product, design, QA, DevOps, and client stakeholders to move requirements from discovery through **architecture, implementation, validation, release, and production support**, while keeping delivery aligned with real school and tutor feedback.", "Contributed to a platform serving **250K+ learners, 1,500+ schools, and 4M+ lessons**, while supporting a product team of **40+ specialists across four delivery streams**.", "Helped deliver an initial market-ready version in approximately **two months**, while establishing the architecture and engineering foundation required for continued UK growth and U.S. expansion."]},
  { "location": "Hoboken, NJ", company: "Walmart Global Tech", role: "Full-Stack AI Software Engineer", dates: "January 2020 - September 2023", description: "Led production delivery of **Agentic AI platforms for financial reconciliation**, combining **multi-agent orchestration, human-in-the-loop learning, and full-stack enterprise workflows**. Architected a **LangGraph Supervisor/Worker framework** that improved **tool-selection accuracy from 70% to 95%** and reduced **token usage by ~80%**, while reconciliation pipelines achieved **90%+ accuracy across 10,000+ daily transactions**.", details: ["Led architecture and production delivery of **Agentic AI platforms for financial reconciliation**, automating transaction matching, exception handling, human review, and continuous-learning workflows across high-volume financial operations.", "Architected a **hierarchical Supervisor/Worker multi-agent framework with LangGraph**, introducing confidence-based self-correction and semantic tool routing that increased tool-selection accuracy from **70% to 95%** while reducing prompt-token consumption by approximately **80%**.", "Designed a multi-stage reconciliation engine combining **density-based clustering, deterministic rules, and LLM agents**, achieving **90%+ matching accuracy across 10,000+ daily financial transactions**.", "Built a conversational **human-in-the-loop Feedback Agent** that transformed accept, reject, and correction decisions into validated learning signals, enabling continuous improvement without repeated model retraining.", "Established production-grade **evaluation, observability, guardrails, failure recovery, and deployment workflows**, providing measurable visibility into agent accuracy, confidence, latency, tool usage, and operational reliability.", "Developed the supporting full-stack platform and service layer for AI workflows, integrating agent orchestration, APIs, enterprise data sources, review interfaces, authentication, and operational monitoring.", "Drove delivery from **technical architecture and prototyping through stakeholder validation, production rollout, and operational support**, establishing reusable patterns for deploying additional enterprise Agentic AI capabilities."] },
  { "location": "Remote","company": "Amazon", "role": "Software Development Engineer II", "dates": "September 2017 - January 2020", "description": "Modernized **Amazon Payments** by migrating business-critical systems from **Oracle to DynamoDB** and redesigning data access for **AWS-native scale**. Refactored distributed services for **resilience, extensibility, and testability**, strengthened CI/CD and production reliability, and reduced legacy infrastructure dependencies while creating a more scalable foundation for **high-volume payment processing**.", "details": ["Led modernization of **business-critical Amazon Payments services**, migrating core workloads from **Oracle to DynamoDB** and reducing dependence on legacy relational infrastructure.", "Redesigned **data-access patterns and service boundaries** for cloud-native NoSQL workloads, improving scalability, performance, and operational flexibility across high-volume payment systems.", "Refactored distributed services to strengthen **modularity, extensibility, testability, fault isolation, and long-term maintainability** across core transaction-processing workflows.", "Designed resilient **AWS-native application components** supporting high-throughput, business-critical payment operations with stronger availability and predictable performance.", "Developed **incremental migration and coexistence strategies** that allowed legacy and modern architectures to operate safely during phased production transition.", "Improved **CI/CD, automated testing, build pipelines, and deployment workflows**, increasing release reliability and reducing risk across production changes.", "Reduced **infrastructure complexity and database administration overhead** through cloud-native modernization and simplified operational patterns.", "Contributed to **architecture decisions, production troubleshooting, performance analysis, and operational reliability**, supporting stable execution of high-volume Amazon Payments services."]},
  { "location": "Blackwood, NJ","company": "Cleo", "role": "Full-Stack & Integration Engineer", "dates": "July 2015- August 2017", "description": "Built a **B2B integration platform** connecting customer systems with suppliers and major retailers including **Home Depot**. Delivered reusable **EDI services, REST and SOAP APIs, and JavaScript-based interfaces** while bridging modern applications with legacy enterprise systems. Improved integration consistency, reduced duplicated development effort, and supported **end-to-end delivery across development, deployment, and production support**.", "details": ["Designed and delivered a **B2B integration platform** connecting customer systems with suppliers and major retailers, including **Home Depot**, improving the reliability and consistency of partner data exchange.", "Built reusable **EDI services** to automate document intake, transformation, validation, and processing across complex retail and supply-chain workflows.", "Architected **REST APIs using PHP, CodeIgniter, and RAML** to expose business capabilities and support external application integrations.", "Developed **SOAP-based integrations** to bridge modern web applications with legacy enterprise and partner systems.", "Built responsive **JavaScript, jQuery, HTML5, and CSS interfaces** for managing transactions, operational data, integration workflows, and user activity.", "Implemented **MapQuest-based location, mapping, and routing capabilities** within business applications.", "Created reusable **integration components** that reduced duplicated development effort and improved consistency across customer implementations.", "Owned delivery across the **full application lifecycle**, including frontend, backend, APIs, third-party integrations, debugging, deployment, and production support."]},
  {"company": "FreedomPay", "role": "Senior Full-Stack Software Engineer", "location": "Philadelphia, PA", "dates": "March 2012 - December 2014", "description": "Built and supported **enterprise commerce and payment-platform capabilities** spanning full-stack applications, APIs, transaction workflows, and merchant integrations. Worked across **secure payment processing, POS connectivity, web and mobile commerce, reliability, and production operations**, helping evolve a scalable platform for retail, hospitality, and enterprise customers.", "details": ["Contributed to the architecture and development of an **enterprise commerce and payments platform** supporting secure transactions, merchant integrations, loyalty programs, and high-volume retail and hospitality workflows.", "Built **full-stack application capabilities** spanning merchant-facing interfaces, backend services, payment workflows, and integration layers connecting POS systems with processors and enterprise platforms.", "Developed reusable **APIs and integration components** that simplified connectivity across payment services, merchant systems, and third-party commerce applications.", "Designed and supported **scalable transaction-processing workflows** with a strong focus on availability, data integrity, security, and predictable performance.", "Helped evolve platform capabilities across **in-store, online, and mobile commerce experiences** as enterprise customer requirements expanded.", "Improved production reliability through stronger **error handling, diagnostics, logging, testing, and operational support** for business-critical payment services.", "Collaborated across engineering, product, and integration teams to translate complex merchant requirements into **production-ready software capabilities**.", "Contributed across the **full software lifecycle**, including architecture, implementation, integration, testing, deployment, troubleshooting, and production support."]},
  {"company": "Elsevier", "role": "Software Developer & Scrum Master", "location": "Philadelphia, PA", "dates": "October 2011 - January 2012", "description": "Combined **hands-on software development with Scrum leadership** to support business application modernization from requirements through production release. Worked closely with engineers, product owners, and stakeholders on **planning, development, testing, backlog prioritization, and release coordination**, improving delivery visibility, team alignment, and consistency while remaining actively involved in technical execution and problem solving.", "details": ["Combined **hands-on software development with Scrum leadership**, helping deliver and modernize business applications from initial requirements through implementation, testing, release, and ongoing support.", "Partnered with product owners, engineers, and business stakeholders to turn complex requirements into **clear user stories, technical priorities, and executable delivery plans**.", "Facilitated **sprint planning, daily standups, backlog refinement, retrospectives, and release coordination**, keeping engineering work focused and delivery commitments visible across the team.", "Contributed directly to **application development, debugging, testing, and technical problem solving**, staying closely involved with the engineering work rather than operating solely as a process lead.", "Identified delivery risks and cross-team dependencies early, working with engineers and stakeholders to **remove blockers before they affected release timelines or product quality**.", "Improved collaboration between technical and business teams by establishing clearer ownership, communication, and decision-making throughout the **software development lifecycle**.", "Supported iterative modernization of existing applications while helping the team balance **new feature delivery, technical improvements, defect resolution, and production stability**.", "Helped strengthen engineering discipline around **planning, quality, release readiness, and continuous improvement**, resulting in more predictable and coordinated software delivery."]},
];
function ExperienceText({ text }) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part
  );
}
function ExperienceCopy({ item }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  if (!item.details) return <p><ExperienceText text={item.description} /></p>;
  return <>
    <div className="personal-experience__summary">
      <p><ExperienceText text={item.description} /></p>
      <button type="button" className="personal-experience__toggle" aria-label={expanded ? "Collapse experience details" : "Expand experience details"} aria-expanded={expanded} aria-controls={panelId} onClick={() => setExpanded(value => !value)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </button>
    </div>
    <div id={panelId} aria-hidden={!expanded} inert={!expanded} className={`personal-experience__details${expanded ? ' is-expanded' : ''}`}>
      <div className="personal-experience__details-inner"><ul>{item.details.map(point => <li key={point}><ExperienceText text={point} /></li>)}</ul></div>
    </div>
  </>;
}

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
        <aside className="personal-facts" aria-label="About Daniel">
          <dl>
            <div><dt>Based in</dt><dd>Blackwood, New Jersey</dd></div>
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
        <div className="personal-experience__list" ref={experienceRef}>{experience.map(item => <article className="personal-experience__item" key={item.company + item.dates}><div className="personal-experience__meta">{item.company && <h3>{item.company}</h3>}<p>{item.dates}</p>{item.location && <p>{item.location}</p>}</div><div><h4>{item.role}</h4>{item.primaryProject && <p className="personal-experience__project">Primary Project: <strong>{item.primaryProject}</strong></p>}<ExperienceCopy item={item} /></div></article>)}</div>
      </div>
    </div>
  </section>;
}
