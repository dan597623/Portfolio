export default function SocialLinks({ className = "", showResume = false }) {
  return <div className={`personal-socials ${className}`} aria-label={showResume ? "Social profiles and resume" : "Social profiles"}>
    <a href="https://www.linkedin.com/in/daniel-rocca-114868434/" target="_blank" rel="noopener noreferrer"><span className="personal-social-icon" aria-hidden="true">in</span>LinkedIn</a>
    <a href="https://github.com/danielrocca999" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.6 8.5c-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3a4.7 4.7 0 0 1 1.2 3.3c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" /></svg>GitHub</a>
    {showResume && <a href="/resume/Daniel-Rocca-Resume.pdf" download="Daniel-Rocca-Resume.pdf"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></svg>Download Resume</a>}
  </div>;
}
