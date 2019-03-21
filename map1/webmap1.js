let myMap = L.map('map1').setView([32.18, -99.14], 5)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(renameThis)
let minnepoint = L.marker([30, -90]).addTo(myMap)
let triangle = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(myMap);

triangle.bindPopup('A <em>polygon</em>')
minnepoint.bindPopup('A marker')
