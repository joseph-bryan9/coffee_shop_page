/* Loading before video background displays*/
var loader = document.querySelector(".img-bg");
var videoBg = document.querySelector(".video-bg");

function load() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    videoBg.style.display = "block";
    videoBg.style.opacity = 1;
  }, 12000);
}

if (window.matchMedia("(max-width: 1200px)")) {
  load();
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header-section").style.top = "0";
  } else {
    document.querySelector(".header-section").style.top = "-100px";
    document.querySelector(".burger-menu-section").classList.remove("show");
  }
  prevScrollpos = currentScrollPos;
  stickyHeader2();
  //See stickyHeader2() function code at /* Header-2 Sticky Navbar */
};

/* Header-2 Sticky navbar */
var navbar = document.querySelector(".header-2");
var sticky = navbar.offsetTop;

function stickyHeader2() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Mini Slideshow Script */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* Burger Menu toggle script */
document
  .querySelector(".burger-menu")
  .addEventListener("click", () =>
    document.querySelector(".burger-menu-section").classList.toggle("show")
  );

/* Side Menu toggle script*/
function sideMenuToggle() {
  var container = document.querySelector(".container");
  var sideMenu = document.querySelector(".side-menu-section");

  container.classList.toggle("active");
  sideMenu.classList.toggle("active");
}

/* Up Button Script */
var scrollBtn = document.querySelector(".up-btn");

// When the user scrolls down 20px from the top of the document, show the button
var scrollBtn = document.querySelector(".up-btn");

window,
  addEventListener("scroll", () => {
    if (window.pageYOffset > 430) {
      scrollBtn.classList.add("active");
    } else {
      scrollBtn.classList.remove("active");
    }
  });

// When screen size is on mobile devices or tablets, run this script for video
window.addEventListener("load", function () {
  const vidBg = document.getElementById("video");

  const visible =
    vidBg.offsetWidth || vidBg.offsetHeight || vidBg.getClientRects().length;

  if (visible) {
    const children = vidBg.getElementsByTagName("source");

    for (let i = 0; i < children.length; ++i) {
      children[i].src = children[i].dataset.src;
    }
  }

  vidBg.load();
});
