/* global $ */
$(document).ready(function() {
  $("header nav .hamburger").click(function() {
    $(this).toggleClass("is-active");
  });
  // --------------------------- services slider-------------------
  $("#services .slider-container").slick({
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    rtl: true,
    nextArrow: `
    <button class="next-arrow d-none d-md-block">
      <img src="imgs/icons/slider-right-arrow.png">
    </button>
    `,
    prevArrow: `
    <button class="prev-arrow d-none d-md-block">
      <img src="imgs/icons/slider-left-arrow.png">
    </button>
    `,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // ---------------------------------------------- clients slider ---------------------------------
  $("#clients .slider-container").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    rtl: true,
    nextArrow: `
    <button class="next-arrow d-none d-md-block">
      <img src="imgs/icons/slider-right-arrow.png">
    </button>
    `,
    prevArrow: `
    <button class="prev-arrow d-none d-md-block">
      <img src="imgs/icons/slider-left-arrow.png">
    </button>
    `,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
/**
 * ---------------------------------- end clients slider -----------------------
 */
