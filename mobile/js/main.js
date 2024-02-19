$(function(){
  // program_box 열기 & 닫기
  var btnProgram = $('.btn_program'),
      btnClose = $('.program_box .btn_close');

  btnProgram.on('click',()=>{
    $('.program_box').addClass('on');
    $('body').css('overflow', 'hidden');
  });

  btnClose.on('click',()=>{
    $('.program_box').removeClass('on');
    $('body').css('overflow', 'auto');
  });

  // main_event 닫기 
  var evtClose = $('.main_event .evt_close');
  
  // main_event가 보여질 때 body 스크롤 막기
  if ($('.main_event').is(':visible')) {
    $('body').css('overflow', 'hidden');
  }

  // main_event 닫는 클릭이벤트
  evtClose.on('click', () => {
    $('.main_event').addClass('off');
    $('body').css('overflow', 'auto');
  });

  // section visual swiper slide
  const swiper = new Swiper('.visual', {
    loop: true
  });

  /* 
    visual_slide 변경시, gnb ul li.active 시 a 색상
    visual_slide 배경에 맞게 변경
  */
  // visual_slide 현재 위치 파악
  swiper.on('slideChange', function () {
    let idx = swiper.realIndex;
    console.log(idx);
    if(idx == '0'){
      // idx 현재 위치가 0 이면 할일
      color('#F17785');
    } else if(idx == '1'){
      // idx 현재 위치가 1 이면 할일
      color('#ABCD05');
    }
  });

  // gnb ul li.active 시 슬라이드 배경색에 맞게 a 색상 변경 함수
  function color(color){
    // gnb ul li 찾고 반복적으로 일시키기
    $('.gnb ul li').each(function(){
      if($(this).hasClass('active')){
        $(this).addClass('active');
        $(this).children().css('color', color);
      }
    })
  };

  // section thanks swiper slide
  const swiper2 = new Swiper('.thanks_slide', {
    loop: true,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1.22,
        spaceBetween: 20,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  // section thanks meet slide
  const swiper3 = new Swiper('.meet_slide', {
    loop: true,
    pagination: {
      el: ".meet_pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1.7,
        spaceBetween: 20,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
});