import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".roadmap__swiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  speed: 400,
  grabCursor: true,
  breakpoints: {
    768: {
      spaceBetween: 35,
      slidesPerView: 2,
    },
    1280: {
      spaceBetween: 35,
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".swiper-navigation-next",
    prevEl: ".swiper-navigation-prev",
  },
});
