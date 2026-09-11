"use client";
import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import usePageInteractions from '../../hooks/usePageInteractions';
export default function PageInteractions({ children }) {
 const path = usePathname();
 useLayoutEffect(() => {
  document.body.className = 'page sticky ' + (path === '/' ? 'home' : path.startsWith('/projects/') ? 'single-case_study' + (path === '/projects/my-tutor' ? ' mytutor-page' : '') : '');
 }, [path]);
 useLayoutEffect(() => {
  if (!path.startsWith('/projects/') || window.location.hash) return;
  // Reset after the new route mounts, including Next's own scroll handling.
  const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  resetScroll();
  const frame = requestAnimationFrame(resetScroll);
  return () => cancelAnimationFrame(frame);
 }, [path]);
 usePageInteractions();
 return children;
}
