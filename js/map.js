var gml, plant_map;
var beacon_food_forest_location = new google.maps.LatLng(47.56845610052802, -122.31254031038299);
var gps_marker_image = {
  url:'/img/gps.gif',
  size: new google.maps.Size(120,120),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(12, 12),
  scaledSize: new google.maps.Size(25, 25)
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
        icon: gps_marker_image,
        shadow: null,
        zIndex: 999,
        map: plant_map,
    });

    // Set initial GPS location
    gpsMarker(myloc);
}


google.maps.event.addDomListener(window, 'load', initialize);
