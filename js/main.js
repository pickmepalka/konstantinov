document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initScrollAnimations();
  initContactForm();
});

function initHeader() {
  const header = document.getElementById('header');
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const isHome = document.body.classList.contains('page-home');
  let scrollY = 0;

  if (!isHome) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('header--scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  function openMenu() {
    scrollY = window.scrollY;
    burger.classList.add('header__burger--active');
    nav.classList.add('header__nav--open');
    document.body.classList.add('menu-open');
    if (!isHome) {
      document.body.style.top = `-${scrollY}px`;
    }
    burger.setAttribute('aria-label', 'Закрыть меню');
    burger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    burger.classList.remove('header__burger--active');
    nav.classList.remove('header__nav--open');
    document.body.classList.remove('menu-open');
    document.body.style.top = '';
    if (!isHome) {
      window.scrollTo(0, scrollY);
    }
    burger.setAttribute('aria-label', 'Открыть меню');
    burger.setAttribute('aria-expanded', 'false');
  }

  burger.addEventListener('click', () => {
    if (nav.classList.contains('header__nav--open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('header__nav--open')) {
      closeMenu();
    }
  });

  burger.setAttribute('aria-expanded', 'false');
}

function initContactForm() {
  const success = document.getElementById('form-success');
  if (!success) return;

  if (new URLSearchParams(window.location.search).get('sent') === '1') {
    success.classList.add('is-visible');
  }
}

function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const elements = document.querySelectorAll('.section__header, .collection-card, .project-card, .service-item');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}
