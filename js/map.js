const coords = document.getElementById("coords");

var map = L.map('map', {
    crs: L.CRS.Simple,
    center: [-107, 62],
    zoom: 1,
    minZoom: -2,
    maxZoom: 3
});

var lat, lng;

map.addEventListener('mousemove', function(ev) {
   lat = ev.latlng.lat;
   lng = ev.latlng.lng;

   coords.innerHTML = 'x: ' + Math.round(lat) + ' </br> y: ' + Math.round(lng);

});
var banks = [{
    "lat": -124,
    "long": 50
}, {
    "lat": -164,
    "long": -66
}, {
    "lat": -1,
    "long": -319
}, {
    "lat": -364,
    "long": -221
}]

for (var i in banks) {
    var latlng = L.latLng({ lat: banks[i].lat, lng: banks[i].long });

    L.marker( latlng).bindTooltip("bank").addTo(map);
}


var cities = [{
        "html": "<div id=\"city-pin\">Middlefern</div>",
        "lat": -107,
        "long": 62
    }, {
        "html": "<div id=\"city-pin\">Celadon City</div>",
        "lat": -16,
        "long": 319
    }, {
        "html": "<div id=\"city-pin\">Hedgecastle</div>",
        "lat": 20,
        "long": -348
    }, {
        "html": "<div id=\"city-pin\">Banton</div>",
        "lat": -173,
        "long": -67
    }, {
        "html": "<div id=\"city-pin\">Summerton</div>",
        "lat": -337,
        "long": -160
    }, {
        "html": "<div id=\"city-pin\">High Cove</div>",
        "lat": -335,
        "long": -263
    }, {
        "html": "<div id=\"city-pin\">Ictirine City</div>",
        "lat": 216,
        "long": 10
    }, {
        "html": "<div id=\"city-pin\">Cairn</div>",
        "lat": 432,
        "long": 154
    }, {
        "html": "<div id=\"city-pin\">Anglham Castle</div>",
        "lat": -180,
        "long": 102
    }]

for (var i in cities) {
    var latlng = L.latLng({ lat: cities[i].lat, lng: cities[i].long });

    L.marker( latlng, {icon: L.divIcon({className: 'city-pin', html: cities[i].html, iconSize: [20,20]})} ).addTo(map);
}

var minorLocations = [{
    "html": "<div id=\"minor-location-pin\">Wastelands</div>",
    "lat": -202,
    "long": 300
}, {
    "html": "<div id=\"minor-location-pin\">Ned's Squirrel Ranch</div>",
    "lat": -108,
    "long": -17
}, {
    "html": "<div id=\"city-pin\">Stone Henge</div>",
    "lat": -247,
    "long": -92
}, {
    "html": "<div id=\"city-pin\">Percy's Mansion</div>",
    "lat": -291,
    "long": -62
}]

for (var i in minorLocations) {
    var latlng = L.latLng({ lat: minorLocations[i].lat, lng: minorLocations[i].long });

    L.marker( latlng, {icon: L.divIcon({className: 'minor-location-pin', html: minorLocations[i].html})} ).addTo(map);
}


//end stuff??
var bounds = [[-512,-512], [512,512]];
var image = L.imageOverlay('img/highspell-map2.png', bounds).addTo(map);
var overlay = L.imageOverlay('img/highspell-overlay.png', bounds).addTo(map);
var underground = L.imageOverlay('img/underground-map.png', bounds).addTo(map);
underground.bringToBack();
//^^^ need to create  button (near/on legend?) to do underground.bringToFront() to view underground map.
//  a state check should be created to be set to 1 for above ground and 2 for underground
//      this will be used to generate the markers for underground vs above ground

//map.fitBounds(bounds);
