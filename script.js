
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
  slidesToShow: 4,
  slidesToScroll: 5
});
$('.categories').slick({
  autoplay: true,
  speed: 500,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 5,
});


