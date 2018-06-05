function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(-7.7603,110.4089);
  var mapOptions = {center: myCenter, zoom: 17};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.marker({
    position: myCenter, animation: google.maps.Animtion.BOUNCE
  });
  marker.setMap(map);
 }