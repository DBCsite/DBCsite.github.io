$(document).ready(function(){
   $('.header__burger').click(function(event){
        $('.header__burger, .menu').toggleClass('active');
   });

  
  $('.actual__info-btn').click(function(event){
      $('.actual-swipe').addClass('show');
  });
  $('.back__btn').click(function(event){
     $('.actual-swipe').removeClass('show');
  });

});