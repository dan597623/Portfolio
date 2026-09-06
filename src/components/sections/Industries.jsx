const industries = [
  ['FinTech', 'Banking, lending, trading, accounting, digital wallets, and financial platforms.', "/assets/image-204.png", "Financial platform"],
  ['Edtech', 'Learning management systems, online courses, virtual classrooms, and mobile learning experiences.', "/assets/My-Tutor-768x702.png", "MyTutor learning platform"],
  ['Retail', 'E-commerce, point-of-sale systems, inventory management, and connected shopping experiences.', "/assets/image-206.png", "Retail shopping platform"],
  ['Healthcare', 'Patient experiences, health tracking, care management, and connected healthcare platforms.', "/assets/levels-health/levels-health-768x702.png", "Levels Health mobile app"],
  ['Real Estate', 'Property management, branded property tours, location services, and workflow automation.', "/assets/image-203.png", "Spicerhaart property tour app"],
  ['Logistic', 'Transport planning, fleet coordination, shipment tracking, and supply chain software.', "/assets/My-Tutor-768x702(1).png", "Alvarez and Marsal logistics platform"],
  ['Recruitment', 'Candidate management, hiring workflows, interview scheduling, and recruitment automation.', "/assets/My-Tutor-2-768x702.png", "Imagine recruitment platform"],
  ['Manufacturing', 'Production planning, quality control, inventory tracking, and operational reporting.', "/assets/projects/My-Tutor-3-480x439.png", "ProQC quality inspection platform"],
];

export default function Industries() {
  return <section className="group-block industry-carousel" aria-labelledby="build-and-scale-with-us-in-your-domain">
    <div className="container">
      <div className="block-header">
        <h2 id="build-and-scale-with-us-in-your-domain" className="block-title">Build and scale with me in your domain</h2>
        <hr className="block-header__separator" />
      </div>
      <div className="industry-carousel__controls">
        <button className="swiper-button-prev" aria-label="Previous industries"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5m7-7-7 7 7 7" /></svg></button>
        <button className="swiper-button-next" aria-label="Next industries"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7" /></svg></button>
      </div>
      <div className="swiper">
        <div className="swiper-wrapper">
          {industries.map(([name, description, image, alt]) => <div className="swiper-slide" key={name}>
            <article className="industry-carousel__card">
              <h3>{name}</h3>
              <p>{description}</p>
              <img className="industry-carousel__image" src={image} alt={alt} loading="lazy" />
            </article>
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}
