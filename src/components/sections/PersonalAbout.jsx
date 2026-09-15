"use client";
import { useEffect, useRef, useState, useId } from 'react';
import aboutCopy from './profile-copy.json';
const experience = [
  {
    "company": "Origami Studios",
    "employment": "Contract",
    "role": "Lead AI & Full-Stack Software Engineer",
    "dates": "Nov 2023 - Jul 2026",
    "location": "Parsippany, New Jersey \u00b7 Remote",
    "description": "Led a **40+ engineer team across four product streams** delivering MyTutor's UK and US platforms. Combined **React, Next.js, Node.js, and AWS microservices** with AI-powered matching and scheduling, supporting **250K+ learners, 1,500+ schools, and 4M+ lessons**.",
    "details": [
      "Led a cross-functional team of **40+ engineers** across **4 concurrent product streams**, owning architecture and full-stack delivery for MyTutor's UK and US tutoring platforms built on **React**, **Next.js**, and **Node.js**",
      "Directed the migration from a monolithic codebase to **AWS-based microservices**, **serverless Lambda** functions, and event-driven workflows, using **SQS** and **EventBridge** to decouple services and support new market expansion",
      "Integrated **OpenAI** and **Claude APIs** to power automated tutor-student matching and grouping, designing the prompt orchestration and business-rule layer that turned model output into reliable scheduling decisions",
      "Built the platform's **REST** and **GraphQL** API layer in **TypeScript** and **Python**, connecting React front-end applications to scheduling, classroom, authentication, and payments services",
      "Delivered the online lesson experience, including secure **WebRTC** video sessions, shared lesson spaces, whiteboards, and cross-device state synchronization",
      "Led integrations with **Clever**, **ADP**, **Zoom**, **Google Analytics**, and **AWS Amplify**, establishing secure, well-documented API boundaries across teams",
      "Set technical direction and mentored the team through **Scrum**-based releases, automated testing, and **CI/CD** pipelines, driving an initial market-ready launch in approximately **two months** for a platform serving **250K+ learners**, **1,500+ schools**, and **4M+ lessons**"
    ],
    "skills": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "OpenAI/Claude API Integration",
      "AWS Lambda",
      "Serverless Architecture",
      "Event-Driven Architecture (SQS/EventBridge)",
      "REST & GraphQL APIs",
      "Team Leadership"
    ]
  },
  {
    "company": "Walmart Global Tech",
    "employment": "Full-time",
    "role": "Full-Stack AI Software Engineer",
    "dates": "Mar 2019 - Sep 2023",
    "location": "Hoboken, New Jersey \u00b7 remote",
    "description": "Led delivery of an **Agentic AI financial reconciliation platform** in Python and React. Built a **LangGraph Supervisor/Worker framework** that improved tool-selection accuracy from **70% to 95%** and reduced token consumption by approximately **80%**, with reconciliation achieving **90%+ matching accuracy across 10,000+ daily transactions**.",
    "details": [
      "Led architecture and production delivery of an **Agentic AI** financial reconciliation platform in **Python**, processing high-volume retail transactions, payments, settlements, and exception-management workflows",
      "Architected a hierarchical Supervisor/Worker multi-agent framework in **LangGraph**, introducing confidence-based self-correction and semantic tool routing that improved tool-selection accuracy from **70% to 95%** while cutting prompt-token consumption by approximately **80%**",
      "Designed a multi-stage reconciliation engine combining clustering algorithms, deterministic business rules, and **LLM agents**, achieving **90%+ matching accuracy** across **10,000+ daily transactions**",
      "Built a human-in-the-loop Feedback Agent that captured accept, reject, and correction decisions from reviewers and converted them into validated learning signals, improving recommendations without repeated model retraining",
      "Developed the supporting full-stack application and AI service layer in **React** and **Python**, integrating agent orchestration, enterprise APIs, transaction data sources, and authentication into a single review workflow",
      "Established production-grade evaluation, observability, guardrails, and auditability using structured logging and monitoring, providing visibility into accuracy, confidence, latency, and agent decision quality",
      "Optimized large-scale AI workflows through asynchronous processing, caching, and structured outputs, improving throughput while controlling inference cost across the platform"
    ],
    "skills": [
      "Python",
      "LangGraph",
      "Agentic AI",
      "Multi-Agent Systems",
      "LLM Orchestration",
      "Prompt Engineering",
      "React",
      "AWS",
      "Reconciliation/Fintech Systems",
      "Observability & Guardrails",
      "Structured Outputs",
      "Human-in-the-Loop Systems"
    ]
  },
  {
    "company": "Amazon",
    "employment": "Part-time",
    "role": "Software Development Engineer II, Amazon Payments Platform",
    "dates": "Feb 2015 - Jan 2019",
    "location": "Blackwood, New Jersey \u00b7 Remote",
    "description": "Modernized **Amazon Payments** by migrating core workloads from **Oracle to DynamoDB** and redesigning services in **Python and Java**. Built resilient AWS-native components with **Lambda and API Gateway**, strengthening scalability, fault isolation, automated testing, and release reliability.",
    "details": [
      "Led modernization of business-critical Amazon Payments services, migrating core workloads from **Oracle** to **DynamoDB** and reducing dependence on legacy relational infrastructure",
      "Redesigned data-access patterns and service boundaries in **Python** and **Java** for cloud-native NoSQL workloads, improving scalability, performance, and operational flexibility across high-volume payment systems",
      "Refactored distributed services to strengthen modularity, extensibility, testability, and fault isolation across core transaction-processing workflows",
      "Designed resilient **AWS**-native application components using **Lambda** and **API Gateway**, supporting high-throughput, business-critical payment operations with stronger availability and predictable performance",
      "Developed incremental migration and coexistence strategies that allowed legacy and modern architectures to run safely side by side during phased production rollout",
      "Improved **CI/CD** pipelines, automated testing, and deployment workflows, increasing release reliability and reducing risk across production changes",
      "Contributed to architecture decisions, production troubleshooting, and performance analysis, supporting stable execution of high-volume Amazon Payments services"
    ],
    "skills": [
      "Python",
      "Java",
      "AWS Lambda",
      "Amazon DynamoDB",
      "API Gateway",
      "NoSQL Data Modeling",
      "Distributed Systems",
      "CI/CD",
      "Payments Systems",
      "Legacy System Migration"
    ]
  },
  {
    "company": "FreedomPay",
    "employment": "Full-time",
    "role": "Full-Stack Software Engineer",
    "dates": "Mar 2010 - Dec 2014",
    "location": "Philadelphia, Pennsylvania \u00b7 On-site",
    "description": "Built **enterprise commerce and payments capabilities** in **JavaScript and Python**, spanning merchant interfaces, backend services, REST APIs, and POS integrations. Supported secure, scalable transactions across **in-store, online, and mobile commerce**, improving reliability through logging, testing, and production support.",
    "details": [
      "Contributed to the architecture and development of an enterprise **commerce and payments platform** supporting secure transactions, merchant integrations, loyalty programs, and high-volume retail and hospitality workflows",
      "Built full-stack application capabilities in **JavaScript** and **Python**, spanning merchant-facing interfaces, backend services, payment workflows, and integration layers connecting **POS systems** to processors",
      "Developed reusable **REST APIs** and integration components that simplified connectivity across payment services, merchant systems, and third-party commerce applications",
      "Designed and supported scalable transaction-processing workflows with a strong focus on availability, data integrity, security, and predictable performance under high load",
      "Helped evolve platform capabilities across in-store, online, and mobile commerce experiences as enterprise customer requirements expanded",
      "Improved production reliability through stronger error handling, structured logging, automated testing, and operational support for business-critical payment services",
      "Collaborated across engineering, product, and integration teams to translate complex merchant requirements into production-ready software capabilities"
    ],
    "skills": [
      "JavaScript",
      "Python",
      "REST APIs",
      "Payments/POS Integrations",
      "Merchant Systems",
      "Transaction Processing",
      "Security & Data Integrity",
      "Automated Testing",
      "Full-Stack Development"
    ]
  }
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
          <p>15+ years of software engineering across AI, education, enterprise commerce, and payments.</p>
        <hr className="block-header__separator" />
          
        </div>
        <div className="personal-experience__list" ref={experienceRef}>{experience.map(item => <article className="personal-experience__item" key={item.company + item.dates}><div className="personal-experience__meta">{item.company && <h3>{item.company}</h3>}{item.employment && <p>{item.employment}</p>}<p>{item.dates}</p>{item.location && <p>{item.location}</p>}</div><div><h4>{item.role}</h4>{item.primaryProject && <p className="personal-experience__project">Primary Project: <strong>{item.primaryProject}</strong></p>}<ExperienceCopy item={item} />{item.skills?.length > 0 && <p className="personal-experience__skills"><strong>{item.skills.join(" \u2022 ")}</strong></p>}</div></article>)}</div>
      </div>
    </div>
  </section>;
}
