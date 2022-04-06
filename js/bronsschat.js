var map = L.map('map',{scrollWheelZoom: false }).setView([52.717, 4.95], 9);

var baselayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);



var markerwaardweg = L.geoJSON(markerwaardweg, {
    style: function (features) {
        return {
            color: "#e61432",
            weight: 5,
            opacity: 1
        };
    }
}).addTo(map).bindPopup("<b>Markerwaardweg</b><br>N240");


var marker = L.marker([52.697, 5.15]).addTo(map);
marker.bindPopup("<b>Vindplaats bronsschat</b>");

var hildeIcon = L.icon({
    iconUrl: '../media/logo-h.svg',
    iconSize:     [50, 50], // size of the icon
});

L.marker([52.544, 4.65], {icon: hildeIcon}).addTo(map).bindPopup("<b>Huis van Hilde</b>");

var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);


var punten = L.layerGroup([markerwaardweg, marker, hildeIcon]);

// foto

// var imageUrl = '../media/kaart.jpg',
//   imageBounds = [[52.169, 4.11], [53.190, 5.91]];

// L.imageOverlay(imageUrl, imageBounds).setOpacity(0).addTo(map);
// L.imageOverlay(imageUrl, imageBounds).bringToFront();

