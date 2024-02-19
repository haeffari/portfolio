// 01 메인 slide  
const slideWrapper = document.querySelector('.slide_wrapper'),
      slideContainer = slideWrapper.querySelector('.slide_container'),
      slides = slideContainer.querySelectorAll('.slide'),
      slideCount = slides.length,
      slideBtns = slideWrapper.querySelectorAll('.controls a');

// 현재 순서 첫번째 초기 설정 (인덱스)
let currentIdx = 0;

// 슬라이드 배치
let resizeEvt = new Event('resize');

// 윈도우에 resize 이벤트 실행시, slideContainer 가 윈도우 너비와 슬라이드 양만큼 px 로 이동하며 슬라이드 실행
window.addEventListener('resize', function(){
  slideContainer.style.width = `${window.innerWidth*slideCount}px`;
})

// 이동한 값을 윈도우에 반영 업데이트
window.dispatchEvent(resizeEvt);

// 슬라이드 이동 함수
function moveSlide(num){
  slideContainer.style.transform = `translateX(${-num*window.innerWidth}px)`;
  currentIdx = num;
}

// 이전, 다음 버튼 기능
for(btn of slideBtns){
  btn.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('prev')){
      moveSlide((slideCount+currentIdx-1)%slideCount);
    } else {
        moveSlide((currentIdx+1)%slideCount);
    }
  })
}

// 본문 바로가기
const skipToContent = document.querySelector('.quick_link');
const mainContent = document.querySelector('#main_content');

/* skipToContent 클릭시 , 링크 기본 속성 막고/ 윈도우에 스크롤 생성!
스크롤의 양은  mainContent 가 화면 꼭대기에서 떨어진 거리를 변수에 mainContentTop 에 넣어서 활용
*/

skipToContent.addEventListener('click', (e)=>{
  e.preventDefault();

  let mainContentTop = mainContent.offsetTop;

  // 윈도우 스크롤 이동
  window.scrollTo({left:0, top:mainContentTop, behavior:"smooth"});
});

// 필터 효과 시작
let fillterBtns = document.querySelectorAll('.section_works .btns button'),
    recentList = document.querySelectorAll('.section_works ul li');
    
// 초기 all 리스트 보이기
for(rl of recentList){
  rl.classList.add('active');
}

// fillterBtns 클릭 이벤트
for(let fb of fillterBtns){
  fb.addEventListener('click', (e)=>{
    for(let btn of fillterBtns){
      btn.classList.remove('active');
    }
    e.target.classList.add('active');

    let targetClass = e.target.getAttribute('data-filter');
    let filterdList = document.querySelectorAll(`.section_works ul .${targetClass}`);

    if(targetClass === 'all'){
      for(rl of recentList){
        rl.classList.add('active');
      }
    } else {
      for(rl of recentList){
        rl.classList.remove('active');
      }
      setTimeout(()=> {
        for(fl of filterdList){
          fl.classList.add('active');
        }
      }, 100);
    }
  });
}

// case slides 
let casePager = document.querySelectorAll('.section_case .pager a');
let caesArticle = document.querySelectorAll('.section_case article');
let caseImg = document.querySelectorAll('.section_case figure img');

casePager.forEach((item, idx)=>{
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    // pager 업데이트
    for(pager of casePager){
      pager.classList.remove('active');
    }
    item.classList.add('active');

    // article 업데이트
    for(article of caesArticle){
      article.classList.remove('active');
    }
    caesArticle[idx].classList.add('active');

    // figure img 업데이트 
    for(img of caseImg){
      img.classList.remove('active');
    }
    caseImg[idx].classList.add('active');
  })
});

// btt top 이동 
let btt = document.querySelector('.btt');
let nav = document.querySelector('nav');

window.addEventListener('scroll',()=>{
  if(window.scrollY > 0){
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
  
  if(window.scrollY > 500){
    btt.classList.add('active');
  } else {
    btt.classList.remove('active');
  }
});

btt.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({left:0, top: 0, behavior: 'smooth'});
});

// header nav a 부드럽게 이동
let scollMenu = nav.querySelectorAll('ul li a');

for(let sm of scollMenu){
  sm.addEventListener('click',(e)=>{
    e.preventDefault();

    let targetContent = e.target.getAttribute('href');
    let targetNum = document.querySelector(targetContent).offsetTop;

    window.scrollTo({top:targetNum, behavior:'smooth'});
  })
}

// 해상도 안내 modal 제어
let modal = document.querySelector('.modal');
let mClose = document.querySelector('.modal_close');

modal.addEventListener('click', function(){
  this.classList.add('off');

  // body 스크롤 복구
  document.body.style.overflowY = "auto";
})

mClose.addEventListener('click', function(){
  this.classList.add('off');

  // body 스크롤 복구
  document.body.style.overflowY = "auto";
})