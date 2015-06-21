var gml, plant_map;
var beacon_food_forest_location = new google.maps.LatLng(47.56845610052802, -122.31254031038299);

// In order to get an animated SVG, you'll need to construct a polyline out of multple paths like:
// https://developers.google.com/maps/documentation/javascript/examples/overlay-symbol-custom
// Then to animate, refer to this:
// https://developers.google.com/maps/documentation/javascript/examples/overlay-symbol-animate

// USing a GIF, unable to get animation to run
// var gps_marker_image = {
//   url:'/img/gps.gif',
//   size: new google.maps.Size(120,120),
//   origin: new google.maps.Point(0, 0),
//   anchor: new google.maps.Point(13, 13),
//   scaledSize: new google.maps.Size(26, 26)
// };

var gpsIcon = {
    path: "M90,45h-1.3C86.4,27.5,72.5,13.6,55,11.3V10c0-2.8-2.2-5-5-5s-5,2.2-5,5v1.3C27.5,13.6,13.6,27.5,11.3,45H10,c-2.8,0-5,2.2-5,5s2.2,5,5,5h1.3C13.6,72.5,27.5,86.4,45,88.7V90c0,2.8,2.2,5,5,5s5-2.2,5-5v-1.3C72.5,86.4,86.4,72.5,88.7,55H90 c2.8,0,5-2.2,5-5S92.8,45,90,45z M55,80.6V80c0-2.8-2.2-5-5-5s-5,2.2-5,5v0.6C31.9,78.5,21.5,68.1,19.4,55H20c2.8,0,5-2.2,5-5 s-2.2-5-5-5h-0.6C21.5,31.9,31.9,21.5,45,19.4V20c0,2.8,2.2,5,5,5s5-2.2,5-5v-0.6C68.1,21.5,78.5,31.9,80.6,45H80c-2.8,0-5,2.2-5,5 s2.2,5,5,5h0.6C78.5,68.1,68.1,78.5,55,80.6z",
    fillColor: '#05c400',
    fillOpacity: 0.8,
    scale: 0.2,
    strokeColor: 'green',
    strokeWeight: 1,
    // Not sure if these work like they do with the gif.  With the gif, these helped keep the center of the image
    // on center with the coordinate
    // origin: new google.maps.Point(0, 0),
    // anchor: new google.maps.Point(6, 6),
  };

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

function initialize() {
    var mapOptions = {
        zoom: 10,
        //Heading can't be used here, appears to conflict with GeoXML lib.  Stuck with North/South orientation.
        center: beacon_food_forest_location,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        tilt: 0,
    };


    plant_map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    // gml = new GeoXml("gml", plant_map, "maps/features.kml", {
    gml = new GeoXml("gml", plant_map, "maps/all_markers.kml", {
        sidebarid: "the_side_bar",
        quiet: true, //Removes on-screen dialogs, puts in console.log
        // pointlabelclass: "point-label",  In documentation, but not functioning
        // polylabelclass: "poly-label",
    });
    gml.parse();

    var myloc = new google.maps.Marker({
        clickable: true,
        icon: gpsIcon,
        shadow: null,
        zIndex: 999,
        map: plant_map,
    });

    // Set initial GPS location
    gpsMarker(myloc);
}


google.maps.event.addDomListener(window, 'load', initialize);
