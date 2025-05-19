// Scroll Eventlistener Only For Navigation BG

window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) { // Change '50' to control when the color changes
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll Eventlistener Only For LOGO COLOR

window.addEventListener('scroll', function () {
  var navbar = document.getElementById('local');
  if (window.scrollY > 50) { // Change '50' to control when the color changes
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll Eventlistener Only For MENU COLOR

window.addEventListener('scroll', function () {
  var navbar = document.getElementById('menu');
  if (window.scrollY > 50) { // Change '50' to control when the color changes
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
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

