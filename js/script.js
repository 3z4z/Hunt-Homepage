$(function(){
  new VenoBox({
    selector: '.venobox',
    spinner: 'grid',
    titleattr: 'data-title',
    numeration: true,
    infinigall: true,
    share: true,
    autoplay: true,
  });
  $('.serv-wrap').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    vertical: true,
    centerMode: true,
    centerPadding: '0',
    rows: 0,
    verticalSwiping: true,
    nextArrow: '.service-CCC i.up',
    prevArrow: '.service-CCC i.down',
    pauseOnHover: false,
  })
  $('.test-slide-01').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    rows: 0,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    prevArrow: '.test-butts i.up',
    nextArrow: '.test-butts i.down',
  })
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
});
})