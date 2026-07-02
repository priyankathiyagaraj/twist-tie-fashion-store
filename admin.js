document.addEventListener('DOMContentLoaded', () => {
  const adminLinks = document.querySelectorAll('a');
  adminLinks.forEach((link) => {
    if (link.textContent.includes('Delete') || link.textContent.includes('Edit')) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        alert('This is a demo admin action. Connect Firebase for full CRUD functionality.');
      });
    }
  });
});
