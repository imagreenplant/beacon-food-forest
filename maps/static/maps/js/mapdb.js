var markers = [];

function addMarker(location, code) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markers.push(marker);
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

    for (var plant in plants) {
        addMarker(plants[plant]['coordinates'], plant)
    }
}
