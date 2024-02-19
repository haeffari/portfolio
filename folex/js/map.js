window.initMap = function(){
  new google.maps.Map(document.getElementById('map'), {
    // 위도 경도 설정
    center: { lat: 37.5042687 ,lng: 126.7886531 },
    // 줌 
    zoom: 10,
    
  })
}