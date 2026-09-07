import Link from 'next/link';
import CaseStudyNavigation from './CaseStudyNavigation';
export default function CaseContent() {
 return (
<section className={"post-section"}><div className={"container"}><div className={"flex post-section__flex"}><div className={"post-sidebar"}><div className={"post-sidebar__inner"}><div className={"post-index"} data-content={"#postContent .post-content__inner"}><CaseStudyNavigation />
</div>
</div>
</div>
<div id={"postContent"} className={"post-content post-content--case_study"}><div className={"post-content__inner typo"}><div className={"case-info card-block"}><h2 className={"case-info__title"} data-target={"0"} id={"about-the-client"}>{"About the client"}</h2>
<div className={"case-info__description typo"}><p><a href={"https://www.mytutor.co.uk/"} target={"_blank"} rel={"nofollow noopener"}>{"MyTutor"}</a>
{" is a UK-based online tutoring platform that connects school pupils with tutors from top UK universities for one-to-one, curriculum-aligned lessons. Focused on making life-changing learning more accessible, MyTutor works directly with families and schools to close attainment gaps, boost confidence, and improve exam results. The platform combines expert tutors, an interactive online lesson space, and data-driven insights, and has delivered millions of lessons to students across the UK."}</p>
</div>
<div className={"tags case-info__tags"}>
<span className={"tag case-info__tag"}>{"Business analysis"}</span>

<span className={"tag case-info__tag"}>{"DevOps"}</span>

<span className={"tag case-info__tag"}>{"QA/QC"}</span>

<span className={"tag case-info__tag"}>{"UI/UX Design"}</span>

<span className={"tag case-info__tag"}>{"Web development"}</span>
</div>
</div>
<div className={"case-info__grid grid"}><div className={"grid-item"}><div className={"case-info__meta card-block"}>
<svg className={"icon"}>
<use href={"/assets/sprite.svg#icon-company"}></use>

</svg>
<strong className="case-info__meta-span">EdTech</strong>
</div>
</div>
<div className={"grid-item"}><div className={"case-info__meta card-block"}>
<svg className={"icon"}>
<use href={"/assets/sprite.svg#icon-location"}></use>

</svg>
<span className={"case-info__meta-span"}>{"UK"}</span>
</div>
</div>
<div className={"grid-item"}><div className={"case-info__meta card-block"}>
<svg className={"icon"}>
<use href={"/assets/sprite.svg#icon-calendar"}></use>

</svg>
<span className={"case-info__meta-span"}>{"2021 — 2025"}</span>
</div>
</div>
<div className={"grid-item"}><div className={"case-info__meta card-block"}>
<span className={"case-info__meta-label"}>{"1,500+"}</span>
<span className={"case-info__meta-value"}>{"schools trust the client"}</span>
</div>
</div>
<div className={"grid-item"}><div className={"case-info__meta card-block"}>
<span className={"case-info__meta-label"}>{"4M+ "}</span>
<span className={"case-info__meta-value"}>{"lessons delivered"}</span>
</div>
</div>
<div className={"grid-item"}><div className={"case-info__meta card-block"}>
<span className={"case-info__meta-label"}>{"250k+ "}</span>
<span className={"case-info__meta-value"}>{"learners supported"}</span>
</div>
</div>
</div>
<h2 id={"business-context"} className={"wp-block-heading has-large-font-size"} data-target={"1"}>{"Business context"}</h2>
<hr className={"wp-block-separator has-alpha-channel-opacity"} />
<p className={"wp-block-paragraph"}>{"MyTutor has been shaping the online tutoring market since 2011, helping schools, students, and private tutors deliver more personalized learning. As demand grew in both the UK and US, the company saw an opportunity to launch a white-label, on-demand tutoring platform for the US market and, in parallel, modernize its core product."}</p>
<p className={"wp-block-paragraph"}>{"Having already collaborated with MyTutor on two educational platforms from MVP to full-scale release, I was brought in to extend the partnership across four workstreams: two dedicated to US solutions and two focused on the UK platform and legacy modernization. The joint goal was to build a scalable, secure, and integration-ready ecosystem that could support school partnerships at scale, accelerate releases, and continuously improve the learning experience based on real user feedback."}</p>
<section className={"grid-wrapper"} style={{}}><div className={"block-header"}><div className={"heading-with-button"}><div className={"heading-with-button__inner"}><h2 id={"challenges"} className={"block-title"} data-target={"2"}>{" Challenges"}</h2>
</div>
</div>
<hr className={"block-header__separator"} />

</div>
<div id={""} className={"grid-block grid typo grid--columns-2"} style={{"--cols": "2", "--cgap": ".5rem", "--rgap": ".5rem"}}><div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/clock.svg#icon"}></use>
</svg>
</div>
<h3 id={"release-strategy-under-tight-deadlines"} className={"wp-block-heading has-small-font-size"}><strong>{"Release strategy under tight deadlines"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"MyTutor needed a clear way to plan and ship releases fast across multiple markets and workstreams. The team had to keep quality high while delivering new functionality in very short cycles."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/package.svg#icon"}></use>
</svg>
</div>
<h3 id={"custom-solutions-for-complex-needs"} className={"wp-block-heading has-small-font-size"}><strong>{"Custom solutions for complex needs"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"The platform required smart, sometimes experimental custom features to cover different subjects, learning approaches, and white-label use cases. Each solution had to fit into an already evolving ecosystem without overcomplicating the experience."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/world-connection.svg#icon"}></use>
</svg>
</div>
<h3 id={"third-party-integrations"} className={"wp-block-heading has-small-font-size"}><strong>{"Third-party integrations"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"With payments, authentication, video, analytics, HR, and school infrastructure tools all connected, MyTutor had to ensure that every integration was both secure and performant, without slowing down the platform."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/people-02.svg#icon"}></use>
</svg>
</div>
<h3 id={"scaling-a-multi-role-platform"} className={"wp-block-heading has-small-font-size"}><strong>{"Scaling a multi-role platform"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"The system had to support tutors, students, schools, and admins in both the UK and US, while staying flexible enough for future growth. This created pressure on architecture, data flows, and UX consistency across all roles and regions."}</p>
</div>
</div>
</div>
</section>
<p className={"has-small-font-size wp-block-paragraph"}></p>
<div className="project-solutions"><h2 id={"solutions-we-implemented"} className={"wp-block-heading has-large-font-size"} data-target={"3"}>{"Solutions I implemented"}</h2>
<hr className="solutions-divider" />

<h4 id={"agile-delivery-across-multiple-markets"} className={"wp-block-heading has-small-font-size"}>{"Agile delivery across multiple markets"}</h4>
<p className={"wp-block-paragraph"}>{"MyTutor and I organized work into 4 product streams (two for the US and two for the UK), using Scrum for fast, demo-ready releases and Kanban for continuous legacy cleanup. This mix allowed the teams to ship new functionality quickly while steadily improving the existing platform."}</p>
<h4 id={"discovery-and-product-design-grounded-in-real-usage"} className={"wp-block-heading has-small-font-size"}>{"Discovery and product design grounded in real usage"}</h4>
<p className={"wp-block-paragraph"}>{"From the start, the teams ran full business analysis: requirements collection, concepts, mockups, WBS, and user stories. UX/UI design focused on creating engaging, intuitive flows for tutors, students, schools, and administrators, with white-label needs shaped by real user feedback rather than assumptions."}</p>
<h4 id={"cloud-native-architecture-built-for-scale"} className={"wp-block-heading has-small-font-size"}>{"Cloud-native architecture built for scale"}</h4>
<p className={"wp-block-paragraph"}>{"To keep up with MyTutor’s constant evolution, the platform moved from a fast-launch monolith to a microservices architecture on AWS. Serverless and event-driven components ensured resilience, scalability, and continuous delivery of new integrations and business features."}</p>
<h4 id={"robust-engineering-and-quality-assurance"} className={"wp-block-heading has-small-font-size"}>{"Robust engineering and quality assurance"}</h4>
<p className={"wp-block-paragraph"}>{"React on the frontend and Java-based services on the backend created a flexible, high-performance core with wide integration potential. I supported this with comprehensive QA: functional and non-functional testing, smoke and regression runs, plus performance and load testing supported by growing test automation."}<br />
</p>
</div>
<section id={""} className={"banner banner-content-block adaptive-simple-bg ta-left"} style={{}}><div className={"container"}><div className={"banner-content__inner"}><div className={"banner-content__background"}><img decoding={"async"} src={"/assets/mytutor/contact-banner.png"} alt={"contact banner"} loading={"lazy"} title={"MyTutor: Online tutoring platform 2"} />
</div>
<div className={"banner-content__overlay"}></div>
<div className={"banner-content__main"}><h3 className={"banner-content__title size-medium"}>{"Build your next product with confidence"}</h3>
<div className={"banner-content__text"}><p>{"Work with me to build secure, scalable software through clear communication and dependable delivery."}</p>
</div>
<Link className="btn btn-blue btn-large" href="/contact">Let's Talk <span aria-hidden="true">&#8599;</span></Link>


</div>
</div>
</div>
</section>
<p className={"has-small-font-size wp-block-paragraph"}></p>
<section className={"grid-wrapper"} style={{}}><div className={"block-header"}><div className={"heading-with-button"}><div className={"heading-with-button__inner"}><h2 id={"features"} className={"block-title"} data-target={"4"}>{" Features"}</h2>
</div>
</div>
<hr className={"block-header__separator"} />

</div>
<div id={""} className={"grid-block grid typo grid--columns-2"} style={{"--cols": "2", "--cgap": ".5rem", "--rgap": ".5rem"}}><div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img decoding={"async"} width={"2480"} height={"1600"} src={"/assets/mytutor/Picture-3.png"} alt={"Picture 3"} className={"wp-image-3430"} title={"MyTutor: Online tutoring platform 3"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h3 id={"secure-payments-data-protection"} className={"wp-block-heading has-small-font-size"}><strong>{"Secure payments & data protection"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"The platform supports a simple, secure payment flow with protection for both personal and financial data. Third-party connections are configured to keep sensitive information safe while enabling smooth transactions."}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img decoding={"async"} width={"2480"} height={"1600"} src={"/assets/mytutor/Picture-4.png"} alt={"Picture 4"} className={"wp-image-3432"} title={"MyTutor: Online tutoring platform 4"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h3 id={"custom-video-lesson"} className={"wp-block-heading has-small-font-size"}><strong>{"Custom video lesson "}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"Custom, secured APIs power online lessons and handle automated connections to Zoom. Tutors and students can join sessions directly from the platform, without juggling external tools or manual links."}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/mytutor/Picture-5.png"} alt={"Picture 5"} className={"wp-image-3433"} title={"MyTutor: Online tutoring platform 5"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h3 id={"schedule-class-management"} className={"wp-block-heading has-small-font-size"}><strong>{"Schedule & class management"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"A built-in scheduling system handles timetables, group creation, grade-level segmentation, and subgrouping. Automated schedule generation, group classes, and tutor availability dashboards give schools full control over how learning is organized."}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/mytutor/Picture-6.png"} alt={"Picture 6"} className={"wp-image-3434"} title={"MyTutor: Online tutoring platform 6"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h3 id={"devices-synchronization"} className={"wp-block-heading has-small-font-size"}><strong>{"Devices synchronization"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"Sessions and learning data stay in sync across devices, providing a consistent experience whether students and tutors are in-person, remote, or working in a hybrid format. This helps maintain a smooth, collaborative flow in every lesson format."}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/mytutor/Picture-7.png"} alt={"Picture 7"} className={"wp-image-3435"} title={"MyTutor: Online tutoring platform 7"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h3 id={"lesson-space"} className={"wp-block-heading has-small-font-size"}><strong><strong>{"Lesson space"}</strong>
</strong>
</h3>
<p className={"wp-block-paragraph"}>{"Each lesson space includes live tutoring, voice chat, a shared virtual whiteboard, document upload, and access to a video library. All tools are available in one place to keep sessions interactive and focused."}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><figure className={"wp-block-image size-large"}><img loading={"lazy"} decoding={"async"} width={"1024"} height={"661"} src={"/assets/mytutor/Picture-20-1024x661.png"} alt={"Picture 20"} className={"wp-image-6083"} title={"MyTutor: Online tutoring platform 8"} />
</figure>
<h3 id={"high-level-security"} className={"wp-block-heading has-small-font-size"}><strong><strong><strong>{"High-level security"}</strong>
</strong>
</strong>
</h3>
<p className={"wp-block-paragraph"}>{"The platform relies on AWS-based cloud security and is reinforced through penetration testing and trusted third-party services. Data protection is built into the architecture to meet strict security expectations from schools and parents."}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top wp-block-geniusee-card"}><figure className={"wp-block-image size-large"}><img loading={"lazy"} decoding={"async"} width={"1024"} height={"661"} src={"/assets/mytutor/Picture-17-1024x661.png"} alt={"Picture 17"} className={"wp-image-6085"} title={"MyTutor: Online tutoring platform 9"} />
</figure>
<h3 id={"admin-panel"} className={"wp-block-heading has-small-font-size"}>{"Admin panel"}</h3>
<p className={"wp-block-paragraph"}>{"The panel allows users to create and upload groups via CSV files, assign tutors, manage other users, and change schedules and timetables."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top wp-block-geniusee-card"}><figure className={"wp-block-image size-large"}><img loading={"lazy"} decoding={"async"} width={"1024"} height={"661"} src={"/assets/mytutor/Picture-18-1024x661.png"} alt={"Picture 18"} className={"wp-image-6086"} title={"MyTutor: Online tutoring platform 10"} />
</figure>
<h3 id={"analytics"} className={"wp-block-heading has-small-font-size"}>{"Analytics"}</h3>
<p className={"wp-block-paragraph"}>{"I realized interactive dashboards and built-in connection with Google Analytics to enable users see outcomes and synchronize them with other data sources."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top wp-block-geniusee-card"}><figure className={"wp-block-image size-large"}><img loading={"lazy"} decoding={"async"} width={"1024"} height={"661"} src={"/assets/mytutor/Picture-19-1024x661.png"} alt={"Picture 19"} className={"wp-image-6087"} title={"MyTutor: Online tutoring platform 11"} />
</figure>
<h3 id={"third-party-integrations"} className={"wp-block-heading has-small-font-size"}>{"Third-party integrations"}</h3>
<ul className={"wp-block-list"}><li>{"Clever for infrastructure support"}</li>
<li>{"ADP for payments"}</li>
<li>{"SparkHire to connect with social media"}</li>
<li>{"GA for analytics"}</li>
<li>{"AWS Amplify for authentication"}</li>
</ul>
</div>
</div>
</div>
</section>
<section className={"grid-wrapper"} style={{}}><div className={"block-header"}><div className={"heading-with-button"}><div className={"heading-with-button__inner"}><h2 id={"results"} className={"block-title"} data-target={"5"}>{" Results"}</h2>
</div>
</div>
<hr className={"block-header__separator"} />

</div>
<div id={""} className={"grid-block grid typo grid--columns-2"} style={{"--cols": "2", "--cgap": ".5rem", "--rgap": ".5rem"}}><div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/number-two-square.svg#icon"}></use>
</svg>
</div>
<h4 id={"fast-mvp-launch"} className={"wp-block-heading has-small-font-size heading-margin-m"}><strong>{"Fast MVP launch"}</strong>
</h4>
<p className={"paragraph-margin-m wp-block-paragraph"}>{"The first live version of the platform was delivered in just two months, giving MyTutor a working product to test with real users and iterate on quickly."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/building.svg#icon"}></use>
</svg>
</div>
<h4 id={"scalable-architecture"} className={"wp-block-heading has-small-font-size heading-margin-m"}><strong>{"Scalable architecture"}</strong>
</h4>
<p className={"paragraph-margin-m wp-block-paragraph"}>{"The solution evolved from a fast-launch monolith into a microservices, serverless setup on AWS, ready to support new features, markets, and white-label products."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/3d-glasses.svg#icon"}></use>
</svg>
</div>
<h4 id={"user-driven-ux"} className={"wp-block-heading has-small-font-size heading-margin-m"}><strong>{"User-driven UX"}</strong>
</h4>
<p className={"paragraph-margin-m wp-block-paragraph"}>{"Interfaces for students, tutors, schools, and admins were refined based on real feedback, resulting in an experience that works in everyday classroom use, not just on paper."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/security-cam-02.svg#icon"}></use>
</svg>
</div>
<h4 id={"embedded-security"} className={"wp-block-heading has-small-font-size heading-margin-m"}><strong>{"Embedded security"}</strong>
</h4>
<p className={"paragraph-margin-m wp-block-paragraph"}>{"Security and data protection were built into the platform via cloud security, third-party services, and strict handling of student and payment data."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/building-vihara.svg#icon"}></use>
</svg>
</div>
<h4 id={"trusted-by-schools"} className={"wp-block-heading has-small-font-size heading-margin-m"}><strong><strong>{"Trusted by schools"}</strong>
</strong>
</h4>
<p className={"paragraph-margin-m wp-block-paragraph"}>{"The platform underpins a tutoring ecosystem used by 1,300+ secondary schools, supporting large-scale school programmes alongside individual learners."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/camera-lens.svg#icon"}></use>
</svg>
</div>
<h4 id={"unified-ecosystem"} className={"wp-block-heading has-small-font-size heading-margin-m"}><strong><strong>{"Unified ecosystem"}</strong>
</strong>
</h4>
<p className={"paragraph-margin-m wp-block-paragraph"}>{"MyTutor gained centralized access to multiple assets, integrations, and products, making it easier to manage growth across both UK and US markets."}</p>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</section>

 );
}
