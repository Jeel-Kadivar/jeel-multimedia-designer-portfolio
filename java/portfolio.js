window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;
  const elements = [
    document.getElementById('navbar'),
    document.getElementById('local'),
    document.getElementById('menu')
  ];

  elements.forEach(el => {
    if (!el) return;
    if (scrollY > 50) {
      el.classList.add('scrolled');
    } else {
      el.classList.remove('scrolled');
    }
  });
});




// Scroll Eventlistener For Disappearing H1 Text

const fadeText = document.getElementById('text');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const fadeHeight = 350; // Adjust this value if you want slower or faster fading

  let opacity = 1 - scrollY / fadeHeight;

  if (opacity >= 0) {
    fadeText.style.opacity = opacity;
  } else {
    fadeText.style.opacity = 0;
  }
});

