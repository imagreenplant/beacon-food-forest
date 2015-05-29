var gml, plant_map;

function initialize() {
    var myLatLng = new google.maps.LatLng(47.56845610052802, -122.31254031038299);
    var mapOptions = {
        zoom: 10,
        //Heading can't be used here, appears to conflict with GeoXML lib.  Stuck with North/South orientation.
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        tilt: 0,
    };


    plant_map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    gml = new GeoXml("gml", plant_map, "maps/features.kml", {
        sidebarid: "the_side_bar",
        quiet: true,  //Removes on-screen dialogs, puts in console.log
        // pointlabelclass: "point-label",  In documentation, but not functioning
        // polylabelclass: "poly-label",
    });
    gml.parse();
}


google.maps.event.addDomListener(window, 'load', initialize);