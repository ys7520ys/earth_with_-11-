var swiper1 = new Swiper(".mySwiper", {
  speed: 1500, 
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".mySwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mySwiper .swiper-button-next",
    prevEl: ".mySwiper .swiper-button-prev",
  },
});

var swiper2 = new Swiper(".swiper_mobile", {
  speed: 100,
  pagination: {
    el: ".swiper_mobile .swiper-pagination",
  }
});