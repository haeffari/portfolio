$(function(){
  // 공통 슬라이드 
  const slideItem = $('.s3_slide .row');

  // 공통 이전 다음 버튼
  const prevBtn = $('.arrow.left');
  const nextBtn = $('.arrow.right');

  // 이전 버튼을 클릭시 이벤트
  prevBtn.on('click', function(e){
    e.preventDefault();

    const slider = $(this).parent('.row');

    // 이전 버튼을 어디서 클릭하고 있는지
    if(slider.hasClass('row1')){
      // 0번째 자식 prev 함수 실행
      prev(0);
    } else if(slider.hasClass('row2')){
      // 1번째 자식 prev 함수 실행
      prev(1);
    }
    
  })

  // 다음 버튼을 클릭시 이벤트
  nextBtn.on('click', function(e){
    e.preventDefault();

    const slider = $(this).parent('.row');

    // 다음 버튼을 어디서 클릭하고 있는지
    if(slider.hasClass('row1')){
      // 0번째 자식 next 함수 실행
      next(0);
    } else if(slider.hasClass('row2')){
      // 1번째 자식 next 함수 실행
      next(1);
    }
    
  })

  // 이전 버튼 클릭시 일어날 함수 설정
  function prev(i){
    // 이미지를 담고 있는 요소 찾기 
    const imgBox = slideItem.eq(i).children('.row_inner');

    // 현재 보여지고 있는 이미지 순서
    let imgIndex = imgBox.children('img.active').index();

    // 이미지 슬라이드 갯수
    let imgLength = imgBox.children('img').length;

    console.log(imgIndex, imgLength);

    // 이미지 이전으로 -- 
    imgIndex--

    // 조건) imgIndex 가 0보다 작으면, imgIndex 는 imgLength -1 로 이전 이미지 보여주기
    if(imgIndex<0){
      imgIndex = imgLength - 1;
    }

    // 이미지 클래스 초기화 하고 다시 클래스 반복추가되게
    imgBox.children('img').removeClass('active');
    imgBox.children('img').eq(imgIndex).addClass('active');
  }

    // 다음 버튼 클릭시 일어날 함수 설정
    function next(i){
      // 이미지를 담고 있는 요소 찾기 
      const imgBox = slideItem.eq(i).children('.row_inner');
  
      // 현재 보여지고 있는 이미지 순서
      let imgIndex = imgBox.children('img.active').index();
  
      // 이미지 슬라이드 갯수
      let imgLength = imgBox.children('img').length;
  
      console.log(imgIndex, imgLength);
  
      // 이미지 다음로 ++ 
      imgIndex++
  
      // 조건) imgIndex 가 imgLength 와 같다면, imgIndex 0 순서로 (슬라이드 끝나면 처음 순서로)
      if(imgIndex==imgLength){
        imgIndex = 0;
      }
  
      // 이미지 클래스 초기화 하고 다시 클래스 반복추가되게
      imgBox.children('img').removeClass('active');
      imgBox.children('img').eq(imgIndex).addClass('active');
    }
})