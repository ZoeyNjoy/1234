$(function(){

  //헤더뿅
  $(window).on('scroll', function(){
    var st = $(window).scrollTop();
    if(st>0){
      $('#header').addClass('fixed');
    }else{
      $('#header').removeClass('fixed');      
    }

  });

  
  // intro anime
  anime({
    targets: '.home .mscl',
    translateY: [-25, 0],
    opacity:[0, 1],
    delay:100,
    duration:1500,
    loop:true,
    direction: 'infinite',
    easing: 'easeOutBounce',
  });
  anime({
    targets: '.tit1 p',
    delay:anime.stagger(200),
    translateX: [-10, 0],    
    scaleX: [0, 1],
    easing: 'easeInExpo',
    duration:300
  });
  anime({
    targets: '.tit2 p',
    translateY: [50, 0],
    scaleY: [0, 1],
    delay:1500,
  });


  //타자
  new TypeIt('.typing')
  .pause(1000).go();      


  //차트
  $(window).scroll(function(){
		var skill = $("#skill").offset().top-1000;
		if($(this).scrollTop()>skill){
			$('.cPs').easyPieChart({
					barColor:"#5362c0",
					scaleColor:false,
					lineCap: "square",
					lineWidth:10,
          animate: 2000,
			})
			$('.cAi').easyPieChart({
					barColor:"#f8a522",
					scaleColor:false,
					lineCap: "square",
					lineWidth:10,
          animate: 2000,
			})
			$('.cHtml').easyPieChart({
					barColor:"#3bb6ea",
					scaleColor:false,
					lineCap: "square",
					lineWidth:10,
          animate: 2000,
			})
			$('.cCss').easyPieChart({
					barColor:"#f6c223",
					scaleColor:false,
					lineCap: "square",
					lineWidth:10,
          animate: 2000,
			})
			$('.cJs').easyPieChart({
					barColor:"#8dd62f",
					scaleColor:false,
					lineCap: "square",
					lineWidth:10,
          animate: 2000,
			})
		}
	})


  //탭게시물
setTimeout(function(){
  $('.worksMenu').hide();
  $('.worksMenu').css("opacity","1");
  $('.worksMenu').eq(0).show();
},100);

$('main .works').each(function(){
  var tab = $(this).find(".cate a");
  var cont = $(this).find('.worksMenu');

  tab.click(function(){
    var ind=$(this).index();
    tab.removeClass("active");
    $(this).addClass("active");
    cont.removeClass("active");
    cont.eq(ind).addClass(
      anime({
        targets: '.worksList',
        translateX: [-10, 0],    
        scaleX: [0, 1],
        easing: 'easeInExpo',
        duration:200
      }));
    cont.hide();
    cont.eq(ind).show();
  });
});




// 사진 클릭 풀화면
let popup = document.querySelectorAll('.design a');
let popupFull = document.querySelectorAll('.design .full');
let popupClose = document.querySelectorAll('.design .full');

for(let s of popupFull){s.style.display='none'};

popup.forEach(function(i){
  i.addEventListener('click',function(e){
    e.preventDefault()
    this.nextElementSibling.style.display='block';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    $('#header').removeClass('fixed');      
  })
});
popupClose.forEach(function(i){
  i.addEventListener('click',function(){
    this.style.display='none'
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
    $('#header').addClass('fixed');
  })
});



const footSlide = new Swiper('.fSlide', {
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  },
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
	speed : 2000,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


});