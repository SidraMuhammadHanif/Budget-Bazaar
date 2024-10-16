
$( function() {
  $( "#accordion" ).accordion({
    Height: 200,
    Width: 200,
    collapsible: true,
    heightStyle: "fill"
  });
  $( "#accordion" ).accordion( "refresh" );
})

$('.wrapper').slick({
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    centerMode: true,
})
$('.multiple-items').slick({
  autoplay: true,
  speed: 800,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 4
});

// Timer

