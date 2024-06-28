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
function moveCarouselRight() {
    const carousel = document.getElementById('carousel');
    const currentPosition = carousel.classList.item(1);

    if (currentPosition === 'carr-pos-1') carousel.classList.replace('carr-pos-1', 'carr-pos-2');
   else if (currentPosition === 'carr-pos-2') carousel.classList.replace('carr-pos-2', 'carr-pos-3');
   else if (currentPosition === 'carr-pos-3') carousel.classList.replace('carr-pos-3', 'carr-pos-4');
   else if (currentPosition === 'carr-pos-4') carousel.classList.replace('carr-pos-4', 'carr-pos-5');
   else if (currentPosition === 'carr-pos-5') carousel.classList.replace('carr-pos-5', 'carr-pos-6');
   else if (currentPosition === 'carr-pos-6') carousel.classList.replace('carr-pos-6', 'carr-pos-1');
}

function moveCarouselLeft() {
    const carousel = document.getElementById('carousel');
    const currentPosition = carousel.classList.item(1);

    if (currentPosition === 'carr-pos-1') carousel.classList.replace('carr-pos-1', 'carr-pos-6');
   else if (currentPosition === 'carr-pos-2') carousel.classList.replace('carr-pos-2', 'carr-pos-1');
   else if (currentPosition === 'carr-pos-3') carousel.classList.replace('carr-pos-3', 'carr-pos-2');
   else if (currentPosition === 'carr-pos-4') carousel.classList.replace('carr-pos-4', 'carr-pos-3');
   else if (currentPosition === 'carr-pos-5') carousel.classList.replace('carr-pos-5', 'carr-pos-4');
   else if (currentPosition === 'carr-pos-6') carousel.classList.replace('carr-pos-6', 'carr-pos-5');
}
let deletInterval;
function autoSliding() {
  deletInterval = setInterval(timer, 2000);
  function timer() {
    moveCarouselRight();
  }
}
autoSliding();

const elements = document.querySelectorAll(".carousel-element img");
elements.forEach(element => {
  element.addEventListener("mouseover", function(){
    clearInterval(deletInterval);
  });
  element.addEventListener("mouseout", function(){
    autoSliding();
  });
});