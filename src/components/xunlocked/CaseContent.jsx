import Link from 'next/link';
import CaseStudyNavigation from './CaseStudyNavigation';
export default function CaseContent() {
 return (
<section className={"post-section"}><div className={"container"}><div className={"flex post-section__flex"}><div className={"post-sidebar"}><div className={"post-sidebar__inner"}><div className={"post-index"} data-content={"#postContent .post-content__inner"}><CaseStudyNavigation />
</div>
</div>
</div>
<div id={"postContent"} className={"post-content post-content--case_study"}><div className={"post-content__inner typo"}><div className={"case-info card-block"}><h2 className={"case-info__title"} data-target={"0"} id={"company-overview"}>{"Company overview"}</h2>
<div className={"case-info__description typo"}><p>{"Headquartered in the UK with a team blending education, tech, and finance expertise,"}<a href={"https://xunlocked.com/"} target={"_blank"} rel={"nofollow noopener"}>{" xUnlocked"}</a>
{" serves global tier-1 clients like Santander, Airbus, GSK, and the London Stock Exchange through specialized offerings: Finance Unlocked, Sustainability Unlocked (launched 2021), Data Unlocked, and bespoke xUnlocked Academies.​ The company has scaled rapidly, achieving a 350% average annual growth rate, and has reached 100,000 learners through interactive video courses boasting 93% completion rates. This growth is backed by £5M in Series A funding from BPP Education Group in 2023."}</p>
</div>
<div className={"tags case-info__tags"}>
<span className={"tag case-info__tag"}>{"Business analysis"}</span>

<span className={"tag case-info__tag"}>{"DevOps"}</span>

<span className={"tag case-info__tag"}>{"Project management"}</span>

<span className={"tag case-info__tag"}>{"QA/QC"}</span>

<span className={"tag case-info__tag"}>{"UI/UX Design"}</span>

<span className={"tag case-info__tag"}>{"Web development"}</span>
</div>
</div>
<div className={"case-info__grid grid"}><div className={"grid-item"}><div className={"case-info__meta card-block"}>
<svg className={"icon"}>
<use href={"/assets/sprite.svg#icon-company"}></use>

</svg>
{"Fintech"}
</div>
</div>
<div className={"grid-item"}><div className={"case-info__meta card-block"}>
<svg className={"icon"}>
<use href={"/assets/sprite.svg#icon-location"}></use>

</svg>
<span className={"case-info__meta-span"}>{"UK, USA"}</span>
</div>
</div>
<div className={"grid-item"}><div className={"case-info__meta card-block"}>
<svg className={"icon"}>
<use href={"/assets/sprite.svg#icon-calendar"}></use>

</svg>
<span className={"case-info__meta-span"}>{"2020-2025"}</span>
</div>
</div>
<div className={"grid-item"}><div className={"case-info__meta card-block"}>
<span className={"case-info__meta-label"}>{"100K+"}</span>
<span className={"case-info__meta-value"}>{" learners trained globally"}</span>
</div>
</div>
<div className={"grid-item"}><div className={"case-info__meta card-block"}>
<span className={"case-info__meta-label"}>{"93% "}</span>
<span className={"case-info__meta-value"}>{"video completion rate "}</span>
</div>
</div>
</div>
<h2 id={"customer-review"} className={"wp-block-heading has-large-font-size"} data-target={"1"}>{"Customer review"}</h2>
<hr className={"wp-block-separator has-alpha-channel-opacity"} />
<div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-left icn-top card-block--quote wp-block-geniusee-card"}><figure className={"wp-block-image size-large"}><img decoding={"async"} width={"1024"} height={"745"} src={"/assets/xunlocked/Review-1024x745.png"} alt={"Review"} className={"wp-image-5230"} title={"xUnlocked: Video learning platform for finance teams 2"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><blockquote className={"wp-block-quote card-quote is-layout-flow wp-block-quote-is-layout-flow"}><p className={"wp-block-paragraph"}>{"“Choosing to work with Daniel has been a game-changing decision for the progress of our platform. Together the people at xUnlocked and Daniel have become one big team, even a family. As CTO, it’s essential for me to have both a technically skilled and culturally integrated team, and Daniel has delivered the best. Daniel has a great personal attitude and in-depth expertise. With help of Daniel, it has allowed us to build and customize our platform fast and easily.”"}</p>
</blockquote>
<p className={"wp-block-paragraph"}><strong>{"Ciaran Rooney"}</strong>
<br />
{"xUnlocked CTO"}</p>
</div>
</div>
<h2 id={"business-context"} className={"wp-block-heading has-large-font-size"} data-target={"2"}>{"Business context"}</h2>
<hr className={"wp-block-separator has-alpha-channel-opacity"} />
<p className={"wp-block-paragraph"}>{"I worked closely with the xUnlocked team for more than three years, with transparency and regular feedback guiding the collaboration. I contributed to development under the direction of their CTO, while the client managed sales and educational content."}</p>
<p className={"wp-block-paragraph"}>{"When the work started, xUnlocked already had a video learning platform on WordPress, yet they had a goal to expand. WordPress suits small and medium-sized businesses well, but may not be the best fit for global enterprises with institutional clients. In this case, a much better solution for xUnlocked was Laravel, which also allowed me to create a completely custom design."}</p>
<section className={"grid-wrapper"} style={{}}><div className={"block-header"}><div className={"heading-with-button"}><div className={"heading-with-button__inner"}><h2 id={"challenges"} className={"block-title"} data-target={"3"}>{" Challenges"}</h2>
</div>
</div>
<hr className={"block-header__separator"} />

</div>
<div id={""} className={"grid-block grid typo grid--columns-2"} style={{"--cols": "2", "--cgap": ".5rem", "--rgap": ".5rem"}}><div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/server-worldwide.svg#icon"}></use>
</svg>
</div>
<p className={"has-extra-large-font-size wp-block-paragraph"}><strong>{"Rebuilding the platform foundation"}</strong>
</p>
<p className={"wp-block-paragraph"}>{"Migrating from WordPress to a custom Laravel architecture while redesigning the entire system, UX, and frontend experience from scratch."}<br />
</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/website-search.svg#icon"}></use>
</svg>
</div>
<p className={"has-extra-large-font-size wp-block-paragraph"}><strong>{"Scaling into a multi-domain ecosystem"}</strong>
</p>
<p className={"wp-block-paragraph"}>{"Transforming the product from a finance-only platform into a unified environment supporting Finance, Sustainability, and Data Analysis, with consistent UX and scalable content structures."}<br />
</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/users-03.svg#icon"}></use>
</svg>
</div>
<p className={"has-extra-large-font-size wp-block-paragraph"}><strong>{"Enterprise-grade personalization & integrations"}</strong>
</p>
<p className={"wp-block-paragraph"}>{"Enabling secure third-party connections, SSO, custom branding, and flexible team structures to meet the requirements of large institutional clients."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/cloud-data.svg#icon"}></use>
</svg>
</div>
<p className={"has-extra-large-font-size wp-block-paragraph"}><strong>{"Data-driven learning operations"}</strong>
</p>
<p className={"wp-block-paragraph"}>{"Establishing clear analytics, team-wide assignment workflows, and actionable insights to support administrators, managers, and learners at scale."}</p>
</div>
</div>
</div>
</section>
<p className={"has-small-font-size wp-block-paragraph"}></p>
<div className="project-solutions"><h2 id={"solutions-we-implemented"} className={"wp-block-heading has-large-font-size"} data-target={"4"}>{"Solutions I implemented"}</h2>
<hr className="solutions-divider" />

<h3 id={"platform-re-engineering-architecture-modernization"} className={"wp-block-heading has-small-font-size"}><strong>{"Platform re-engineering & architecture modernization"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"I rebuilt the legacy WordPress solution into a scalable Laravel + React ecosystem. This included:"}</p>
<ul className={"wp-block-list"}><li>{"Strong DevOps foundation ready for SOC2-aligned scaling and throughput demands"}</li>
<li>{"Completely redesigned UI/UX and system architecture"}</li>
<li>{"A modular frontend based on React components"}</li>
<li>{"A new Laravel MVC backend for content, user, and subscription management"}</li>
<li>{"Nine beta environments for safe parallel development and uninterrupted production"}</li>
</ul>
<h3 id={"multi-domain-product-evolution"} className={"wp-block-heading has-small-font-size"}><strong>{"Multi-domain product evolution"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"I transformed xUnlocked from a single-domain finance platform into a unified, multi-domain learning suite."}<br />
{"Core work included:"}</p>
<ul className={"wp-block-list"}><li>{"Cross-domain data models and unified content architecture"}</li>
<li>{"Consistent UX patterns adaptable across Finance, Sustainability, and Data Analysis"}</li>
<li>{"Centralized navigation, filtering, and discovery tools"}</li>
<li>{"Foundations enabling rapid rollout of vertical platforms like Sustainability Unlocked"}</li>
</ul>
<h3 id={"enterprise-grade-customization-integrations-security"} className={"wp-block-heading has-small-font-size"}><strong>{"Enterprise-grade customization, integrations & security"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"To support institutional clients, I built a flexible, secure environment with deep enterprise personalization."}<br />
{"Delivered capabilities:"}</p>
<ul className={"wp-block-list"}><li>{"SSO via Auth0 and SAML"}</li>
<li>{"ChargeBee integration for subscription billing"}</li>
<li>{"Tenant-level branding (logos, labels, custom libraries)"}</li>
<li>{"Role-based access and advanced team structures"}</li>
<li>{"Admin and support tools for content, customers, and learning workflows"}</li>
</ul>
<h3 id={"data-driven-learning-operations-assignment-engine"} className={"wp-block-heading has-small-font-size"}><strong>{"Data-driven learning operations & assignment engine"}</strong>
</h3>
<p className={"wp-block-paragraph"}>{"I implemented a comprehensive analytics and assignment system enabling managers and learners to operate with precision."}<br />
{"This included:"}</p>
<ul className={"wp-block-list"}><li>{"Assignment engine with video, course, pathway, and goal-based tasks (hours/credits)"}</li>
<li>{"Manager dashboards with engagement insights (activity, attendance, completion, time)"}</li>
<li>{"Learner analytics showing progress, pacing, hours, and upcoming goals"}</li>
<li>{"Continuous testing (regression, localization, load) and migration to automation"}</li>
<li>{"UX/UI refinement driven by real learner interviews"}</li>
</ul>
</div>
<section id={""} className={"banner banner-content-block adaptive-simple-bg ta-left"} style={{}}><div className={"container"}><div className={"banner-content__inner"}><div className={"banner-content__background"}><img decoding={"async"} src={"/assets/xunlocked/contact-banner.png"} alt={"contact banner"} loading={"lazy"} title={"xUnlocked: Video learning platform for finance teams 3"} />
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
<section className={"grid-wrapper"} style={{}}><div className={"block-header"}><div className={"heading-with-button"}><div className={"heading-with-button__inner"}><h2 id={"features"} className={"block-title"} data-target={"5"}>{" Features"}</h2>
</div>
</div>
<hr className={"block-header__separator"} />

</div>
<div id={""} className={"grid-block grid typo grid--columns-2"} style={{"--cols": "2", "--cgap": ".5rem", "--rgap": ".5rem"}}><div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img decoding={"async"} width={"2480"} height={"1600"} src={"/assets/xunlocked/Picture-6.png"} alt={"Picture 6"} className={"wp-image-5044"} title={"xUnlocked: Video learning platform for finance teams 4"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h4 id={"analytics"} className={"wp-block-heading has-small-font-size"}><strong>{"Analytics"}</strong>
</h4>
<p className={"wp-block-paragraph"}>{"The platform provides comprehensive visibility into learning performance, allowing managers to track overall team progress as well as drill into individual activity. Engagement can be monitored by hours spent, login frequency, last visit, earned credits, and completion rates. An interactive analytics dashboard also showcases detailed video performance insights, helping organizations understand how content drives real learner outcomes."}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/xunlocked/Picture-1-3.png"} alt={"Picture 1 3"} className={"wp-image-5046"} title={"xUnlocked: Video learning platform for finance teams 5"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h4 id={"various-assignments"} className={"wp-block-heading has-small-font-size"}><strong>{"Various assignments"}</strong>
</h4>
<p className={"wp-block-paragraph"}>{"The platform offers multiple types of learning tasks that enable managers to direct and structure employee development. Managers can assign specific videos or courses, set learning goals based on required hours or credits, and guide their teams through a clear, measurable learning pathway. This functionality ensures a more controlled, goal-oriented learning process and provides visibility into how each employee progresses toward defined targets."}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/xunlocked/Picture-2-2.png"} alt={"Picture 2 2"} className={"wp-image-5047"} title={"xUnlocked: Video learning platform for finance teams 6"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h4 id={"navigation"} className={"wp-block-heading has-small-font-size"}><strong>{"Navigation"}</strong>
</h4>
<p className={"wp-block-paragraph"}>{"The platform offers a clean, intuitive UI/UX designed for effortless discovery. Learners can refine their search by duration, topic, or expert, and browse content organized by categories, trends, pathways, or recently added items. This structured navigation helps users quickly find the material most relevant to their goals."}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/xunlocked/Picture-7.png"} alt={"Picture 7"} className={"wp-image-5049"} title={"xUnlocked: Video learning platform for finance teams 7"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h4 id={"teams-management"} className={"wp-block-heading has-small-font-size"}><strong>{"Teams management"}</strong>
</h4>
<p className={"wp-block-paragraph"}>{"xUnlocked supports a robust team management model with four distinct roles: team owner, account manager, team manager, and team member. Organizations can create multiple teams, invite members, assign tasks with due dates, and monitor progress across both individuals and entire groups. This structure helps managers guide and control the learning journey at scale."}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/xunlocked/Picture-1-4.png"} alt={"Picture 1 4"} className={"wp-image-5050"} title={"xUnlocked: Video learning platform for finance teams 8"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h4 id={"single-sign-on"} className={"wp-block-heading has-small-font-size"}><strong>{"Single sign-on"}</strong>
</h4>
<p className={"wp-block-paragraph"}>{"Access is streamlined through LinkedIn login, corporate SAML authentication, and secure “remember me” functionality. These options ensure quick and frictionless sign-in while meeting enterprise security requirements."}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/xunlocked/Picture-2-3.png"} alt={"Picture 2 3"} className={"wp-image-5051"} title={"xUnlocked: Video learning platform for finance teams 9"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h4 id={"personalization"} className={"wp-block-heading has-small-font-size"}><strong>{"Personalization"}</strong>
</h4>
<p className={"wp-block-paragraph"}>{"Organizations can log in using internal corporate credentials and customize the platform with their own branding, including logos and naming. Companies can also transform xUnlocked into a branded internal knowledge hub by hosting their own course library alongside platform content."}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/xunlocked/Picture-3-2.png"} alt={"Picture 3 2"} className={"wp-image-5063"} title={"xUnlocked: Video learning platform for finance teams 10"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h4 id={"3rd-party-integrations"} className={"wp-block-heading has-small-font-size"}><strong><strong>{"3rd party integrations"}</strong>
</strong>
</h4>
<p className={"wp-block-paragraph"}>{"The platform integrates with Auth0 to guarantee secure access and identity management, while ChargeBee handles subscription billing for monthly or annual plans. Additionally, SSO connectivity with Cornerstone allows enterprise learners to access xUnlocked videos directly within their existing learning ecosystems."}</p>
</div>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top card-block--image wp-block-geniusee-card"}><figure className={"wp-block-image size-full card-image"}><img loading={"lazy"} decoding={"async"} width={"2480"} height={"1600"} src={"/assets/xunlocked/Picture-4-2.png"} alt={"Picture 4 2"} className={"wp-image-5064"} title={"xUnlocked: Video learning platform for finance teams 11"} />
</figure>
<div className={"wp-block-group card-content is-layout-flow wp-block-group-is-layout-flow"}><h4 id={"learner-progress-analytics"} className={"wp-block-heading has-small-font-size"}><strong><strong>{"Learner progress analytics"}</strong>
</strong>
</h4>
<p className={"wp-block-paragraph"}>{"Learners have access to detailed analytics on their own progress, including time spent, completed activities, upcoming goals, and overall learning trajectory. This visibility helps them understand their pace, stay motivated, and plan their learning more effectively, making the experience more structured and self-directed."}</p>
</div>
</div>
</div>
</div>
</section>
<section className={"grid-wrapper"} style={{}}><div className={"block-header"}><div className={"heading-with-button"}><div className={"heading-with-button__inner"}><h2 id={"results"} className={"block-title"} data-target={"6"}>{" Results"}</h2>
</div>
</div>
<hr className={"block-header__separator"} />

</div>
<div id={""} className={"grid-block grid typo grid--columns-2"} style={{"--cols": "2", "--cgap": ".5rem", "--rgap": ".5rem"}}><div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/Next.svg#icon"}></use>
</svg>
</div>
<p className={"paragraph-margin-m wp-block-paragraph"}>{"Two (and growing) engaging, interactive, intuitively understandable on-demand, video-delivered learning platforms: Finance Unlocked and Sustainability Unlocked."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/optimization-shield.svg#icon"}></use>
</svg>
</div>
<p className={"paragraph-margin-m wp-block-paragraph"}><strong>{"xUnlocked"}</strong>
{" provides educational videos for financial professionals. "}<strong>{"Sustainability Unlocked"}</strong>
{" educated learners on the Sustainability challenges of today’s modern world."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top is-style-default-card wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/youtube-gaming.svg#icon"}></use>
</svg>
</div>
<p className={"paragraph-margin-m wp-block-paragraph"}>{"Platfrom offers instant access to on-demand videos, pathways and courses for online learning on ESG topics, the climate crisis, sustainability data, and much more."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/capsules.svg#icon"}></use>
</svg>
</div>
<p className={"wp-block-paragraph"}>{"I continued to collaborate with xUnlocked, scaling the on-demand learning platforms, updating the design, and video player."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/droplet.svg#icon"}></use>
</svg>
</div>
<p className={"wp-block-paragraph"}>{"The platform also supports fully personalized content — from custom videos and tailored courses to enterprise-grade, white-label learning products with dedicated domains and corporate branding."}</p>
</div>
</div>
<div id={""} className={"grid-item"}><div style={{"--pd": "24px", "--pm": "24px", "--phd": "24px", "--phm": "24px"}} className={"card-block img-top icn-top wp-block-geniusee-card"}><div style={{"--is": "24px"}} className={"icon-block icon-block--align-left wp-block-geniusee-icon"}>
<svg className={"icon-block__icon"} width={"24"} height={"24"}><use href={"/assets/blood-bag.svg#icon"}></use>
</svg>
</div>
<p className={"wp-block-paragraph"}>{"As xUnlocked keeps attracting new customers like Santander, GSK, BNP Paribas, Airbus, and many more, there’s much to look forward to."}</p>
</div>
</div>
</div>
</section>
<p className={"wp-block-paragraph"}></p>
</div>
</div>
</div>
</div>
</section>

 );
}
