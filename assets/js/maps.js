var map = L.map('map', {
    center: [44.619261, -73.134766],
    zoom: 3,
});

L.tileLayer(`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ROK2DASDw4SDlqEDm9v4`, {
    attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
}).addTo(map);

var place1 = L.marker([40.785091, -73.134766]).bindPopup("Place 1"),
    place2 = L.marker([41.084045, -73.874245]).bindPopup("Place 2"),
    place3 = L.marker([40.754932, -73.984012]).bindPopup("Place 3");

var markers = new L.MarkerClusterGroup();
markers.addLayer(place1)
       .addLayer(place2)
       .addLayer(place3);
map.addLayer(markers);

