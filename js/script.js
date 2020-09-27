$(document).ready(function(){
    $('.tabs-triggers__item').click(function(e){
        e.preventDefault();

        $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
        $('.tabs-content__item').removeClass('tabs-content__item--active');

        $(this).addClass('tabs-triggers__item--active');
        $($(this).attr('href')).addClass('tabs-content__item--active');
    });

    
    $('.tabs-triggers__item:nth-child(1)').click(); 
    
    // new tab
    $('.tabs-trig__item').click(function(o){
      o.preventDefault();

      $('.tabs-trig__item').removeClass('tabs-trig__item--active');
      $('.tabs-cont__item').removeClass('tabs-cont__item--active');

      $(this).addClass('tabs-trig__item--active');
      $($(this).attr('href')).addClass('tabs-cont__item--active');
    });
    
    $('.tabs-trig__item:first').click();


    $('.slider').slick({
        dots:true,
        slidesToShow:3,
        slidesToScroll:3,
        speed:800,
        infinite:false,
        touchThreshold:6, 
        rows:2,
        responsive:[
            {
                breakpoint:1300,
                settings:{
                    slidesToShow:1,
                    rows:4,
                }
            },
            {
                breakpoint:970,
                settings:{
                    slidesToShow:1,
                    rows:4,
                }
            },
            {
                breakpoint:840,
                settings:{
                    dots: false
                }
            }
        ]

    });

    $('.slider-object').slick({
        slidesToShow:4,
        speed:800,
        touchThreshold:6, 
        responsive:[
            {
                breakpoint:1750,
                settings:{
                    slidesToShow:3
                }                                
            },
            {
                breakpoint:1300,
                settings:{
                    slidesToShow:2
                }                                
            }
        ]
    });

    $('.slider-search').slick({
        slidesToShow:3,
        dots: true,
        speed: 800,
        touchThreshold:6, 
        rows: 6,
        responsive:[
            {
                breakpoint:1300,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:970,
                settings:{
                    slidesToShow:1,
                }
            },
            {
                breakpoint:840,
                settings:{
                    slidesToShow:1,
                    dots:false,
                }
            }
        ]
    });


    $('.gallery-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      dots: true,
      infinite: false,
      appendDots: $('.gallery-slider-nav')
    });
    countBtn = $(".gallery-slider .slick-list .slick-track").children().length;
    console.log(countBtn);
    $('.gallery-button span').text('+'+countBtn);
    for(let i = 0; i< 6; i++){
        src = "url("+$(".gallery-slider .slick-list .slick-track").children(".slick-slide:nth-child("+i+")").attr('src')+")";
        $(".gallery-slider-nav ul li button:nth-child("+i+")").css({'background-image' : src});
    }
});

 // Get the modal
var mymodal = document.getElementById("myModal");
    
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  mymodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  mymodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == mymodal) {
    mymodal.style.display = "none";
  }
}


// slider items
var modal = $('.modal');
$('.gallery-button').click(function(){
    modal.css({'display' : 'block'});
    $('.modal__gallery-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: false,
        dots:true,
        appendDots: $('.modal__gallery-slider-nav')
    });
    $('.modal').click(function(e) {
		if ($(e.target).closest('.modal__content').length == 0) {
			$(this).fadeOut();					
		}
	});
    count = $(".modal__gallery-slider .slick-list .slick-track").children().length;
    for(let i = 0; i< count; i++){
        src = "url("+$(".modal__gallery-slider .slick-list .slick-track").children(".slick-slide:nth-child("+i+")").attr('src')+")";
        $(".modal__gallery-slider-nav ul li button:nth-child("+i+")").css({'background-image' : src});
    }
    $(".modal__gallery-slider-nav").scroll(function(){
        scrollPosit = $(".modal__gallery-slider-nav").scrollTop();
        
        if(scrollPosit > 85){
            $('.prev').css({'display':'block'});
            
        } else {
            $('.prev').css({'display':'none'});
        }
    });
    $(".next").click(function(){
        scrollPos = $(".modal__gallery-slider-nav").scrollTop();
        $(".modal__gallery-slider-nav").animate({scrollTop :scrollPos + 85}, 500);
    });
    $(".prev").click(function(){
        scrollPos = $(".modal__gallery-slider-nav").scrollTop();
        if(scrollPos < 200 && scrollPos > 85){
            $(".modal__gallery-slider-nav").animate({scrollTop : 0 }, 500);
        } else {
            $(".modal__gallery-slider-nav").animate({scrollTop :scrollPos - 85}, 500);
        }
        
    });
    
    

});