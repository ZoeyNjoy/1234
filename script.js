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
  $('.m_nav').hide();
  $(".bar").on('click', function () {
    $(this).next().slideToggle();
  });
  
  var burger = $('.bar');
  burger.each(function(index){
    var $this = $(this);
    $this.on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active');
    })
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


  let observer = new IntersectionObserver((e)=>{
    e.forEach((typing)=>{
      if(typing.isIntersecting){
        typing.target.style.opacity=1;
      //타자
        new TypeIt('.typing')
        .pause(1000).go();      
      }else{
        typing.target.style.opacity=0;
      }
    })
  });
  
  let typing = document.querySelectorAll('.typing')
  observer.observe(typing[0])





  //차트
  $(window).scroll(function(){
		var skill = $("#skill").offset().top-1000;
		if($(this).scrollTop()>skill){
			$('.cPs').easyPieChart({
					barColor:"#5362c0",
					scaleColor:false,
					lineCap: "square",
					lineWidth:10,
			})
			$('.cAi').easyPieChart({
					barColor:"#f8a522",
					scaleColor:false,
					lineCap: "square",
					lineWidth:10,
			})
			$('.cHtml').easyPieChart({
					barColor:"#3bb6ea",
					scaleColor:false,
					lineCap: "square",
					lineWidth:10,
			})
			$('.cCss').easyPieChart({
					barColor:"#f6c223",
					scaleColor:false,
					lineCap: "square",
					lineWidth:10,
			})
			$('.cJs').easyPieChart({
					barColor:"#8dd62f",
					scaleColor:false,
					lineCap: "square",
					lineWidth:10,
			})
		}

	})

  ScrollOut({
    onShown : ()=>{
    }

  });

  //탭게시물
setTimeout(function(){
  $('.worksMenu').hide();
  $('.worksMenu').css("opacity","1");
  $('.worksMenu').eq(0).show();
},100);

$('main .works').each(function(){
  var tab = $(this).find(".cate a");
  var cont = $(this).find('.worksMenu');
  var btn = $(this).find('#btn');

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
    btn.hide();
    cont.eq(ind).show();
    btn.eq(ind).show();
  });
});

  $(".all .worksMenu .worksList").slice(0, 6).show(); // 초기갯수
    $("#btn").click(function(e){ // 클릭시 more
      e.preventDefault();
      $(".worksList:hidden").slice(0, 4).show(); // 클릭시 more 갯수 지저정
      if($(".worksList:hidden").length == 0){ // 컨텐츠 남아있는지 확인
          alert("게시물의 끝입니다."); // 컨텐츠 없을시 alert 창 띄우기 
    }
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
    // document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    $('#header').removeClass('fixed');      
  })
});
popupClose.forEach(function(i){
  i.addEventListener('click',function(){
    this.style.display='none'
    // document.getElementsByTagName('body')[0].style.overflow = 'visible';
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