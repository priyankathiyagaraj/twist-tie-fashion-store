document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('section, article, header, footer');
  elements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(16px)';
    setTimeout(() => {
      element.style.transition = 'all 0.5s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 80);
  });
});
