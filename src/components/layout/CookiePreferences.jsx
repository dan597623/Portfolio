"use client";

import { useEffect, useRef, useState } from 'react';

const storageKey = 'daniel-cookie-preferences-v1';
export default function CookiePreferences() {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const panel = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    try {
      const choice = localStorage.getItem(storageKey);
      if (!['essential', 'all'].includes(choice)) setOpen(true);
    } catch { setOpen(true); }
    const reopen = () => {
      trigger.current = document.activeElement;
      setSaved(false);
      setOpen(true);
      requestAnimationFrame(() => panel.current?.focus());
    };
    window.addEventListener('open-cookie-preferences', reopen);
    return () => window.removeEventListener('open-cookie-preferences', reopen);
  }, []);
  function choose(choice) {
    try { localStorage.setItem(storageKey, choice); } catch { /* Keep this visit usable when storage is blocked. */ }
    window.dispatchEvent(new CustomEvent('cookie-preferences-changed', { detail: { optional: choice === 'all' } }));
    setOpen(false);
    setSaved(true);
    trigger.current?.focus();
  }
  return <>
    {open && <aside ref={panel} tabIndex={-1} className="cookie-preferences" aria-labelledby="cookie-title">
      <div className="cookie-preferences__heading">
        <span className="cookie-preferences__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 13a5 5 0 0 1-6-6 4 4 0 0 1-4-4 9 9 0 1 0 10 10Z"/><path strokeLinecap="round" d="M8 10h.01M7 15h.01M12 17h.01M12 12h.01"/></svg></span>
        <div><span className="cookie-preferences__eyebrow">YOUR PRIVACY</span><h2 id="cookie-title">A little choice. More control.</h2></div>
      </div>
      <p>This site stores preferences such as your theme and cookie choice on your device. Optional analytics and advertising cookies are currently not used.</p>
      <p className="cookie-preferences__note">Choose whether to allow optional cookies. You can change your choice anytime in the footer.</p>
      <div className="cookie-preferences__actions"><button type="button" onClick={() => choose('essential')}>Essential only</button><button type="button" onClick={() => choose('all')}>Accept all</button></div>
    </aside>}
    <span className="cookie-preferences__announcement" role="status">{saved ? 'Cookie preferences saved.' : ''}</span>
  </>;
}
