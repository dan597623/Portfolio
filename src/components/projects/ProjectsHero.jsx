import Image from 'next/image';
export default function ProjectsHero() {
  return <section className="projects-banner" aria-labelledby="projects-title"><div className="container"><div className="projects-banner__panel projects-banner__panel--photo">
    <Image width={1641} height={958} sizes="100vw" priority className="projects-banner__photo" src="/assets/projects/dan-workspace.png" alt="Dan working at his development workstation" fetchPriority="high" />
    <div className="projects-banner__copy"><h1 id="projects-title">Building software.<br />Solving real problems.</h1><p>Explore the products I have helped bring to life through close collaboration with clients. From full-stack platforms to practical AI, my work connects technical decisions with real business needs.</p></div>
  </div></div></section>;
}
