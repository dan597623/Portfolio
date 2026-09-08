import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function usePageInteractions() {
  useEffect(() => {
    const cleanups = [];
    const all = (selector, scope = document) => [...scope.querySelectorAll(selector)];
    const listen = (element, event, fn) => {
      if (!element) return;
      element.addEventListener(event, fn);
      cleanups.push(() => element.removeEventListener(event, fn));
    };
    const activate = (element, fn) => {
      if (!element.matches('button, a, input')) { element.tabIndex = 0; element.setAttribute('role', 'button'); }
      listen(element, 'click', fn);
      if (!element.matches('button, a')) listen(element, 'keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(e); }
      });
    };
    const slides = all('.hero-slide');
    let current = 0;
    const show = index => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
    };
    slides.forEach((slide, i) => {
      activate(slide.querySelector('.hero-slide__overlay'), () => show(i));
      all('.nav-prev, .nav-next', slide).forEach(button => activate(button, e => {
        e.stopPropagation(); show(current + (button.matches('.nav-prev') ? -1 : 1));
      }));
    });
    const hero = document.querySelector('.hero-block');
    let touchStart = 0;
    listen(hero, 'touchstart', e => { touchStart = e.changedTouches[0].clientX; });
    listen(hero, 'touchend', e => {
      const delta = e.changedTouches[0].clientX - touchStart;
      if (Math.abs(delta) > 50) show(current + (delta < 0 ? 1 : -1));
    });
    if (slides.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const timer = setInterval(() => { if (!document.hidden && !document.querySelector('.hero-block:hover, .hero-block:focus-within')) show(current + 1); }, 10000);
      cleanups.push(() => clearInterval(timer));
    }
    const carousels = all('.swiper:not(.hero-swiper)').map(element => {
      const section = element.closest('section');
      const isProjectCarousel = Boolean(element.closest('.case-studies-carousel'));
      return new Swiper(element, {
        modules: [Navigation, Pagination, Autoplay], slidesPerView: 'auto', spaceBetween: 16,
        ...(isProjectCarousel ? { breakpoints: { 768: { spaceBetween: 24 } } } : {}),
        navigation: { prevEl: section?.querySelector('.swiper-button-prev'), nextEl: section?.querySelector('.swiper-button-next') },
        pagination: { el: section?.querySelector('.swiper-pagination'), clickable: true },
        watchOverflow: true,
      });
    });
    cleanups.push(() => carousels.forEach(swiper => swiper.destroy(true, true)));
    const updateTabLogo = () => {
      const theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
      document.querySelectorAll('link[rel="icon"]').forEach(icon => {
        icon.href = '/assets/brand/favicon.svg?v=6';
        icon.type = 'image/svg+xml';
      });
    };
    all('.theme-toggle-btn').forEach(button => activate(button, () => {
      const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = theme;
      updateTabLogo();
      button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
      try { localStorage.setItem('theme', theme); } catch { /* Storage may be disabled. */ }
    }));
    try { const theme = localStorage.getItem('theme'); if (['light', 'dark'].includes(theme)) document.documentElement.dataset.theme = theme; } catch { /* Use default theme. */ }
    updateTabLogo();
    all('.has-megamenu').forEach(item => {
      const open = () => {
        all('.has-megamenu').forEach(other => { if (other !== item) other.classList.remove('megamenu-open', 'opened'); });
        item.classList.add('megamenu-open', 'opened');
        const first = item.querySelector('.megamenu-main-list > li');
        if (first) switchSub(first);
      };
      const switchSub = selected => all('[data-id]', item).forEach(el => el.classList.toggle('active', el.dataset.id === selected.dataset.id));
      const trigger = item.querySelector(':scope > span');
      if (trigger) activate(trigger, () => item.classList.contains('megamenu-open') ? item.classList.remove('megamenu-open', 'opened') : open());
      listen(item, 'mouseenter', open);
      listen(item, 'mouseleave', () => item.classList.remove('megamenu-open', 'opened'));
      all('.megamenu-main-list > li[data-id]', item).forEach(sub => { listen(sub, 'mouseenter', () => switchSub(sub)); activate(sub, () => switchSub(sub)); });
    });
    all('.menu-toggle-btn, .menu-toggle, .hamburger, .header__menu-toggle, .burger').forEach(button => activate(button, () => {
      document.body.classList.toggle('nav-opened');
      document.querySelector('.header__main')?.classList.toggle('active');
      button.setAttribute('aria-expanded', String(document.body.classList.contains('nav-opened')));
    }));
    all('a[href^="#"]').forEach(link => listen(link, 'click', () => {
      document.body.classList.remove('nav-opened'); document.querySelector('.header__main')?.classList.remove('active');
    }));
    all('.services-filter__set-head').forEach(head => activate(head, () => head.parentElement.classList.toggle('active')));
    all('.search-link').forEach(button => activate(button, () => {
      const panel = document.querySelector('.search-form');
      panel.classList.toggle('opened');
      if (panel.classList.contains('opened')) panel.querySelector('input').focus();
    }));
    const selections = new Map();
    const filterServices = () => {
      const need = selections.get('2') || '';
      const terms = { 'ai-ml': /AI|artificial/i, 'web-development': /web/i, 'mobile-app-development': /mobile/i, 'devops-cloud-infrastructure': /AWS|DevOps|cloud/i, consulting: /dedicated|engineering/i, 'software-development': /software|engineering/i };
      all('.service-card').forEach(card => { card.hidden = Boolean(need && terms[need] && !terms[need].test(card.querySelector('.service-card__title').textContent)); });
      carousels.forEach(swiper => { swiper.update(); swiper.slideTo(0); });
    };
    all('.services-filter__tag').forEach(tag => activate(tag, () => {
      const set = tag.closest('[data-set]');
      const value = tag.dataset.filter;
      all('.services-filter__tag', set).forEach(el => el.classList.remove('active'));
      if (selections.get(set.dataset.set) === value || !value) selections.delete(set.dataset.set);
      else { selections.set(set.dataset.set, value); tag.classList.add('active'); }
      set.nextElementSibling?.classList.add('active');
      filterServices();
    }));
    all('.services-filter__clear-all').forEach(button => activate(button, () => { selections.clear(); all('.services-filter__tag').forEach(t => t.classList.remove('active')); filterServices(); }));
    all('form:not([data-contact-delivery])').forEach(form => listen(form, 'submit', event => {
      event.preventDefault();
      if (form.getAttribute('role') === 'search') {
        const query = form.querySelector('input').value.trim().toLowerCase();
        if (!query) return;
        const match = all('main h1, main h2, main h3, .service-card__title').find(el => el.textContent.toLowerCase().includes(query));
        form.querySelector('.local-search-status')?.remove();
        if (match) { match.scrollIntoView({ behavior: 'smooth', block: 'center' }); document.querySelector('.search-form').classList.remove('opened'); }
        else { const status = document.createElement('p'); status.className = 'local-search-status'; status.setAttribute('role', 'status'); status.textContent = 'No matching sections found.'; form.append(status); }
        return;
      }
      if (!form.reportValidity()) return;
      let message = form.querySelector('.local-form-status');
      if (!message) { message = document.createElement('p'); message.className = 'local-form-status'; message.setAttribute('role', 'status'); form.append(message); }
      message.textContent = 'This form is a preview. Your message has not been sent; a contact service must be connected to enable delivery.';
    }));
    all('[data-video-popup]').forEach(trigger => activate(trigger, () => {
      const raw = trigger.dataset.videoPopup;
      let url = trigger.dataset.videoLink || trigger.dataset.videoUrl || trigger.dataset.video || raw;
      try { const parsed = JSON.parse(raw); url = parsed.url || parsed.src || url; } catch { /* Direct URL. */ }
      if (!/^https?:\/\//.test(url)) return;
      const youtube = url.match(/(?:youtu\.be\/|[?&]v=)([\w-]+)/);
      if (youtube) url = `https://www.youtube-nocookie.com/embed/${youtube[1]}`;
      const dialog = document.createElement('dialog'); dialog.className = 'video-dialog';
      const close = document.createElement('button'); close.textContent = '×'; close.setAttribute('aria-label', 'Close video');
      const media = document.createElement(/\.mp4(?:\?|$)/.test(url) ? 'video' : 'iframe');
      media.src = url; media.title = 'Video testimonial'; media.setAttribute('controls', ''); media.setAttribute('allowfullscreen', '');
      dialog.append(close, media); document.body.append(dialog); dialog.showModal();
      close.onclick = () => dialog.close(); dialog.onclose = () => dialog.remove();
      cleanups.push(() => dialog.remove());
    }));
    listen(document, 'keydown', e => { if (e.key === 'Escape') { document.querySelector('.search-form')?.classList.remove('opened'); all('.megamenu-open').forEach(el => el.classList.remove('megamenu-open', 'opened')); document.body.classList.remove('nav-opened'); document.querySelector('.header__main')?.classList.remove('active'); } });
    return () => cleanups.forEach(cleanup => cleanup());
  }, []);
}
