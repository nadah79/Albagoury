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
  setTimeout(showSlides, 10000); // Change  every 5 seconds
}
// news slider
let newslideIndex = 1;

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
  // setTimeout(showNewsSlides, 2000); // 
}
function currentSlide(n) {
  showNewsSlides((newslideIndex = n));
}

function onHomePageLoad(){
  showSlides();
  showNewsSlides(newslideIndex);
}



// top btn & scroll
let topBtn = document.getElementById("topBtn");
let nav = document.getElementById("navbar");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topBtn.style.display = "block";
    nav.classList.add("nav-background");
  } else {
    topBtn.style.display = "none";
    nav.classList.remove("nav-background");

  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function openModal(modalName){
  let modal = document.getElementById(modalName);
    modal.style.display = "block";
}

 function closeModal(modalName) {
  let modal = document.getElementById(modalName);
  modal.style.display = "none";
}


window.onclick = function(event) {
  let modal = document.getElementsByClassName("modal");
  for(let i=0 ; i<modal.length ; i++){
      if(modal[i].style.display=="block")
      {
        if (event.target == modal[i]) {
          modal[i].style.display = "none";
        }
      }
  }
 
}