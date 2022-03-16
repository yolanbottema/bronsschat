var map = L.map('map',{scrollWheelZoom: false }).setView([52.717, 4.95], 10);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieW9sYW4iLCJhIjoiY2puYmk0ZXByMDF3bDN2cDZueGZqNDJsayJ9.g1Mg6-OOpeAcSC4ykvwCEw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);

// var markerwaard = L.geoJSON(markerwaard, {
//     style: function (features) {
//         return {
//             color: "#e61432",
//             weight: 5,
//             opacity: 1
//         };
//     }
// }).addTo(map).bindPopup("<b>Markerwaardweg</b><br>N240");

// var marker = L.marker([52.697, 5.15]).addTo(map);
// marker.bindPopup("<b>Vindplaats bronsschat</b>").openPopup();

var hildeIcon = L.icon({
    iconUrl: '../media/logo-h.svg',
    iconSize:     [38, 95], // size of the icon
});

L.marker([52.697, 5.15], {icon: hildeIcon}).addTo(map).bindPopup("<b>Vindplaats bronsschat</b>");