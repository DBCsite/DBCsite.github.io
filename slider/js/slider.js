$(document).ready(function(){
    /*$('.gallery-slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.gallery-slider',
        focusOnSelect: true,
        infinite: false,
        responsive:[
                {
                    breakpoint: 769,
                    settings:{
                        slidesToShow:3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings:{
                        slidesToShow:2,
                        slidesToScroll: 1,
                    }
                }
        ]
    });*/
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