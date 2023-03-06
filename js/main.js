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