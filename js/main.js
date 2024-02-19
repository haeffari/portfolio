$(function(){
  // 00) 
  $('.menu_open').click(function(){
    $('.gnb, body, .menu_open').toggleClass('on');
  })
  $('.gnb ul li a').click(function(){
    $('.gnb, body, .menu_open').removeClass('on');
  })

  // 01) header gnb Splitting
  Splitting(); 

  // 02) header active 
  // 초기 스크롤 탑 값 0
  var prevScrollTop = 0;

  // 스크롤이 진행되면 할일
  document.addEventListener('scroll', function(){
    // 현재 스크롤 탑 값은, 윈도우의 스크롤 탑
    var nowScrollTop = $(window).scrollTop();

    // 현재 스크롤 탑값이, 이전의 스크롤 탑 값보다 커지면
    if(nowScrollTop > prevScrollTop){
      // 헤더에 active 클래스 추가
      $('header').addClass('active');
    } else {
      // 그게 아니면, 헤더에 active 클래스 제거
      $('header').removeClass('active');
    }

    // 이전의 스크롤 탑 값은, 현재 스크롤 탑 값으로 업데이트 
    prevScrollTop = nowScrollTop;
  });

  // 03) visual, con04 scrolla animate
  $('.animate').scrolla({
    mobile:true,
    once:false
  });

  // 04) visual svg animation path 길이 확인
  $('.svg_ani').find('#svgAni01').each(function(i, path){
    var length = path.getTotalLength();
  });

  // 05) con01 video 속도
  // con01 비디오 태그 인덱스 값0
  var con1video = $('.con01 video')[0];

  // 비디오 인덱스 0 의 속도비율을 .45 로 지정 (적당히 느리게 속도 지정)
  con1video.playbackRate = .45;
})

// gsap animation
$(function(){
  // con01 
  gsap.timeline({
    scrollTrigger:{
      trigger: '.con01', // 트리거 대상
      start: '0% 80%', // 트리거 대상의 0% 와 브라우저의 80% 가 만날때 애니메이션 시작
      end: '100% 100%', // 트리거 대상의 100%와 브라우저의 100%가 만나면 애니메이션 종료
      scrub: 1, // 스크롤 이벤트는 스크롤이 사용될때만 재생
    }
  })
  .to('.wrap', {backgroundColor:'#fff', color:'#000', ease:'none', duration:5}, 0)
  .to('.svg_ani path', {stroke:'#000', ease:'none', duration:5}, 0)
  .to('.scroll', {opacity:'0', ease:'none', duration:5}, 0)
  .fromTo('.video_wrap video', {'clip-path': 'inset(60% 60% 60% 60% round 30%)'},
  {'clip-path': 'inset(0% 0% 0% 0% round 0%)', ease:'none', duration:10}, 0)

  // con02 title 타이틀 텍스트 애니메이션
  gsap.timeline({
    scrollTrigger:{
      trigger: '.con02', // 트리거 대상
      start: '0% 100%', // 트리거 대상의 0% 와 브라우저의 80% 가 만날때 애니메이션 시작
      end: '0% 20%', // 트리거 대상의 100%와 브라우저의 100%가 만나면 애니메이션 종료
      scrub: 1, // 스크롤 이벤트는 스크롤이 사용될때만 재생
    }
  })
  .fromTo('.con02 .title .a', {x:'-100%'}, {x:'0%', ease:'none', duration:5}, 0)
  .fromTo('.con02 .title .b', {x:'100%'}, {x:'0%', ease:'none', duration:5}, 0)
  
  // con02 work_list 애니메이션
  gsap.timeline({
    scrollTrigger:{
      trigger: '.con02 .work_list', // 트리거 대상
      start: '0% 100%', // 트리거 대상의 0% 와 브라우저의 80% 가 만날때 애니메이션 시작
      end: '0% 100%', // 트리거 대상의 100%와 브라우저의 100%가 만나면 애니메이션 종료
      scrub: 1, // 스크롤 이벤트는 스크롤이 사용될때만 재생
    }
  })
  .to('.wrap', {backgroundColor:'#000', color:'#fff', ease:'none', duration:5}, 0)

  // con02 title fixed
  .to('.con02 .title', {position:'fixed', left:'0', top:'0', ease:'none', duration:5}, 0)

  // con02 work_list margin-top 자연스럽게 적용
  .fromTo('.con02 .work_list', {margin: '0 auto'},
   {margin: '100vh auto 0', position: 'relative', zIndex:'10', ease:'none', duration:1}, 0)

  // con02 work_list 애니메이션 종료시, title 화면 밖으로 아웃
  gsap.timeline({
    scrollTrigger:{
      trigger: '.con02 .work_list', // 트리거 대상
      start: '100% 50%', // 트리거 대상의 0% 와 브라우저의 80% 가 만날때 애니메이션 시작
      end: '100% 0%', // 트리거 대상의 100%와 브라우저의 100%가 만나면 애니메이션 종료
      scrub: 1, // 스크롤 이벤트는 스크롤이 사용될때만 재생
    }
  })
  // con02 title out
  .to('.con02 .title .a', {x:'-100%'}, 0)
  .to('.con02 .title .b', {x:'100%'}, 0)

  // con03 simply scroll animation
  $('.con03 .img_list').simplyScroll({
    speed:4,
    pauseOnHover: false,
    pauseOnTouch: false 
  })  

  // gallery 스크롤 트리거
  gsap.registerPlugin(ScrollTrigger);

  // 스크롤 트리거의 반응형 적용
  ScrollTrigger.matchMedia({
    // 최소 1024px 까지만 적용 (데스크탑 온니)
    '(min-width: 1024px)': function(){
      // 가로 스크롤
      let list = gsap.utils.toArray('.gallery ul li')
      let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.gallery',
          pin: true,
          scrub: 1,
          start: 'center center',
          end: '300%'
        }
      });

      // imgbox 센터로 오면 확장, 축소 모션
      gsap.utils.toArray('.img_box').forEach(function(imgBox){
        // img_box 의 이미지들 확장 
        gsap.timeline({
          scrollTrigger: {
            trigger: imgBox,
            containerAnimation: scrollTween,
            start: 'center right',
            end: 'center center',
            scrub: true
          }
        })
        .to(imgBox, {'clip-path': 'inset(0%)', ease: 'none', duration: 1}, 0)

        // img_box 의 이미지들 센터 지나면 양옆 이미지 다시 축소 
        gsap.timeline({
          scrollTrigger: {
            trigger: imgBox,
            containerAnimation: scrollTween,
            start: 'center center',
            end: 'center left',
            scrub: true
          }
        })
        .to(imgBox, {'clip-path': 'inset(30%)', ease: 'none', duration: 1}, 0)
      })

      // imgbox 센터로 오면 text_box 보이고 감추기 모션
      gsap.utils.toArray('.gallery ul li .text_box').forEach(function(textBox){

        // text_box 보이기 
        gsap.timeline({
          scrollTrigger: {
            trigger: textBox,
            containerAnimation: scrollTween,
            start: 'center 70%',
            end: 'center 40%',
            scrub: true
          }
        })
        .to(textBox, {'opacity': '1', 'x': -100}, 0)

        // text_box 감추기
        gsap.timeline({
          scrollTrigger: {
            trigger: textBox,
            containerAnimation: scrollTween,
            start: 'center 30%',
            end: 'center 20%',
            scrub: true
          }
        })
        .to(textBox, {'opacity': '0'}, 0)

        // counter 숫자 변경
        gsap.utils.toArray('.num').forEach(function(text){
          // num 의 data- 숫자 가져오기 
          let num = text.getAttribute('data-text'),
              // counter 의 now 에 counter 변수 설정 
              counter = document.querySelector('.counter .now');
          
          // 스크롤 트리거 시작
          ScrollTrigger.create({
            trigger: text, // num 매개변수가 대상
            start: '0% center', // num 0 과 뷰포트 중간에 오면 시작하고
            end: '100% center', // num 이 끝나고 뷰포트 센터면 종료
            scrub: true, // 부드럽게 되감기
            containerAnimation: scrollTween, // 스크롤 시점 잡아주는 것은 gallery 스크롤 이벤트 시점으로 위치
            onEnter: self => counter.innerText = num, // 스크롤 위치가 start 를 지나, 앞으로 이동시 .counter .num 에 텍스트 대입
            onEnterBack: self => counter.innerText = num // 스크롤 위치가 end 를 지나, 뒤로 이동시 .counter .num 에 텍스트 대입
          })
        })
      })
    }
  })
})