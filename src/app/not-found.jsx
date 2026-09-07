import Link from 'next/link';
export default function NotFound() { return <section className="container" style={{padding:'160px 24px'}}><h1>Page not found</h1><p>This page is not available.</p><Link href="/" className="btn btn-blue">Back to home</Link></section>; }
