let statemap = L.map('mapthree').setView([38, -97], 4)
let basemapUrl = ('https:{s}.tile.opentopomap.org/{z}/{x}/{y}.png')
L.tileLayer(basemapUrl).addTo(statemap)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  let stateStyle = function (feature) {
    let age = feature.properties.MED_AGE // get the current state's Median Age attribute
    let stateColor = 'gold' // let the initial color be a darker green
    if ( age < 37 ) { stateColor = 'purple' } // if the state's median age is less than the average, color it a lighter green
    if ( age > 40 ) { stateColor = 'white' }
    return {
      color: stateColor, //use the color variable above for the value
      weight: 2.5,
      fillOpacity: 0.075
    }
  }
  let onEachFeature = function (feature, layer) {
    let name = feature.properties.STATE_NAME
    let age = feature.properties.MED_AGE
    layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
  }
  let geojsonOptions = {
    style: stateStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, geojsonOptions).addTo(statemap)
})
