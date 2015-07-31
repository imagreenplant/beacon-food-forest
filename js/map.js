log.setLevel("info");

var gml, plant_map;
var beacon_food_forest_location = new google.maps.LatLng(47.56845610052802, -122.31254031038299);
var myloc;

function gpsMarker(myloc) {
  if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function(pos) {
    var me = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    myloc.setPosition(me);
  }, function(error) {
    // ...
  });
}

function gpsMarkerToBeaconFoodForest(myloc) {
  if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function(pos) {
    var me = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    myloc.setPosition(me);
  }, function(error) {
    // ...
  });
}


// ------------------- GPS Watcher Start ----------------------------------
function updateGPSMarker(position) {
  if (position) {
    var updated_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    myloc.setPosition(updated_location);
    log.info("New navigator location set: ", position.coords.latitude, ",", position.coords.longitude);
  }
}

function GPSerror(err) {
  log.error("Unable to find GPS location.");
}

var watcherOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
var watcher = navigator.geolocation.watchPosition(updateGPSMarker, GPSerror, watcherOptions);
// -------------------- GPS Watcher End ------------------------------------


function initialize() {
  var mapOptions = {
    zoom: 10,
    //Heading can't be used here, appears to conflict with GeoXML lib.  Stuck with North/South orientation.
    center: beacon_food_forest_location,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    tilt: 0,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
  };


  plant_map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  // gml = new GeoXml("gml", plant_map, "maps/features.kml", {
  gml = new GeoXml("gml", plant_map, "maps/new_tree_icons.kml", {
    sidebarid: "the_side_bar",
    quiet: true, //Removes on-screen dialogs, puts in console.log
    // pointlabelclass: "point-label",  In documentation, but not functioning
    // polylabelclass: "poly-label",
  });
  gml.parse();

  var gpsIcon = {
    url: "img/gps.svg",
    scale: 0.2,
  };


  //Scaling properly and dynamic SVG
  // See: http://stackoverflow.com/questions/24413766/how-to-use-svg-markers-in-google-maps-api-v3
  var template = [
    '<?xml version="1.0"?>',
    '<svg width="26px" height="26px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">',
    '<path d="M90,45h-1.3C86.4,27.5,72.5,13.6,55,11.3V10c0-2.8-2.2-5-5-5s-5,2.2-5,5v1.3C27.5,13.6,13.6,27.5,11.3,45H10 c-2.8,0-5,2.2-5,5s2.2,5,5,5h1.3C13.6,72.5,27.5,86.4,45,88.7V90c0,2.8,2.2,5,5,5s5-2.2,5-5v-1.3C72.5,86.4,86.4,72.5,88.7,55H90 c2.8,0,5-2.2,5-5S92.8,45,90,45z M55,80.6V80c0-2.8-2.2-5-5-5s-5,2.2-5,5v0.6C31.9,78.5,21.5,68.1,19.4,55H20c2.8,0,5-2.2,5-5 s-2.2-5-5-5h-0.6C21.5,31.9,31.9,21.5,45,19.4V20c0,2.8,2.2,5,5,5s5-2.2,5-5v-0.6C68.1,21.5,78.5,31.9,80.6,45H80c-2.8,0-5,2.2-5,5 s2.2,5,5,5h0.6C78.5,68.1,68.1,78.5,55,80.6z" fill="{{ color }}">',
    '<animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite" values="0 50 50;90 50 50;90 50 50" keyTimes="0;0.5;1"></animateTransform>',
    '</path>',
    '</svg>'
  ].join('\n');
  var svg = template.replace('{{ color }}', '#05c400');
  var gpsIcon2 = {
    url: 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(svg)
  };

  myloc = new google.maps.Marker({
    clickable: false,
    // icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
    //     new google.maps.Size(22, 22),
    //     new google.maps.Point(0, 18),
    //     new google.maps.Point(11, 11)),
    shadow: null,
    icon: gpsIcon2,
    zIndex: 999,
    map: plant_map,
  });

  // Set initial GPS location
  gpsMarker(myloc);
}


google.maps.event.addDomListener(window, 'load', initialize);
