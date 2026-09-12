"use client";
const acknowledgment = name => `Hi ${name},

Thanks for reaching out! I've received your message and would be happy to discuss your project. I'll get back to you within one business day.

Best,
Daniel Rocca`;

export default function Contact() {
  function submitInquiry(event) {
    const form = event.currentTarget;
    const name = form.elements.namedItem('name').value.trim().replace(/[\r\n]+/g, ' ');
    form.elements.namedItem('_autoresponse').value = acknowledgment(name || 'there');
    form.elements.namedItem('_next').value = new URL('/contact/thank-you', window.location.origin).href;
    // Native submission with reCAPTCHA is required for FormSubmit autoresponses.
  }
  return (
<section id={"contact"} className={"contact-form-block"} style={{"--md": "128px", "--mm": "80px"}}><div className={"container"}><div className={"flex"}><div id={""} className={"form-block"} style={{}}><div className={"form-block__head"}><h2 className={"form-block__title"}>{"Let's talk!"}</h2>
</div>
<form action="https://formsubmit.co/contact@danielrocca.dev" method="POST" onSubmit={submitInquiry} data-contact-delivery="true" className="form form--inverted">
<input type="hidden" name="_subject" value="New portfolio inquiry for Daniel" />
<input type="hidden" name="_template" value="table" />
<input type="hidden" name="_autoresponse" defaultValue={acknowledgment('there')} />
<input type="hidden" name="_next" defaultValue="https://www.danielrocca.dev/contact/thank-you" />
<input type="hidden" name="_captcha" value="true" />
<input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{display: 'none'}} />
<div className={"form-row"}><div className={"form-col"}>
<label>
<span>{"Name"}</span>

<input type={"text"} name={"name"} required={true} placeholder={" "} />

</label>
</div>
</div>
<div className={"form-row"}><div className={"form-col"}>
<label>
<span>{"Phone"}</span>

<input type={"tel"} name={"phone"} required={true} placeholder={" "} />

</label>
</div>
<div className={"form-col"}>
<label>
<span>{"Email"}</span>

<input type={"email"} name={"email"} required={true} placeholder={" "} />

</label>
</div>
</div>
<div className={"form-row"}><div className={"form-col"}>
<label><div className={"select-wrapper"}>
<select name={"industry"} required={true} defaultValue=""><option value={""} disabled={true}>{"Industry"}</option>
<option value={"Finance"}>{"Finance"}</option>
<option value={"Agriculture"}>{"Agriculture"}</option>
<option value={"Education"}>{"Education"}</option>
<option value={"Healthcare"}>{"Healthcare"}</option>
<option value={"E-commerce"}>{"E-commerce"}</option>
<option value={"Biotechnology"}>{"Biotechnology"}</option>
<option value={"Logistic & Transportation"}>{"Logistic & Transportation"}</option>
<option value={"Sports & Games"}>{"Sports & Games"}</option>
<option value={"Construction"}>{"Construction"}</option>
<option value={"Food & Supplements"}>{"Food & Supplements"}</option>
<option value={"Consulting"}>{"Consulting"}</option>
<option value={"Legal"}>{"Legal"}</option>
<option value={"Marketing"}>{"Marketing"}</option>
<option value={"Travel & Hospitality"}>{"Travel & Hospitality"}</option>
<option value={"Delivery"}>{"Delivery"}</option>
<option value={"Technology"}>{"Technology"}</option>
<option value={"Other"}>{"Other"}</option>

</select>

<span className={"select-wrapper__arrow"}><svg className={"icon"}>
<use href={"/assets/sprite.svg#icon-chevron-down"}></use>

</svg>
</span>
</div>

</label>
</div>
<div className={"form-col"}>
<label><div className={"select-wrapper"}>
<select name={"budget"} required={true} defaultValue=""><option value={""}>{"Expected budget"}</option>
<option value={"< 30k"}>{"< 30k"}</option>
<option value={"30k - 100k"}>{"30k – 100k"}</option>
<option value={"100k - 200k"}>{"100k – 200k"}</option>
<option value={"> 200k"}>{"> 200k"}</option>
<option value={"N/A"}>{"N/A"}</option>
</select>

<span className={"select-wrapper__arrow"}><svg className={"icon"}>
<use href={"/assets/sprite.svg#icon-chevron-down"}></use>

</svg>
</span>
</div>

</label>
</div>
</div>
<div className={"form-row"}><div className={"form-col"}>
<label>
<span>{"Message"}</span>
<textarea name={"message"} required={true} placeholder={" "}></textarea>
</label>
</div>
</div>
<div className={"form-row"}>
<label>
<svg className={"icon"}>
<use href={"/assets/sprite.svg#icon-check"}></use>

</svg>

<input type={"checkbox"} name={"agree"} required={true} />
<p>{"I consent to Daniel using the information I provide to respond to my inquiry."}</p>

</label>
</div>
<p className="contact-verification-note">After sending, complete the verification step to submit your message.</p>
<div className={"form-actions"}><div className={"form-row"}>
<button type="submit" className="btn btn-blue">Send</button>
</div>
</div>
</form>
</div>


</div>
</div>
</section>

  );
}
