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
  var burgerMenu2 = document.querySelector(".burger-menu-2");

  container.classList.toggle("active");
  sideMenu.classList.toggle("active");
  burgerMenu2.classList.toggle("active");
  // document.body.classList.add("stop-scrolling");
}

// document
//   .querySelector(".burger-menu-2")
//   .addEventListener("click", () =>
//     document.querySelector(".side-menu-section").classList.toggle("active")
//   ),
//   document.querySelector(".container").classList.toggle("active");
