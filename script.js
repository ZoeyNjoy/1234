$(function(){
  
  $(window).on('scroll', function () {
    var st = $(this).scrollTop();

    if (st > 0) {
      $('#header').addClass('fixed');
    } else {
      $('#header').removeClass('fixed');
    }
  });

})