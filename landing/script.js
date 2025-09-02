(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function track(eventName, data) {
    try {
      // Minimal analytics stub: logs to console and can be swapped later
      console.debug('[analytics]', eventName, data || {});
    } catch (_) {}
  }

  // Track section views on intersection (25%)
  const sections = document.querySelectorAll('section[id]');
  const seen = new Set();
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            const id = entry.target.id;
            if (!seen.has(id)) {
              seen.add(id);
              track('section_view', { id, threshold: 0.25 });
            }
          }
        });
      },
      { threshold: [0.25] }
    );
    sections.forEach((s) => io.observe(s));
  }

  // Scrollspy for top nav
  const navLinks = Array.from(document.querySelectorAll('.top-nav a[href^="#"]'));
  const idToLink = new Map(navLinks.map((a) => [a.getAttribute('href')?.slice(1), a]));
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const link = idToLink.get(id);
          if (link) {
            if (entry.isIntersecting) {
              navLinks.forEach((l) => l.setAttribute('aria-current', 'false'));
              link.setAttribute('aria-current', 'true');
            }
          }
        });
      },
      { threshold: [0.6] }
    );
    sections.forEach((s) => spy.observe(s));
  }

  // Copy buttons
  document.querySelectorAll('button.copy').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy') || '';
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = 'Copied';
        setTimeout(() => (btn.textContent = 'Copy'), 1200);
        track('install_copy', { command_id: btn.getAttribute('data-label') || 'unknown' });
      } catch (e) {
        console.warn('Copy failed', e);
      }
    });
  });

  // Anchor CTA tracking
  document.querySelectorAll('[data-analytics="cta_click"]').forEach((el) => {
    el.addEventListener('click', () => {
      track('cta_click', { location: 'hero', label: el.getAttribute('data-label') || 'unknown' });
    });
  });

  // Newsletter form (fake success)
  const form = document.querySelector('form.signup');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const msg = form.querySelector('.privacy');
      const email = (input && input.value || '').trim();
      const valid = /.+@.+\..+/.test(email);
      if (!valid) {
        msg.textContent = 'Please enter a valid email address.';
        msg.style.color = '#f87171';
        track('newsletter_submit', { result: 'error' });
        return;
      }
      msg.textContent = 'Thanks! You are subscribed.';
      msg.style.color = '';
      input.value = '';
      track('newsletter_submit', { result: 'success' });
    });
  }

  // Page view
  track('page_view', { route: 'landing/index.html', referrer: document.referrer || '' });
})();


