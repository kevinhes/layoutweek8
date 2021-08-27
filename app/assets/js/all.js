$(function() {
  console.log('Hello Bootstrap5');
  $('.lv-select').on("click", function(event) {
    event.preventDefault();
    $('.class-lv').slideDown(400);
    $('.class-choice').toggle();
  });
});

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 30,
});

const recSwiper = new Swiper('.rec-container', {
  // Optional parameters
  slidesPerView: '1',
  spaceBetween: 30,
  breakpoints: {
    992: {
      slidesPerView: '3',
      // spaceBetween: 30,
    },
    768: {
      slidesPerView: '2',
      // spaceBetween: 30,
    }
  }
});

const listSwiper = new Swiper('.rec-list', {
      // Optional parameters
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: '1',
      // spaceBetween: 30,
  breakpoints: {
    768: {
      // Optional parameters
      slidesPerView: '1',
      // spaceBetween: 0,
      grid: {
        rows: 2,
      },
    }
  }
});