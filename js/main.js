// nav
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("show");
  })
);

// slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides, 5000); // Change  every 2 seconds
}

// news slider
let newslideIndex = 1;
showNewsSlides(newslideIndex);

function showNewsSlides(n) {
  let i;
  let newsSlides = document.getElementsByClassName("news-slides");
  let dots = document.getElementsByClassName("dot");
  if (n > newsSlides.length) {
    newslideIndex = 1;
  }
  if (n < 1) {
    newslideIndex = newsSlides.length;
  }
  for (i = 0; i < newsSlides.length; i++) {
    newsSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  newsSlides[newslideIndex - 1].style.display = "block";
  dots[newslideIndex - 1].className += " active";
  // setTimeout(showNewsSlides, 2000); // Change every 2 seconds
}
function currentSlide(n) {
  showNewsSlides((newslideIndex = n));
}

// top btn
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal-1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}