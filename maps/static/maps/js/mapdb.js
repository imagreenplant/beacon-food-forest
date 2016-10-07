"use strict";
var entityMap = entityMap || {};
var google = this.google;
var plants = this.plants;

var beacon_food_forest_location = new google.maps.LatLng(47.56845610052802, -122.31254031038299);

var entityMap = {
    getInfo: function() { /**/ },

    entities: [],
    map: {},


    mapOptions: {
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
    },

    addAllMarkers: function(markers) {
        for (var marker in markers) {
            this.addMarker(markers[marker].coordinates, marker);
        }
    },

    addMarker: function(location, data) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            title: data.name,
            // infowindow: data.content,
        });
        this.entities.push(marker);
    },

    initMap: function() {
        this.map = new google.maps.Map(document.getElementById('map-canvas'), this.mapOptions);
        this.addAllMarkers(plants);
    },

};

// var all_markers = [];

var contentString = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the ' +
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
    'south west of the nearest large town, Alice Springs; 450&#160;km ' +
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
    'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
    'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
    'Aboriginal people of the area. It has many springs, waterholes, ' +
    'rock caves and ancient paintings. Uluru is listed as a World ' +
    'Heritage Site.</p>' +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
    '(last visited June 22, 2009).</p>' +
    '</div>' +
    '</div>';

var infowindow = google.maps.InfoWindow({
    content: contentString
});

var plantMap = new entityMap();

// function addMarker(location, data, map) {
//     var marker = new google.maps.Marker({
//         position: location,
//         map: map,
//         title: data.name,
//         infowindow: data.content,
//     });
//     all_markers.push(marker);
// }

// function addAllMarkers(markers,map) {
//     for (var marker in markers) {
//         addMarker(markers[marker].coordinates, marker,map)
//     }
// }

// function clickMarker(argument) {
//     // body...
// }

// function initMap() {
//     var beacon_food_forest_location = new google.maps.LatLng(47.56845610052802, -122.31254031038299);
//     var mapOptions = {
//         zoom: 18,

//         //Heading can't be used here, appears to conflict with GeoXML lib.  Stuck with North/South orientation.
//         center: beacon_food_forest_location,
//         mapTypeId: google.maps.MapTypeId.SATELLITE,
//         tilt: 0,
//         panControl: false,
//         zoomControl: true,
//         zoomControlOptions: {
//             style: google.maps.ZoomControlStyle.SMALL,
//             position: google.maps.ControlPosition.LEFT_BOTTOM,
//         },

//         // May be useful someday if we use an overlay as a map, instead of the satellite
//         mapTypeControl: false,
//         scaleControl: false,
//         streetViewControl: false,
//         overviewMapControl: false,
//     };

//     var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

//     addAllMarkers(plants,map);

// }



// var myApplication = {
//     getInfo:function(){ /**/ },

//     // we can also populate our object literal to support
//     // further object literal namespaces containing anything
//     // really:
//     models : {},
//     views : {
//         pages : {}
//     },
//     collections : {}
// };
// myApplication.foo = function(){
//     return "bar";
// }
// myApplication.utils = {
//     toString:function(){
//         /*..*/
//     },
//     export: function(){
//         /*..*/
//     }
// }
