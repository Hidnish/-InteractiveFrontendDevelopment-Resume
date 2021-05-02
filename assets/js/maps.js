var map = L.map('map').setView([46.619261, -33.134766], 2);

L.tileLayer(`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ROK2DASDw4SDlqEDm9v4`, {
    attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
}).addTo(map);

var planes = [
    ["Nice Place", 40.785091, -73.134766],
    ["Cool Place ", 41.084045, -73.874245],
    ["Lit Place", 40.754932, -73.984012]
];

for (var i = 0; i < planes.length; i++) {
    marker = new L.marker([planes[i][1], planes[i][2]])
        .bindPopup(planes[i][0]).openPopup()
        .addTo(map);
}


