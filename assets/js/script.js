'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});
/*********** 
 * 
 * ir para o top assim que recarregar

  */

  window.location.href = '#top';
  window.location.href = 'index.html#top';
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
            

/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = navbar.querySelectorAll("a"); // Select all links inside the navbar




window.location.href = '#top';

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active"); // Toggle the nav-active class
  
  if (navbar.classList.contains("active")) {
    document.body.style.overflow = "hidden"; // Block scrolling when navbar is active
  } else {
    document.body.style.overflow = "auto"; // Allow scrolling when navbar is closed
  }
}

// Add event listener to toggles
navTogglers.forEach(function (toggler) {
  toggler.addEventListener("click", toggleNavbar);
});

// Add event listener to window scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    navbar.classList.add("fixed"); // Add a class to fix the navbar
  } else {
    navbar.classList.remove("fixed"); // Remove the class to fix the navbar
  }
});

// Add event listener to links inside the navbar
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("nav-active"); // Remove the nav-active class
    document.body.style.overflow = "auto"; // Allow scrolling on the entire page
  });
});



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
    
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    
    
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    
  }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(slideNext, 7000); // alterado para 250ms
}

// remove os eventos de mouseover e mouseout
// addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
//   clearInterval(autoSlideInterval);
// });

// addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

// ao invés disso, você pode pausar o auto slide quando o usuário interage com os botões
heroSliderNextBtn.addEventListener("click", function () {
  clearInterval(autoSlideInterval);
  setTimeout(autoSlide, 7000); // reinicia o auto slide após 250ms
});

heroSliderPrevBtn.addEventListener("click", function () {
  clearInterval(autoSlideInterval);
  setTimeout(autoSlide, 7000); // reinicia o auto slide após 250ms
});

window.addEventListener("load", autoSlide);



/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});


/************ 


popup
*/






  