$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:18,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        
        responsive:{
            0:{
                items:1
            },
            425:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })

    
  });





  