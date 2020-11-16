const slidersub = document.querySelector('.swiper-container1');
const slidermob = document.querySelector('.swiper-container');
const sliderdev = document.querySelector('.swiper-container2');

var mySwiper = new Swiper(slidermob, {
    // Optional parameters
    loop:true,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 700,
    breakpoints: {
      320: {
        slidesPerView:1,
      },

      375: {
        slidesPerView:1,
      },

      768: {
        slidesPerView: 3,
      },
      1300:{
        slidesPerView: 5
      }
    },
    
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    
  });


  var mySwiper = new Swiper(slidersub, {
    // Optional parameters
    loop:false,
    freeMode:true,
    centeredSlides: false,
    speed: 700,
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView:3,
      },
      768: {
        slidesPerView: 4,
      },
    },   
  });

  var mySwiper = new Swiper(sliderdev, {
    // Optional parameters
    loop:false,
    freeMode:true,
    centeredSlides: false,
    speed: 700,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView:2,
      },
      500: {
        slidesPerView: 3,
      },
    },   
  });

  