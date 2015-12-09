// This example adds hide() and show() methods to a custom overlay's prototype.
// These methods toggle the visibility of the container <div>.
// Additionally, we add a toggleDOM() method, which attaches or detaches the
// overlay to or from the map.

// Further notes --mlapora:
// This example uses Google's direct javascript API, but the KML overlay seems limited and buggy.
// The overlay keeps appearing with a poor tilt, causing display errors when rotating the screen.

var overlay;

BFFOverlay.prototype = new google.maps.OverlayView();
BFFKml.prototype = new google.maps.KmlLayer();

function initialize() {
    var myLatLng = new google.maps.LatLng(47.56845610052802, -122.31254031038299);
    var mapOptions = {
        zoom: 18,
        heading: 90,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.HYBRID // Should also try SATELLITE
            // mapTypeId: google.maps.MapTypeId.ROADMAP  // Should also try SATELLITE
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    // map.setTilt(0);
    // map.setHeading(90);


    //  
    var swBound = new google.maps.LatLng(47.567278, -122.311531);
    var neBound = new google.maps.LatLng(47.569892, -122.313358);

    // SW becomes SE, NE becomes NW
    // var swBound = new google.maps.LatLng(47.567278, -122.313358);
    // var neBound = new google.maps.LatLng(47.569892, -122.311531);
    var bounds = new google.maps.LatLngBounds(swBound, neBound);

    var srcImage = 'http://lapora.org/plan.jpg';
    var overlayOpts = {
        opacity: 0.3
    }
    overlay = new BFFOverlay(bounds, srcImage, map, overlayOpts);

    var kml_url = "http://lapora.org/tree_list.kml";
    trees = new BFFKml(kml_url, map);
}

/** @constructor */
function BFFOverlay(bounds, image, map, options) {

    // Now initialize all properties.
    this.bounds_ = bounds;
    this.image_ = image;
    this.map_ = map;
    this.options_ = options;

    // Define a property to hold the image's div. We'll
    // actually create this div upon receipt of the onAdd()
    // method so we'll leave it null for now.
    this.div_ = null;

    // Explicitly call setMap on this overlay
    this.setMap(map);
}

/**
 * onAdd is called when the map's panes are ready and the overlay has been
 * added to the map.
 */
BFFOverlay.prototype.onAdd = function() {

    var div = document.createElement('div');
    div.style.border = 'none';
    div.style.borderWidth = '0px';
    div.style.position = 'absolute';

    // Create the img element and attach it to the div.
    var img = document.createElement('img');
    img.src = this.image_;
    img.style.width = '100%';
    img.style.height = '100%';
    div.appendChild(img);

    this.div_ = div;

    // Add the element to the "overlayImage" pane.
    var panes = this.getPanes();
    panes.overlayImage.appendChild(this.div_);
};

BFFOverlay.prototype.opacityChange = function() {
    this.setOpacity(0.3);
}

BFFOverlay.prototype.draw = function() {

    // We use the south-west and north-east
    // coordinates of the overlay to peg it to the correct position and size.
    // To do this, we need to retrieve the projection from the overlay.
    var overlayProjection = this.getProjection();

    // Retrieve the south-west and north-east coordinates of this overlay
    // in LatLngs and convert them to pixel coordinates.
    // We'll use these coordinates to resize the div.
    var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
    var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

    // Resize the image's div to fit the indicated dimensions.
    var div = this.div_;
    div.style.left = sw.x + 'px';
    div.style.top = ne.y + 'px';
    div.style.width = (ne.x - sw.x) + 'px';
    div.style.height = (sw.y - ne.y) + 'px';

    // this.opacityChange();
};

BFFOverlay.prototype.onRemove = function() {
    this.div_.parentNode.removeChild(this.div_);
};

// Set the visibility to 'hidden' or 'visible'.
BFFOverlay.prototype.hide = function() {
    if (this.div_) {
        // The visibility property must be a string enclosed in quotes.
        this.div_.style.visibility = 'hidden';
    }
};

BFFOverlay.prototype.show = function() {
    if (this.div_) {
        this.div_.style.visibility = 'visible';
    }
};

BFFOverlay.prototype.toggle = function() {
    if (this.div_) {
        if (this.div_.style.visibility == 'hidden') {
            this.show();
        } else {
            this.hide();
        }
    }
};

// Detach the map from the DOM via toggleDOM().
// Note that if we later reattach the map, it will be visible again,
// because the containing <div> is recreated in the overlay's onAdd() method.
BFFOverlay.prototype.toggleDOM = function() {
    if (this.getMap()) {
        // Note: setMap(null) calls OverlayView.onRemove()
        this.setMap(null);
    } else {
        this.setMap(this.map_);
    }
};


function BFFKml(kml_url, map) {
    this.url = kml_url;
    this.map_ = map;

    this.setMap(this.map_)
}

BFFKml.prototype.show = function() {
    console.log("Loading KML");
    this.setMap(this.map_);
};



// function setOpacity() {
//   var opacityStr = document.getElementById('opacity').value;
//   var opacity = parseFloat(opacityStr);
//   overlay.setOpacity(opacity);
// }

// <input type="text" id="opacity" value="0.2"></input>
// <input type="button" value="setOpacity" onclick="setOpacity();"></input>

google.maps.event.addDomListener(window, 'load', initialize);