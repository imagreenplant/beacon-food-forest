// Nice library for Google maps info overlays
// http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobubble/examples/example.html?
// and for on-map labels
// http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/infobox-label.html

log.setLevel("info");
var gml, plant_map;
var beacon_food_forest_location = new google.maps.LatLng(47.56845610052802, -122.31254031038299);
var myloc;

var isMobile = {
    Android: function() {
        return (/Android/i).test(navigator.userAgent);
    },
    BlackBerry: function() {
        return (/BlackBerry/i).test(navigator.userAgent);
    },
    iOS: function() {
        return (/iPhone|iPad|iPod/i).test(navigator.userAgent);
    },
    Windows: function() {
        return (/IEMobile/i).test(navigator.userAgent);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};

function toggleSideBar() {
    $("#the_side_bar").toggle();
    $("button.close_button").toggle();
    $("button.open_button").toggle();

    log.info("Sidebar button clicked.");
}

function hideSideBarButton() {
    $("#the_side_bar").hide();
    $(".sidebar_button").hide();
    log.info("Sidebar button hidden.");
}

var $sidebutton = $('button');
$sidebutton.click(toggleSideBar);

if (screen.width < 601) {
    log.info("Event delegation added for clicking links in menu.");
    $('#the_side_bar').on('click', 'a', toggleSideBar);
}

// ------------------- GPS Watcher Start ----------------------------------
function GPSwatcher() {
    this.options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    this.updated_location = 0;
}

GPSwatcher.prototype.updateGPSMarker = function(position) {
    if (position) {
        var updated_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        myloc.setPosition(updated_location);
        log.info("New navigator location set: ", position.coords.latitude, ",", position.coords.longitude);
    } else {
        this.GPSerror();
    }
};

GPSwatcher.prototype.GPSerror = function(err) {
    log.error("Unable to find GPS location.");
};

if (isMobile.any()) {
    log.info("Mobile device detected, turning on GPS indicator.");
    var gpsWatch = new GPSwatcher();
    var watcher = navigator.geolocation.watchPosition(gpsWatch.updateGPSMarker, gpsWatch.GPSerror, gpsWatch.options);
} else {
    log.info("Not a mobile device, turning off GPS indicator.");
}
// -------------------- GPS Watcher End ------------------------------------


function initialize() {
    var mapOptions = {
        zoom: 10,
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


    plant_map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    // Note that the KML_FILE comes from the map page template, and is inserted as a global variable
    gml = new GeoXml("gml", plant_map, KML_FILE, {
        sidebarid: "the_side_bar",
        quiet: true, //Removes on-screen dialogs, puts in console.log
        // pointlabelclass: "point-label",  In documentation, but not functioning
        // polylabelclass: "poly-label",
        allfoldersopen: true, //Automatically open all folders
        iwheight: 250, //Max height for info window popup
    });
    gml.parse();

    var gpsIcon = {
        url: "static/maps/img/gps.svg",
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
        shadow: null,
        icon: gpsIcon2,
        zIndex: 999,
        map: plant_map,
    });

    // Set initial GPS location -- I don't think this is needed.
    gpsMarker(myloc);
}


google.maps.event.addDomListener(window, 'load', initialize);