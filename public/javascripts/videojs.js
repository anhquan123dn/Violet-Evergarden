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
  speed: 3000,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: true,
  autoResize: true,
  initialSlide: 3,
  loop: true,
});
mySwiper.on("slideChange", () => {
  var doc = {
    claudia: document.getElementById("claudia"),
    gilbert: document.getElementById("gilbert"),
    cattleya: document.getElementById("cattleya"),
    violet: document.getElementById("violet"),
    benedict: document.getElementById("benedict"),
    erica: document.getElementById("erica"),
    iris: document.getElementById("iris"),
  };
  key =
    mySwiper.slides.eq(mySwiper.activeIndex).data("swiper-slide-index") ||
    mySwiper.activeIndex;
  if (key == 0) {
    doc.claudia.style.display = "block";
  } else {
    doc.claudia.style.display = "none";
  }
  if (key == 1) {
    doc.gilbert.style.display = "block";
  } else {
    doc.gilbert.style.display = "none";
  }
  if (key == 2) {
    doc.cattleya.style.display = "block";
  } else {
    doc.cattleya.style.display = "none";
  }
  if (key == 3) {
    doc.violet.style.display = "block";
  } else {
    doc.violet.style.display = "none";
  }
  if (key == 4) {
    doc.benedict.style.display = "block";
  } else {
    doc.benedict.style.display = "none";
  }
  if (key == 5) {
    doc.erica.style.display = "block";
  } else {
    doc.erica.style.display = "none";
  }
  if (key == 6) {
    doc.iris.style.display = "block";
  } else {
    doc.iris.style.display = "none";
  }
});
