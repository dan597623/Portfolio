import CaseStudyNavigation from './CaseStudyNavigation';
export default function CaseContent() {
 return (
<section className={"post-section"}><div className={"container"}><div className={"flex post-section__flex"}><div className={"post-sidebar"}><div className={"post-sidebar__inner"}><div className={"post-index"} data-content={"#postContent .post-content__inner"}><CaseStudyNavigation />
</div>
</div>
</div>
<div id={"postContent"} className={"post-content post-content--case_study"}><div className={"post-content__inner typo"}><div className={"case-info card-block"}><h2 className={"case-info__title"} data-target={"0"} id={"about-the-client"}>{"About the client"}</h2>
<div className={"case-info__description typo"}><p><a href={"https://servicefirstpermits.net/"} target={"_blank"} rel={"nofollow noopener"}><span style={{"fontWeight": "400"}}>{"Service First Permits (SFP)"}</span>
</a>
<span style={{"fontWeight": "400"}}>{" is one of the leading permit management providers in the United States. The company partners with construction teams, architects, and developers to oversee every stage of the permitting process — from initial strategy to final approval. SFP coordinates with design teams, prepares documentation in compliance with regional requirements, submits to jurisdictions, and manages the full review cycle. Their goal is simple: make the permitting journey faster, clearer, and less resource-intensive for their clients."}</span>
</p>
<p><span style={{"fontWeight": "400"}}>{"I partnered with Service First Permits to build Permio — an AI-powered platform that automates permit workflows, digitizes documentation, and accelerates approvals across 240+ jurisdictions and 380+ agencies."}</span>
</p>
</div>
<div className={"tags case-info__tags"}>
<span className={"tag case-info__tag"}>{"Construction"}</span>

<span className={"tag case-info__tag"}>{"Data engineering"}</span>

<span className={"tag case-info__tag"}>{"DevOps"}</span>

<span className={"tag case-info__tag"}>{"Discovery phase"}</span>

<span className={"tag case-info__tag"}>{"Project management"}</span>

<span className={"tag case-info__tag"}>{"QA/QC"}</span>

<span className={"tag case-info__tag"}>{"Web development"}</span>
</div>
</div>
<div className={"case-info__grid grid"}><div className={"grid-item"}><div className={"case-info__meta card-block"}>
<svg className={"icon"}>
<use href={"/assets/sprite.svg#icon-company"}></use>

</svg>
<span className={"case-info__meta-span"}>{"Manufacturing"}</span>
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
<span className={"case-info__meta-span"}>{"2023-2025"}</span>
</div>
</div>
</div>
<h2 id={"business-context"} className={"wp-block-heading has-large-font-size"} data-target={"1"}>{"Business context"}</h2>
<hr className={"wp-block-separator has-alpha-channel-opacity"} />
<p className={"wp-block-paragraph"}>{"SFP approached me with a goal to digitize and automate core parts of their permitting process. Their clients needed a modern, intuitive platform to access up-to-date information on region-specific requirements, permit statuses, documentation workflows, and timelines."}</p>
<p className={"wp-block-paragraph"}>{"In addition, the company wanted to introduce an AI assistant to help process tasks in parallel, accelerating permit acquisition and reducing the reliance on manual work."}</p>
<section className={"grid-wrapper"} style={{}}><div className={"block-header"}><div className={"heading-with-button"}><div className={"heading-with-button__inner"}><h2 id={"challenges"} className={"block-title"} data-target={"2"}>{" Challenges"}</h2>
</div>
</div>
<hr className={"block-header__separator"} />
<p className={"block-description block-description--bottom"}>{"The client  faced several critical challenges with their existing recruitment infrastructure:"}</p>

</div>
<div id={""} className={"grid-block grid typo grid--columns-2"} style={{"--cols": "2", "--cgap": ".5rem", "--rgap": ".5rem"}}><div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/hand-hold.svg#icon"}></use>
</svg>
</div>
<p className={"has-large-font-size wp-block-paragraph"}><strong>{"Heavy manual workflows"}</strong>
</p>
<p className={"wp-block-paragraph"}>{"The permitting process involved numerous repetitive tasks and unstructured data handling, which limited scalability."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/equalizer-02.svg#icon"}></use>
</svg>
</div>
<p className={"has-large-font-size wp-block-paragraph"}><strong>{"Delays due to lack of parallelization"}</strong>
</p>
<p className={"wp-block-paragraph"}>{"Core tasks couldn’t run concurrently delaying permit review, document prep, and client coordination."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/jar-02.svg#icon"}></use>
</svg>
</div>
<p className={"has-large-font-size wp-block-paragraph"}><strong>{"No comparable digital solution on the market"}</strong>
</p>
<p className={"wp-block-paragraph"}>{"SFP needed to build a custom system from scratch, tailored to their internal logic and compliance needs."}</p>
</div>
</div>
</div>
</section>
<p className={"has-small-font-size wp-block-paragraph"}></p>
<div className="project-solutions"><h2 id={"solutions-we-implemented"} className={"wp-block-heading has-large-font-size"} data-target={"3"}>{"Solutions I implemented"}</h2>
<hr className="solutions-divider" />

<p className={"wp-block-paragraph"}>{"I collaborated closely with Service First Permits through regular planning and technical discussions. I worked with client stakeholders to clarify requirements, resolve blockers, and adapt to shifting priorities. This iterative communication kept my implementation aligned with the permitting workflows. Below are the key solutions I contributed to:"}</p>
<h3 id={"workflow-automation-and-third-party-integrations"} className={"wp-block-heading has-small-font-size"}><strong>{"Workflow automation and third-party integrations"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"I connected Google Maps for accurate location-based project management and integrated Google Analytics to capture user behavior insights. The platform also included automated billing and usage tracking to simplify operational oversight."}<br />
</p>
<h3 id={"custom-data-dashboards-and-analytics"} className={"wp-block-heading has-small-font-size"}><strong>{"Custom data dashboards and analytics"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"To support better decision-making, I implemented analytics dashboards with visual charts using MUI X-Charts. These included usage tracking, project analytics, and tailored reporting components to provide clients with real-time visibility into key metrics."}<br />
</p>
<h3 id={"real-time-project-updates-and-notifications"} className={"wp-block-heading has-small-font-size"}><strong>{"Real-time project updates and notifications"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"Using TanStack Query, I built a system for efficient data synchronization. This included automated activity tracking, audit trails, and a notification system to keep all project stakeholders informed of real-time changes."}<br />
</p>
<h3 id={"project-scheduling-and-visual-task-planning"} className={"wp-block-heading has-small-font-size"}><strong>{"Project scheduling and visual task planning"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"To address project management complexity, I implemented interactive Gantt chart components, enabled task dependencies, and integrated calendars for streamlined timeline tracking."}<br />
</p>
<h3 id={"ai-powered-communication-and-collaboration"} className={"wp-block-heading has-small-font-size"}><strong>{"AI-powered communication and collaboration"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"I built a robust AI-enhanced chat system using LangChain. The system included real-time messaging, thread management, and @mentions for smoother team coordination. This allowed users to manage conversations around projects and document contextually."}<br />
</p>
<h3 id={"centralized-document-management-with-smart-pdf-handling"} className={"wp-block-heading has-small-font-size"}><strong>{"Centralized document management with smart PDF handling"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"Leveraging Firebase and PDFSlick, I developed a centralized file storage system with drag-and-drop uploads, PDF previews, and signature status detection. This allowed users to process and review key permit documents directly within the platform."}<br />
</p>
<h3 id={"user-management-and-onboarding"} className={"wp-block-heading has-small-font-size"}><strong>{"User management and onboarding"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"I implemented key onboarding and access features, including user registration, Google sign-in, email verification, profile setup, and invitation-based user addition. These streamlined team access and ensured secure participation in workflows."}</p>
</div>
<section id={""} className={"banner banner-content-block adaptive-simple-bg ta-left"} style={{}}><div className={"container"}><div className={"banner-content__inner"}><div className={"banner-content__background"}><img decoding={"async"} src={"/assets/permio/contact-banner.png"} alt={"contact banner"} loading={"lazy"} title={"Permio: AI-powered permit workflows for Service First Permits 2"} />
</div>
<div className={"banner-content__overlay"}></div>
<div className={"banner-content__main"}><h3 className={"banner-content__title size-medium"}>{"Build your next product with confidence"}</h3>
<div className={"banner-content__text"}><p>{"Work with me to build secure, scalable software through clear communication and dependable delivery."}</p>
</div>
<a className="btn btn-blue btn-large" href="/contact">Let's Talk <span aria-hidden="true">&#8599;</span></a>


</div>
</div>
</div>
</section>
<p className={"has-small-font-size wp-block-paragraph"}></p>
<section className={"grid-wrapper"} style={{}}><div className={"block-header"}><div className={"heading-with-button"}><div className={"heading-with-button__inner"}><h2 id={"features"} className={"block-title"} data-target={"4"}>{" Features"}<br />
<br />
</h2>
</div>
</div>
<hr className={"block-header__separator"} />

</div>
<div id={""} className={"grid-block grid typo grid--columns-2"} style={{"--cols": "2", "--cgap": ".5rem", "--rgap": ".5rem"}}><div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img decoding={"async"} width={"2480"} height={"1600"} src={"/assets/permio/Picture-5.png"} alt={"Picture 5"} className={"wp-image-3683"} title={"Permio: AI-powered permit workflows for Service First Permits 3"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h3 id={"ai-powered-chat-assistant"} className={"wp-block-heading has-small-font-size"}><strong><strong><strong>{"AI-powered chat assistant"}</strong>
</strong>
</strong>
</h3>
<p className={"wp-block-paragraph"}>{"Context-aware messaging, threaded discussions, file sharing, and smart replies tailored to project data"}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img decoding={"async"} width={"2480"} height={"1600"} src={"/assets/permio/Picture-6.png"} alt={"Picture 6"} className={"wp-image-3684"} title={"Permio: AI-powered permit workflows for Service First Permits 4"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h4 id={"advanced-pdf-management"} className={"wp-block-heading has-small-font-size"}><strong><strong>{"Advanced PDF management"}</strong>
</strong>
</h4>
<p className={"wp-block-paragraph"}>{"Preview, annotate, edit, and collaborate on documents in-browser with version control and multi-format support"}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/permio/Picture-7.png"} alt={"Picture 7"} className={"wp-image-3685"} title={"Permio: AI-powered permit workflows for Service First Permits 5"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h4 id={"visual-scheduling-tools"} className={"wp-block-heading has-small-font-size"}><strong>{"Visual scheduling tools"}</strong>
</h4>
<p className={"wp-block-paragraph"}>{"Gantt charts, calendar integration, and task dependency views to streamline team coordination"}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/permio/Picture-8.png"} alt={"Picture 8"} className={"wp-image-3688"} title={"Permio: AI-powered permit workflows for Service First Permits 6"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h3 id={"real-time-updates-and-alerts"} className={"wp-block-heading has-small-font-size"}><strong>{"Real-time updates and alerts"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"Notifications for document changes, project status, team mentions, and audit events"}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/permio/Picture-9.png"} alt={"Picture 9"} className={"wp-image-3689"} title={"Permio: AI-powered permit workflows for Service First Permits 7"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h3 id={"analytics-and-reporting-dashboards"} className={"wp-block-heading has-small-font-size"}><strong>{"Analytics and reporting dashboards"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"Track usage, identify bottlenecks, and generate reports for operational oversight"}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/permio/Picture-10.png"} alt={"Picture 10"} className={"wp-image-3690"} title={"Permio: AI-powered permit workflows for Service First Permits 8"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h3 id={"multi-user-onboarding"} className={"wp-block-heading has-small-font-size"}><strong>{"Multi-user onboarding"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"Easy registration, Google sign-in, email invites, and permission-based access control"}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/permio/Picture-11.png"} alt={"Picture 11"} className={"wp-image-3692"} title={"Permio: AI-powered permit workflows for Service First Permits 9"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h3 id={"map-and-location-support"} className={"wp-block-heading has-small-font-size"}><strong>{"Map and location support"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"Integrated Google Maps to manage jurisdiction-specific projects and data"}</p>
</div>
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
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/speedometer.svg#icon"}></use>
</svg>
</div>
<p className={"has-large-font-size paragraph-margin-m wp-block-paragraph"}><strong>{"AI-assisted processing reduced delays"}<br />
</strong>
</p>
<p className={"has-large-font-size paragraph-margin-m wp-block-paragraph"}>{"Tasks that previously required manual follow-up were handled in parallel via the AI assistant, improving processing time by up to "}<strong>{"200%"}</strong>
{"."}</p>
<p className={"has-large-font-size paragraph-margin-m wp-block-paragraph"}></p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/optimization-shield.svg#icon"}></use>
</svg>
</div>
<p className={"has-large-font-size paragraph-margin-m wp-block-paragraph"}><strong>{"Digitized submittal workflows"}</strong>
<strong><br />
</strong>
</p>
<p className={"has-large-font-size paragraph-margin-m wp-block-paragraph"}>{"Clients could now submit documents in the correct format, track status, and receive real-time updates, cutting turnaround time significantly."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/scanner-eye.svg#icon"}></use>
</svg>
</div>
<p className={"has-large-font-size paragraph-margin-m wp-block-paragraph"}><strong>{"Document accuracy and compliance have been improved."}<br />
</strong>
</p>
<p className={"has-large-font-size paragraph-margin-m wp-block-paragraph"}>{"Smart algorithms flagged missing data and compliance risks early in the process."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/airtable.svg#icon"}></use>
</svg>
</div>
<p className={"has-large-font-size paragraph-margin-m wp-block-paragraph"}><strong><strong>{"User growth increased by 2000%"}</strong>
<br />
</strong>
</p>
<p className={"has-large-font-size paragraph-margin-m wp-block-paragraph"}>{"Enhanced UX, automation, and feature depth helped attract new users, particularly during exhibitions and post-UAT."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/cursor.svg#icon"}></use>
</svg>
</div>
<p className={"has-large-font-size paragraph-margin-m wp-block-paragraph"}><strong><strong>{"Stronger feedback from beta and UAT rounds"}</strong>
<br />
</strong>
</p>
<p className={"has-large-font-size paragraph-margin-m wp-block-paragraph"}>{"The second round of testing showed significant improvement in user experience, chat usefulness, and navigation flow."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/money-chip.svg#icon"}></use>
</svg>
</div>
<p className={"has-large-font-size paragraph-margin-m wp-block-paragraph"}><strong><strong>{"Readiness for investor discussions"}</strong>
<br />
<br />
</strong>
{"The final product enabled the client to demonstrate business scalability and product-market fit to potential investors."}</p>
</div>
</div>
</div>
</section>
<h2 id={"obstacles-geniusee-encountered"} className={"wp-block-heading"} data-target={"6"}>{"Obstacles I encountered"}</h2>
<ul className={"wp-block-list"}><li>{"Early-stage UAT failures due to incomplete features"}</li>
<li>{"Fragmented workflows and unclear feature dependencies"}</li>
<li>{"Performance issues with PDF.js and mapping libraries"}</li>
<li>{"Unstable scope and shifting priorities mid-sprint"}</li>
<li>{"Technical complexities of integrating LangChain and real-time messaging"}</li>
<li>{"Client-side requests to release before critical components were stabilized"}</li>
</ul>
<h2 id={"how-geniusee-resolved-these-issues"} className={"wp-block-heading"} data-target={"7"}>{"How I resolved these issues"}</h2>
<ul className={"wp-block-list"}><li>{"Refined key features and redefined priorities, with AI becoming central to the product"}</li>
<li>{"Streamlined processes for faster development cycles and parallel workstreams"}</li>
<li>{"Maintained close communication with the client to resolve blockers quickly"}</li>
<li>{"Introduced a structured phase 2 plan to stabilize features post-launch"}</li>
<li>{"Selected and tested the most efficient third-party libraries to reduce load times"}</li>
<li>{"Adjusted scope and designs in real time to keep the roadmap realistic and delivery-focused"}</li>
</ul>
</div>
</div>
</div>
</div>
</section>

 );
}
