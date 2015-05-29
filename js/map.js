var gml, plant_map;

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


    plant_map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //   // var ctaLayer = new google.maps.KmlLayer({
    //   //   url: 'http://lapora.org/tree_list.kml'
    //   // });
    //   // ctaLayer.setMap(map);

    //   var myParser = new geoXML3.parser({map: plant_map});
    //   myParser.parse('maps/tree_list.kml');
    // mmap=new GMap2(document.getElementById("map"),{draggableCursor: 'crosshair', draggingCursor: 'move'});
    // mmap.setCenter(new GLatLng(0,0),2);
    // mmap.addControl(new GLargeMapControl());
    // mmap.addControl(new GMapTypeControl());
    // mmap.enableScrollWheelZoom();
    // mmap.enableDoubleClickZoom();
    // mmap.enableContinuousZoom();
    // var exml = new GeoXml("exml", plant_map,"maps/tree_list.kml",{sidebarid:"the_side_bar",  iwwidth:520, 
    // iconFromDescription:false, domouseover:false});

    // exml.parse("NPL");
    gml = new GeoXml("gml", plant_map, "maps/features.kml", {
        sidebarid: "the_side_bar",
        // iwwidth: 250,
        quiet: true,
        // pointlabelclass: "point-label",
        // polylabelclass: "poly-label",
    });
    gml.parse();
}


google.maps.event.addDomListener(window, 'load', initialize);


// function initMap() {

//     mmap = new GMap2(document.getElementById("map"), {
//         draggableCursor: 'crosshair',
//         draggingCursor: 'move'
//     });
//     mmap.setCenter(new GLatLng(0, 0), 2);
//     mmap.addControl(new GLargeMapControl());
//     mmap.addControl(new GMapTypeControl());
//     mmap.enableScrollWheelZoom();
//     mmap.enableDoubleClickZoom();
//     mmap.enableContinuousZoom();
//     gml = new GeoXml("gml", mmap, "maps/tree_list.kml", {
//         sidebarid: "the_side_bar",
//         iwwidth: 250
//     });
//     gml.parse();
// }