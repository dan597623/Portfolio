"use client";
import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import usePageInteractions from '../../hooks/usePageInteractions';
export default function PageInteractions({ children }) {
 const path = usePathname();
 useLayoutEffect(() => {
  document.body.className = 'page sticky ' + (path === '/' ? 'home' : path.startsWith('/projects/') ? 'single-case_study' + (path === '/projects/my-tutor' ? ' mytutor-page' : '') : '');
 }, [path]);
 usePageInteractions();
 return children;
}
