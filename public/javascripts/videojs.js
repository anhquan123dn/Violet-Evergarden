const player = new Plyr("#player");

const mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    // slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
