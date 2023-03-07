
// nav
let hamburger=document.querySelector(".hamburger");
let navMenu =document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle("show");
});

document.querySelectorAll(".nav-link").forEach(n=>
    n.addEventListener("click",()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("show");
    }))


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
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "flex";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// news slider

let newslideIndex = 0;
showNewsSlides(1);

function showNewsSlides(n) {
  let i;
  let newsSlides = document.getElementsByClassName("news-slides");
  let dots = document.getElementsByClassName("dot");
  if (n > newsSlides.length) {newslideIndex = 1}  ;
  if (n < 1) {newslideIndex = newsSlides.length};
  for (i = 0; i < newsSlides.length; i++) {
    newsSlides[i].style.display = "none";  
  }
  newslideIndex++;
  if (newslideIndex > newsSlides.length) {newslideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  newsSlides[newslideIndex-1].style.display = "block";  
  dots[newslideIndex-1].className += " active";
  setTimeout(showNewsSlides, 2000,n); // Change image every 2 seconds
}
function currentSlide(n) {
  showNewsSlides(slideIndex = n);
}