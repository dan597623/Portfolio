import Link from 'next/link';

export const metadata = { title: 'Thank you | Daniel Rocca', robots: { index: false } };

export default function ThankYouPage() {
  return <section className="container" style={{ paddingTop: 160, paddingBottom: 100, minHeight: '65vh' }}>
    <h1>Thanks for reaching out!</h1>
    <p>Your inquiry has been submitted. I'll get back to you within one business day.</p>
    <Link className="btn btn-blue" href="/">Back to home</Link>
  </section>;
}
