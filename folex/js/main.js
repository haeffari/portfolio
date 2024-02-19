$(document).ready(function() {
  // main page fullpage only
  if($('#fullpage').length > 0){
    // main page fullpage
    $('#fullpage').fullpage({
      afterLoad: function(origin, destination, direction){
        
        // fixed nav 효과
        if(destination.index > 0){
          $('.fixed-nav').fadeIn();
          $('.header nav').addClass('fixed');
        } else {
          $('.fixed-nav').fadeOut();
          $('.header nav').removeClass('fixed');
        }

        // fixed nav 1, 3 색상 변경 
        if(destination.index == 1 || destination.index == 3){
          $('.fixed-nav').find('a').removeClass('active');
          $('.fixed-nav').find('a').removeClass('active-black');
          $('.fixed-nav').find('a').eq(destination.index).addClass('active-black');
        } else {
          $('.fixed-nav').find('a').removeClass('active');
          $('.fixed-nav').find('a').removeClass('active-black');
          $('.fixed-nav').find('a').eq(destination.index).addClass('active');
        }

        // back_to_top 제어
        if(destination.index == 5){
          $('.back_to_top').addClass('active');
        } else {
          $('.back_to_top').removeClass('active');
        }
      }
    });
  }

  // main page swiper slide 
  if($('.main-slides').length > 0){
    // main page swiper slide
    const swiper = new Swiper('.main-slides', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }
  
  // subpage testmonial swiper slide 
  if($('.testmonial-slides').length > 0){
    // main page swiper slide
    const testmonialSwiper = new Swiper('.testmonial-slides', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

  // toggle_menu 제어
  $('.toggle-btn').click(function(){
    $('.toggle_menu').addClass('active');
  })

  $('.toggle_menu .close').click(function(){
    $('.toggle_menu').removeClass('active');
  })

  // subpage header fixed 
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){
      $('.subpage nav').addClass('fixed');
    } else {
      $('.subpage nav').removeClass('fixed');
    }

    // back to top 제어
    let footerOft = $('.footer').offset().top - 800;
    console.log(footerOft);

    if($(this).scrollTop() > footerOft){
      $('.back_to_top').addClass('active');
    } else {
      $('.back_to_top').removeClass('active');
    }
  });

  // about_btt 클릭 이벤트
  $('.about_btt').click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 700, 'easeOutQuint');
  });

  // contact form input effect 
  if(('.contact-contents').length > 0){
    var formInput = $('.contact-contents form input');
    formInput.click(function(){
      $(this).prev().addClass('active');
      $(this).attr('placeholder', '');
    })
  }

  // 해상도 안내 modal 제어
  var modal = $('.modal');
  var mClose = $('.modal_close');

  modal.click(function(){
    $(this).addClass('off');
  });
  mClose.click(function(){
    modal.addClass('off');
  });
});
