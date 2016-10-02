var all_markers = [];

var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

var infowindow = new google.maps.InfoWindow({
	content: contentString
});

function addMarker(location, data) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: data.name,
        infowindow: data.content,
    });
    all_markers.push(marker);
}

function addAllMarkers(markers) {
    for (var marker in markers) {
        addMarker(markers[marker].coordinates, marker)
    }
}

function clickMarker(argument) {
	// body...
}





function initMap() {
    var beacon_food_forest_location = new google.maps.LatLng(47.56845610052802, -122.31254031038299);
    var mapOptions = {
        zoom: 18,

        //Heading can't be used here, appears to conflict with GeoXML lib.  Stuck with North/South orientation.
        center: beacon_food_forest_location,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        tilt: 0,
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_BOTTOM,
        },

        // May be useful someday if we use an overlay as a map, instead of the satellite
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    addAllMarkers(plants)

}
