document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.querySelector('[data-year]');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  document.querySelectorAll('a').forEach((link) => {
    if (link.href.includes('mailto:') || link.href.includes('tel:')) {
      link.classList.add('text-rosegold');
    }
  });
});
