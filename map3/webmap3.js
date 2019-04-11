let statemap = L.map('mapthree').setView([38, -97], 4)
let basemapUrl = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
L.tileLayer(basemapUrl).addTo(statemap)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  let stateStyle = function (feature) {
    let pop = feature.properties.POPULATION
    let stateColor = 'white'
    if ( pop > 1000000 ) { stateColor = 'purple' }
    if ( pop > 5000000 ) { stateColor = 'gold' }
    return {
      color: stateColor,
      weight: 3,
      fillOpacity: 0.075
    }
  }
  let onEachFeature = function (feature, layer) {
    let name = feature.properties.STATE_NAME
    let pop = feature.properties.POPULATION
    layer.bindPopup('Population ' + name + ': ' + pop)
  }
  let geojsonOptions = {
    style: stateStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, geojsonOptions).addTo(statemap)
})
