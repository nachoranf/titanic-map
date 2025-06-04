
const map = L.map('map').setView([50, -30], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const route = [
    [50.8998, -1.4044],    // Southampton
    [49.6333, -1.6167],    // Cherbourg
    [51.8498, -8.2944],    // Queenstown
    [41.7325, -49.9469]    // Última ubicación
];

const titanicIcon = L.icon({
    iconUrl: 'assets/titanic_icon.png',
    iconSize: [48, 48],
    iconAnchor: [24, 24],
});

const marker = L.marker(route[0], { icon: titanicIcon }).addTo(map);
const polyline = L.polyline(route, { color: 'blue', weight: 4 }).addTo(map);

const scroller = scrollama();
scroller
    .setup({
        step: ".step",
        offset: 0.6
    })
    .onStepEnter(response => {
        const stepIndex = +response.element.dataset.step;
        marker.setLatLng(route[stepIndex]);
        map.setView(route[stepIndex], 5);
    });
