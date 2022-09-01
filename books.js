//mobile nav
const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

function toggleMobileNav() {
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
}

//1. click on button
navBtn.addEventListener('click', function(event){
    event.stopPropagation();
    toggleMobileNav();
})

//2. click on the window beyond navigation
window.addEventListener('click', function(){
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
    }
})

//3. stop click inside opened mobile navigation
mobileNav.addEventListener('click', function(event){
    event.stopPropagation();
})




//partners logo slider 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    850: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

