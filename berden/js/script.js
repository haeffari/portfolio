// 스크롤 이벤트
$(document).ready(function(){
  const BODY = $('body');
  const mobBtn = $('.mob_btn');
  const scrollTopBtn = $('.scrollTop_btn');
  const mobSubtn = $('header .sub_menu > .depth1 > li > span');

  const schBtn = $('.sch_btn');
  const hNavBtn = $('.h_nav');
  const subNav = $('.subNav');
  const schWrap = $('.search_wrap');

  let hNavIs = false;
  let schWrapIs = false;

  const ftrBtn = $('.family_wrap > a')
  const ftrWrap = $('.family_wrap')

  ftrBtn.on('click', function(e){
    e.preventDefault()
    ftrWrap.toggleClass('active')
  })

  hNavBtn.hover(hNav);

  subNav.on('mouseleave', hNav_reset);

  schBtn.on('click', function(){
    if(!schWrapIs){
      sch();
    } else {
      sch_reset();
    }
  });

  function hNav(){
    if(!schWrapIs && !hNavIs){
      subNav.slideDown(function(){
        BODY.addClass('dOpen')
      })
      hNavIs = true
    }
  }
  function hNav_reset(){
    if(hNavIs){
      subNav.slideUp(function(){
        BODY.removeClass('dOpen')
      })
      hNavIs = false
    }
  }
  function sch(){
    schWrap.slideDown()
    BODY.addClass('sOpen')
    schWrapIs = true
    hNav_reset()
  }

  function sch_reset(){
    if(schWrapIs){
      schWrap.slideUp()
      BODY.removeClass('sOpen')
      schWrapIs = false
    }
  }

  // 스크롤탑 버튼 클릭이벤트
  scrollTopBtn.on('click', function(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  // header scrolling event
  $(window).on('scroll', function(){
    let scroll = $(this).scrollTop();
  
    if(scroll > 60){
      BODY.addClass('scrolling');
      scrollTopBtn.addClass('on');
    } else {
      BODY.removeClass('scrolling');
      scrollTopBtn.removeClass('on');
    }
  })

  // mobile nav click event
  mobBtn.on('click', function(){
    BODY.toggleClass('m0pen');
  })

  // mobile sub menu 
  mobSubtn.on('click', mobSubList);

  function mobSubList(){
    let crt = $(this);
  
    if(crt.parent('li').hasClass('active')){
      crt.parent('li').removeClass('active');
      crt.siblings('ul.depth2').slideUp();
    } else {
      crt.parent('li')
      .addClass('active')
      .siblings('li').removeClass('active')
      .children('ul.depth2').slideUp();
      crt.siblings('ul.depth2').slideDown(); 
    }
  }
  
  function mobSubReset(){
    BODY.removeClass('m0pen');
    mobSubtn.sibling('ul.depth2').removeAttr('style')
    mobSubtn.parent('li').removeClass('active')
  }

  $(window).on('load resize', function(){
    if(window.innerWidth<1111){
      hNav_reset()
      sch_reset()
      subNav.removeAttr('style')
    }
    if(window.innerWidth>999){
      mobSubReset();
    }
  })
}) 

// gsap 함수 모음
let funcObj = {
  f_0:function(){
    const tl = gsap.timeline()
    tl.to('#section0 .tit_wrap > * ', {
      opacity: 1,
      stagger: .3,
      y: -30
    });
    tl.to('#section0 .scroll', {
      opacity: 1,
    })
  },
  f_1:function(){
    const tl = gsap.timeline()
    tl.to('#section1 .tit', {
      opacity: 1,
      y: -30,
    });
    tl.to('.s1_list li', {
      opacity: 1,
      stagger: .3,
      y: -30
    });
    tl.to('.sub_txt_wrap', {
      opacity: 1,
      y: -30
    });
    // count 함수
    $(function(){
      $('.count').each(function(){
        let crt = $(this)
        let countTo = crt.attr('data-count')

        $({
          countNum:crt.text()
        }).animate({
          countNum:countTo
        },
        {
          duration: 3000,
          easing: 'linear',
          step: function(){
            crt.text(Math.floor(this.countNum))
          },
          complete: function(){
            crt.text(this.countNum)
          }
        })
      })
    })
  },
  f_2:function(){
    const tl = gsap.timeline()
    tl.to('#section2 .tit_wrap > *', {
      opacity: 1,
      stagger: .3,
      y: -30,
    });
    tl.to('#section2 .s2_card', {
      opacity: 1,
      stagger: .3,
      y: -30,
    });
  },
  f_3:function(){
    const tl = gsap.timeline()
    tl.to('#section3 .rel > *', {
      opacity: 1,
      stagger: .3,
      y: -30,
    });
  },
  f_4:function(){
    const tl = gsap.timeline()
    tl.to('#section4 .tit_wrap > *', {
      opacity: 1,
      stagger: .3,
      y: -30,
    });
    tl.to('#section4 .img_wrap .deco', {
      opacity: 1,
      stagger: .3,
      y: -30,
    });
  },
  f_5:function(){
    const tl = gsap.timeline()
    tl.to('#section5 .tit_wrap > *', {
      opacity: 1,
      stagger: .3,
      y: -30,
    });
    tl.to('#section5 .img_wrap .deco', {
      opacity: 1,
      stagger: .3,
      y: -30,
    });
  },
  f_6:function(){
    const tl = gsap.timeline()
    tl.to('#section6 .tit_wrap > *', {
      opacity: 1,
      stagger: .3,
      y: -30,
    });
    tl.to('#section6 .img_wrap .deco', {
      opacity: 1,
      stagger: .3,
      y: -30,
    });
  },
  f_7:function(){
    const tl = gsap.timeline()
    tl.to('#section7 .tit_wrap > *', {
      opacity: 1,
      y: -30,
    });
    tl.to('#section7 .s7_list li', {
      opacity: 1,
      stagger: .3,
      y: -30,
    });
  }
}

// gsap 함수 각 섹션 접근시 실행
let section = document.querySelectorAll('section');

// 0번째 섹션 실행
funcObj['f_0']()

window.addEventListener('scroll', function(){
  let scroll = this.document.scrollingElement.scrollTop
  let outHeight = window.outerHeight

  for(let i = 0; i<section.length; i++){
    if(scroll > section[i].offsetTop - outHeight && 
      scroll < section[i].offsetTop - outHeight + section[i].offsetHeight){
        funcObj['f_' + i]()
      }
  }
})