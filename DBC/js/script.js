$(document).ready(function(){
  $('.slider').slick({
    dots:true,
    arrows: true,
    adaptiveHeight: false,
    slidesToShow: 3,
    autoplay: true,
    autolaySpeed: 7000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDots: true,
    centerMode: true,
    responsive: [{
      breakpoint: 1440,
      settings: {
         vertical: true,
         verticalSwiping: false,
         arrows: false,
         autolaySpeed: 4000,
        }
    }]


    
  });
});

















// Get the modal
var modal = document.getElementById("myModal");
    
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

