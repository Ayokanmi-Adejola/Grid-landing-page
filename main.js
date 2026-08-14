(() => {
  const hamburger = document.querySelector('.nav__hamburger');
  const closeBtn  = document.querySelector('.menu-panel__close');
  const panel     = document.getElementById('menu-panel');
  const overlay   = document.getElementById('menu-overlay');

  function openMenu() {
    panel.classList.add('is-open');
    overlay.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Move focus to close button
    closeBtn.focus();
  }

  function closeMenu() {
    panel.classList.remove('is-open');
    overlay.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    // Return focus to hamburger
    hamburger.focus();
  }

  hamburger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Trap focus inside the menu panel while it's open
  panel.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    if (!panel.classList.contains('is-open')) return;

    const focusable = Array.from(
      panel.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')
    ).filter(el => !el.disabled);

    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();
