let mapref = L.map(homemap).setView([45.13, -94.56], 5)
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png').addTo(mapref)
let Homebase = L.marker([45.2330, -94.9400]).addTo(mapref)
let StompingGrounds = L.polygon([
  [45.5579, -94.1632],
  [45.1224, -95.0487],
  [45.3011, -94.9442]
]).addTo(mapref);
StompingGrounds.bindPopup('Geral Area of Activity')
Homebase.bindPopup('Spawn Location')
var pointA = new L.LatLng(45.13, -94.56);
var pointB = new L.LatLng(30.4515, -91.1871);
var pointList = [pointA, pointB];

var firstpolyline = new L.Polyline(pointList, {
    color: 'purple',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1
});
firstpolyline.addTo(mapref);
firstpolyline.bindPopup('Direction of Change')
