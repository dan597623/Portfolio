"use client";
import { useRef, useState } from 'react';
export default function Contact() {
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const inFlight = useRef(false);
  async function submitInquiry(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (inFlight.current || !form.reportValidity()) return;
    inFlight.current = true;
    setSending(true);
    setStatus(null);
    try {
      const payload = Object.fromEntries(new FormData(form));
      payload._url = window.location.href;
      const response = await fetch('https://formsubmit.co/ajax/dan597623@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      const accepted = result.success === true || result.success === 'true';
      const needsActivation = /activat|confirm.*email|verify.*email/i.test(result.message || '');
      if (!response.ok || !accepted || needsActivation) {
        setStatus({ error: true, text: needsActivation
          ? 'Message delivery is not available yet. Please try again later.'
          : 'Your message could not be submitted. Please try again. Your details are still here.' });
        return;
      }
      setStatus({ error: false, text: 'Thank you. Your inquiry has been submitted.' });
      form.reset();
    } catch {
      setStatus({ error: true, text: 'I could not confirm your submission. Please check your connection and try again. Your details are still here.' });
    } finally {
      inFlight.current = false;
      setSending(false);
    }
  }
  return (
<section id={"contact"} className={"contact-form-block"} style={{"--md": "128px", "--mm": "80px"}}><div className={"container"}><div className={"flex"}><div id={""} className={"form-block"} style={{}}><div className={"form-block__head"}><h2 className={"form-block__title"}>{"Let's talk!"}</h2>
</div>
<form action="https://formsubmit.co/dan597623@gmail.com" method="POST" onSubmit={submitInquiry} aria-busy={sending} data-contact-delivery="true" className="form form--inverted">
<input type="hidden" name="_subject" value="New portfolio inquiry for Daniel" />
<input type="hidden" name="_template" value="table" />
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
<div className="form-messages" role="status" aria-live="polite">{status && <p className={status.error ? "contact-status is-error" : "contact-status"}>{status.text}</p>}</div>
<div className={"form-actions"}><div className={"form-row"}>
<button type="submit" className="btn btn-blue" disabled={sending}>{sending ? "Sending..." : "Send"}</button>
</div>
</div>
</form>
</div>


</div>
</div>
</section>

  );
}
