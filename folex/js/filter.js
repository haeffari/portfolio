$(function(){
  var gallery = $('.port_list'), 
      loadMore = $('#loadMore'),
      addItemCount = 3, // 표시할 항목 갯수 
      added = 0,
      allData = []; // port.json 목록 모두 저장할 그릇

  // $.getJSON('파일경로',function(data){....}); // data 은 JSON 파일의 최상위를 지정.
  $.getJSON('./data/port.json', initGallery);

  // initGallery 함수 (갤러리 셋팅)
  function initGallery(data){
    allData = data; // json 파일의 목록을 배열$allData에 저장
    // 10개출력
    addItems();
  }
  function addItems(){
    /* 
    1) 전체배열에서 0~10값을 추출해서 임시로 잘라진 데이터에 담기.
    2) 잘라진데이터에서 제목을 리스트 형식 html tag 로 가져와서 , ul 의 뒤에 추가 append()
    3) $added 의 값을 추가한 갯수로 업데이트.
    */
    
    // 데이터들의 그릇 빈 배열
    var elements = [];

    // allData 에서 0~10 잘라서 가져와! added 가 0 이고 added + addItemCount 계속해서 더하면서!
        slicedData = allData.slice(added, added + addItemCount);

        // added 데이터 업데이트 해주기
        added += addItemCount;

    // slicedData 마다 할일 반복적으로 
    $.each(slicedData, function(i, item){
      var itemHTML = 
      '<li style="background-image: url(' + item.imgUrl + ');" class="item ' + item.type + '">' +
        '<h2 class="title_bar center">' + item.title + '</h2>' +
        '<p>' +
          item.desc +
        '</p>' +
        '<a href="' + item.projectLink + '" class="big btn orange">view more</a>' +
      '</li>';

      // itemHTML 객체를 하나하나 순차적으로 가져와서 elements 그릇에 넣기
      elements.push($(itemHTML).get(0));

      // 갤러리 뒤에 그릇 데이터 넣기
      gallery.append(elements);
    });

    // 리스트 종결나면 loadMore 사라짐
    if(allData.length > added){
      loadMore.show();
    } else {
      loadMore.hide();
    }

    let portContainer = $('.port_list');

    var mixer = mixitup(portContainer, {
      selectors: {
          target: '.item'
      },
      animation: {
          duration: 300
      }
    });
    mixer.forceRefresh();
  }

  // loadMore 클릭하면 addItems 실행
  loadMore.click(addItems);
});