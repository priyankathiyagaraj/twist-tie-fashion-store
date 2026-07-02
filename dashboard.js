document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.rounded-\[1\.25rem\]');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 80}ms`;
  });
});
