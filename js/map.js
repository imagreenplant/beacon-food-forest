function initialize() {
  var myLatLng = new google.maps.LatLng(47.56845610052802, -122.31254031038299);
    var mapOptions = {
        zoom: 18,
        // heading: 90,
        center: myLatLng,
        // mapTypeId: google.maps.MapTypeId.HYBRID // Should also try SATELLITE
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        tilt: 0,
    };


  var plant_map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // var ctaLayer = new google.maps.KmlLayer({
  //   url: 'http://lapora.org/tree_list.kml'
  // });
  // ctaLayer.setMap(map);

  var myParser = new geoXML3.parser({map: plant_map});
  myParser.parse('maps/tree_list.kml');
}

google.maps.event.addDomListener(window, 'load', initialize);