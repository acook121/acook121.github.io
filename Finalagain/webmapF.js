
let maprefF = L.map(mapF).setView([31, -89], 5)
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png').addTo(maprefF)
L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
  layers: 'nexrad-n0r-900913',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(maprefF)
L.esri.dynamicMapLayer({
  url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_watches_time/MapServer'
}).addTo(maprefF)
L.esri.dynamicMapLayer({
  url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/obs_meteocean_insitu_sfc_time/MapServer'
}).addTo(maprefF)
L.esri.dynamicMapLayer({
  url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer'
}).addTo(maprefF)
L.esri.dynamicMapLayer({
  url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/mapoverlays_political/MapServer'
}).addTo(maprefF)
let astropoint = L.marker([29, -95]).addTo(maprefF)
astropoint.bindPopup('Home of the Astros!: Houston, TX')
let MWWpoint = L.marker([25, -80]).addTo(maprefF)
MWWpoint.bindPopup('#1 City Hit By Hurricanes: Miami, FL')
let keywest = L.marker([24, -81]).addTo(maprefF)
keywest.bindPopup('#2 City Hit By Hurricanes: Key West, FL')
let cape = L.marker([35, -75]).addTo(maprefF)
cape.bindPopup('#3 City Hit By Hurricanes: Cape Hatteras, NC')
let tampa = L.marker([27, -82]).addTo(maprefF)
tampa.bindPopup('#4 City Hit By Hurricanes: Tampa, FL')
let nola = L.marker([30, -90]).addTo(maprefF)
nola.bindPopup('# City Hit By Hurricanes: New Orleans, LA')
