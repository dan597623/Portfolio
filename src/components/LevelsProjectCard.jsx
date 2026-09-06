export default function LevelsProjectCard() { return (<article className={"case-study case-study--card"}>
<a className={"case-study__link"} href={"/projects/levels-health"}></a>
<div className={"case-study__thumb"}>
<img decoding={"async"} src={"/assets/levels-health/levels-health-768x702.png"} alt={"Levels Health"} className={"case-study__img"} loading={"lazy"} title={"Portfolio 13"} />
<svg className={"case-study__thumb-svg"} width={"480"} height={"305"} viewBox={"0 0 480 305"} fill={"none"}>
<g opacity={"0.6"} filter={"url(#levels-card-glow)"}>
<path d={"M-26.6341 254.574C106.195 225.915 431.609 174.76 616.778 220.877C741.802 252.015 921.643 390.954 955.473 436.322"} stroke={"#695EFE"} strokeWidth={"189.194"}></path>

</g>

<defs>
<filter id={"levels-card-glow"} x={"-154.357"} y={"-0.000205994"} width={"1293.44"} height={"600.644"} filterUnits={"userSpaceOnUse"} colorInterpolationFilters={"sRGB"}>
<feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

<feBlend mode={"normal"} in={"SourceGraphic"} in2={"BackgroundImageFix"} result={"shape"}></feBlend>

<feGaussianBlur stdDeviation={"53.8861"} result={"effect1_foregroundBlur_8084_18002"}></feGaussianBlur>

</filter>

</defs>

</svg>
<div className={"flex"}>
<img src="/assets/levels-health/levels-logo.png" alt="Levels" className="case-study__logo" loading="lazy" />
<span className={"case-study__company"}>{"Healthcare"}</span>
</div>
</div>
<div className={"case-study__content"}>
<span className={"tag tag-black tag-small"}>{"Healthcare"}</span>
<h3 className={"case-study__title"}>{"Levels Health: a mobile app for tracking metabolic health"}</h3>
<div className={"case-study__content_body"}><div className={"tags case-study__tags"}><span className="case-study__tag">Mobile development</span><span className="case-study__tag">Project management</span><span className="case-study__tag">UI/UX Design</span></div>
<p className="case-study__excerpt">{"The global rise in chronic diseases like diabetes has fueled the demand for personalized health management tools. Levels Health, an A16z-backed startup, identified a gap in the market for a user-centric app that leverages CGM data to empower individuals to optimize their metabolic health. Levels partnered with me to create a mobile app that would be their core user engagement platform."}</p>
<a href={"/projects/levels-health"} className={"btn btn-medium btn-blue btn-blue--transparent"} title={"Case details"}>{"Case details"}<svg className={"icon"}>
<use href={"/assets/sprite.svg#icon-diagonal-arrow"}></use>

</svg>
</a>
</div>
</div>
</article>); }
