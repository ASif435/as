$(document).ready(function() {
   
//  mean menu
$('#menu-active').meanmenu(
  {
    meanMenuContainer: '.menu',
    meanScreenWidth: "991"
  }
);

  $('.slider-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    
    dots: false,
    autoplay:true,
    arrows:true,
   
  });
  //review section
  $('.Review-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows:false,
    autoplay:true,
   
  });
  //brand section
  $('.brand-active').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    
    dots: false,
    autoplay:true,
     // the magic
  responsive: [{

    breakpoint: 991,
    settings: {
      slidesToShow: 4,
      infinite: true
    }

  }, {

    breakpoint: 420,
    settings: {
      slidesToShow: 3,
      dots: true
    },
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      dots: true
    }

  }, {

    breakpoint: 300,
    settings: "unslick" // destroys slick

  }]
   
  });
  //counter up plugin
  $('.counter').counterUp({
    delay: 10,
    time: 2000
});
});