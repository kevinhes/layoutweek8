$(function() {
  console.log('Hello Bootstrap5');
  $('.class-option-first .class-select').on("click", function(event) {
    event.preventDefault();
    $('.class-lv').slideDown( "slow" );
    $('.class-choice').slideDown( "slow" );
    $('.reserve-btn').slideDown( "slow" );
    $('.class-option-short').removeClass( "selected-short" );
    $('.class-option-long').removeClass( "selected-long" );
    $('.class-option-first').addClass( "selected-first" );
    $('.class-option-short').removeClass( "border-4" );
    $('.class-option-long').removeClass( "border-4" );
    $('.class-option-first').addClass( "border-4" );
  });

  $('.class-option-short .class-select').on("click", function(event) {
    event.preventDefault();
    $('.class-lv').slideDown( "slow" );
    $('.class-choice').slideDown( "slow" );
    $('.reserve-btn').slideDown( "slow" );
    $('.class-option-first').removeClass( "selected-first" );
    $('.class-option-long').removeClass( "selected-long" );
    $('.class-option-short').addClass( "selected-short" );
    $('.class-option-first').removeClass( "border-4" );
    $('.class-option-long').removeClass( "border-4" );
    $('.class-option-short').addClass( "border-4" );
  });

  $('.class-option-long .class-select').on("click", function(event) {
    event.preventDefault();
    $('.class-lv').slideDown( "slow" );
    $('.class-choice').slideDown( "slow" );
    $('.reserve-btn').slideDown( "slow" );
    $('.class-option-first').removeClass( "selected-first" );
    $('.class-option-short').removeClass( "selected-short" );
    $('.class-option-long').addClass( "selected-long" );
    $('.class-option-first').removeClass( "border-4" );
    $('.class-option-short').removeClass( "border-4" );
    $('.class-option-long').addClass( "border-4" );
  });

  $(document).on( "click", function(event) {
    var _con = $('.class-select');
    if (!_con.is(event.target)) {
      $('.class-lv').slideUp( "slow" );
      $('.class-choice').slideUp( "slow" );
      $('.reserve-btn').slideUp( "slow" );
      $('.class-option-first').removeClass( "selected-first" );
      $('.class-option-short').removeClass( "selected-short" );
      $('.class-option-long').removeClass( "selected-long" );
      $('.class-option-first').removeClass( "border-4" );
      $('.class-option-short').removeClass( "border-4" );
      $('.class-option-long').removeClass( "border-4" );
    }
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

const classSwiper = new Swiper('.class-list', {
  // Optional parameters
  slidesPerView: '1',
  spaceBetween: 24,
  grid: {
    rows: 3,
  },
  breakpoints: {
    992: {
      slidesPerView: '3',
      spaceBetween: 30,
      grid: {
        rows: 1,
      },
    },
    767: {
      slidesPerView: '2',
      spaceBetween: 30,
      grid: {
        rows: 1,
      },
    }
  }
});