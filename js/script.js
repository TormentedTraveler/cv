document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
      section.style.opacity = 0;
      section.style.transform = 'translateY(20px)';
  });

  let delay = 0;
  sections.forEach(section => {
      setTimeout(() => {
          section.style.transition = 'all 0.5s ease';
          section.style.opacity = 1;
          section.style.transform = 'translateY(0)';
      }, delay);
      delay += 300;
  });
});
