/* Only the small-screen menu uses JavaScript. All content and links work without it. */
(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (!button || !nav) return;
  document.documentElement.classList.add('js-nav');
  const close = () => {
    nav.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  };
  button.addEventListener('click', () => {
    const opened = nav.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(opened));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      close();
      button.focus();
    }
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) close();
  });
})();
