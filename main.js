function showMenu() {
  const navBar = document.getElementById('navbar');
  const navLinks = document.getElementById('navlinks');

  navBar.classList.replace('hidden', 'backdrop-transitioning');
  navLinks.classList.replace('hidden', 'nav-transitioning');

  setTimeout(() => {
    navBar.classList.remove('backdrop-transitioning');
    navLinks.classList.remove('nav-transitioning');
  })
};

function hideMenu() {
  const navBar = document.getElementById('navbar');
  const navLinks = document.getElementById('navlinks');

  navBar.classList.add('backdrop-transitioning');
  navLinks.classList.add('nav-transitioning');

  setTimeout(() => {
    navBar.classList.replace('backdrop-transitioning', 'hidden');
    navLinks.classList.replace('nav-transitioning', 'hidden');
  }, 500)
};
function closeMenuAfterNavigation() {
  hideMenu();
}
let dots = document.querySelectorAll(' .dot');
var counter = 0;

function indicators() {
  for(i=0; i < dots.length; i++){ 
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[counter].className += ' active';
}
function moveCarouselRight() {
    const carousel = document.getElementById('carousel');
    const currentPosition = carousel.classList.item(1);
    
    if (currentPosition === 'carr-pos-1') {
      carousel.classList.replace('carr-pos-1', 'carr-pos-2');
    counter = 1; }
   else if (currentPosition === 'carr-pos-2') {
    carousel.classList.replace('carr-pos-2', 'carr-pos-3');
    counter = 2; }
   else if (currentPosition === 'carr-pos-3') { 
    carousel.classList.replace('carr-pos-3', 'carr-pos-4');
    counter = 3; }
   else if (currentPosition === 'carr-pos-4') {
    carousel.classList.replace('carr-pos-4', 'carr-pos-5');
    counter = 4; }
   else if (currentPosition === 'carr-pos-5') {
    carousel.classList.replace('carr-pos-5', 'carr-pos-6');
    counter = 5; }
   else if (currentPosition === 'carr-pos-6') { 
    carousel.classList.replace('carr-pos-6', 'carr-pos-1');
    counter = 0; }
    indicators();
}

function moveCarouselLeft() {
    const carousel = document.getElementById('carousel');
    const currentPosition = carousel.classList.item(1);
  
    if (currentPosition === 'carr-pos-1') {
       carousel.classList.replace('carr-pos-1', 'carr-pos-6');
       counter = 5; }
   else if (currentPosition === 'carr-pos-2') { 
    carousel.classList.replace('carr-pos-2', 'carr-pos-1');
    counter = 0; }
   else if (currentPosition === 'carr-pos-3') { 
    carousel.classList.replace('carr-pos-3', 'carr-pos-2');
    counter = 1; }
   else if (currentPosition === 'carr-pos-4') { 
    carousel.classList.replace('carr-pos-4', 'carr-pos-3');
    counter = 2; }
   else if (currentPosition === 'carr-pos-5') { 
    carousel.classList.replace('carr-pos-5', 'carr-pos-4');
    counter = 3; }
   else if (currentPosition === 'carr-pos-6') { 
    carousel.classList.replace('carr-pos-6', 'carr-pos-5');
    counter = 4; 
  }
  indicators();
};
function moveCarouselTo(position) {
  const carousel = document.getElementById('carousel');
  const currentClass = `carr-pos-${counter + 1}`;
  const newClass = `carr-pos-${position + 1}`;
  
  carousel.classList.replace(currentClass, newClass);
  counter = position;
  indicators();
}

function moveCarouselRight() {
  const newCounter = (counter + 1) % dots.length;
  moveCarouselTo(newCounter);
}

function moveCarouselLeft() {
  const newCounter = (counter - 1 + dots.length) % dots.length;
  moveCarouselTo(newCounter);
}
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
      moveCarouselTo(index);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.speaker_btn');
  const content = document.querySelector('.item1');
  const morles = document.getElementById('morles');
  const chevron = document.getElementById('chevron');

  function isMobileDevice() {
    return window.innerWidth < 768;
}
if (isMobileDevice()) {
    content.classList.add('item1-mobile');
}

  toggleButton.addEventListener('click', function () {
    content.classList.toggle('full');
      if (content.classList.contains('full')) {
          content.classList.remove('show');
          content.classList.add('hidden-content');
          morles.textContent = 'VER MÁS ';
          chevron.classList.remove('fa-chevron-up');
          chevron.classList.add('fa-chevron-down');
      } else {
          content.classList.remove('hidden-content');
          content.classList.add('show');
          morles.textContent = 'VER MENOS ';
          chevron.classList.remove('fa-chevron-down');
          chevron.classList.add('fa-chevron-up');
      }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.speaker_btns');
  const content = document.querySelector('.item3');
  const morles = document.getElementById('morless');
  const chevron = document.getElementById('chevrons');

  function isMobileDevice() {
    return window.innerWidth < 768;
}
if (isMobileDevice()) {
    content.classList.add('item3-mobile');
}

  toggleButton.addEventListener('click', function () {
    content.classList.toggle('full');
      if (content.classList.contains('full')) {
          content.classList.remove('show');
          content.classList.add('hidden-content');
          morles.textContent = 'VER MÁS ';
          chevron.classList.remove('fa-chevron-up');
          chevron.classList.add('fa-chevron-down');
      } else {
          content.classList.remove('hidden-content');
          content.classList.add('show');
          morles.textContent = 'VER MENOS ';
          chevron.classList.remove('fa-chevron-down');
          chevron.classList.add('fa-chevron-up');
      }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.flex-container, .section2');
  elements.forEach(element => {
      element.style.animationDelay = "0.5s";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.section-oil, .content2');

  function checkVisibility() {
      elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
              element.classList.add('visible');
          }
      });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Ejecuta al cargar la página
});