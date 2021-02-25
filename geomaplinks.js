//GoogleMap/////////////////////////////////////////////////////////
var GoogleMap       = 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}';
//'Google Maps'
var GoogleMapSat    = 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}';
//'Google Satellite'
var GoogleMapTer    = 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}';
//'Google Terrain' 
var GoogleMapTerHyb = 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}';
//'Google Terrain Hybrid'
var GoogleMapSatHyb = 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}';
//'Google Satellite Hybrid'

//Stamen/////////////////////////////////////////////////////////
var StamenTer       = 'http://tile.stamen.com/terrain/{z}/{x}/{y}.png';
//'Stamen Terrain', 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL', 
var StamenTonr      = 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'; 
//'Stamen Toner', 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL', 
var StamenTonrLight = 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png'; 
//'Stamen Toner Light', 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL', 
var StamenWater     = 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg';
//'Stamen Watercolor', 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL', 

//Wikimapia/////////////////////////////////////////////////////////
var WikimediaMap    = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';
//'Wikimedia Map', 'OpenStreetMap contributors, under ODbL', 
var WikimediaBike   = 'http://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png';
//'Wikimedia Hike Bike Map', 'OpenStreetMap contributors, under ODbL', 

//ESRI/////////////////////////////////////////////////////////
var EsriBoundaries  = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}' ;
//'Esri Boundaries Places',
var EsriGrayDark    =  'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}';
//'Esri Gray (dark)',
var EsriGrayLight   =  'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}' ;
//'Esri Gray (light)',
var EsriNatGeo      =  'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}' ;
//'Esri National Geographic',
var EsriOcean       = 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}';
//'Esri Ocean',
var EsriSat         = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
//'Esri Satellite',
var EsriStd         = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}' ;
//'Esri Standard',
var EsriTer         = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}' ;
//'Esri Terrain',
var EsriTransport   = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}' ;
//'Esri Transportation',
var EsriTopoWorld   =  'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';  
//'Esri Topo World',

//OpenStreetMap/////////////////////////////////////////////////////////
var OSMStd          = 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'; 
//'OpenStreetMap Standard', 'OpenStreetMap contributors, CC-BY-SA', 
var OSMHOT          = 'http://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'; 
//'OpenStreetMap H.O.T.', 'OpenStreetMap contributors, CC-BY-SA', 
var OSMMono         = 'http://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'; 
//'OpenStreetMap Monochrome', 'OpenStreetMap contributors, CC-BY-SA', 
var OpenTopo        = 'https://tile.opentopomap.org/{z}/{x}/{y}.png';
//'OpenTopoMap', 'Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)', 

//Strava/////////////////////////////////////////////////////////
var Strava          = 'https://heatmap-external-b.strava.com/tiles/all/bluered/{z}/{x}/{y}.png'; //'Strava All', 'OpenStreetMap contributors, CC-BY-SA', 
var StravaRun       = 'https://heatmap-external-b.strava.com/tiles/run/bluered/{z}/{x}/{y}.png?v=19';//'Strava Run', 'OpenStreetMap contributors, CC-BY-SA', 

//Open Weather/////////////////////////////////////////////////////////
var OpenWthrTemp    = 'http://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?APPID=1c3e4ef8e25596946ee1f3846b53218a'; //'Open Weather Map Temperature', 'Map tiles by OpenWeatherMap, under CC BY-SA 4.0', 
var OpenWthrCloud   = 'http://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?APPID=ef3c5137f6c31db50c4c6f1ce4e7e9dd';//'Open Weather Map Clouds', 'Map tiles by OpenWeatherMap, under CC BY-SA 4.0', 
var OpenWthrWind    = 'http://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?APPID=f9d0069aa69438d52276ae25c1ee9893'; //'Open Weather Map Wind Speed', 'Map tiles by OpenWeatherMap, under CC BY-SA 4.0', 

//Carto DB/////////////////////////////////////////////////////////
var CartoDBDark     = 'http://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';//  'CartoDb Dark Matter', 'Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.', 
var CartoDBPositron = 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'; //'CartoDb Positron', 'Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.', 

//Bing//////////////////////////////////////////////////////////
var bingearth       = 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1';//'Bing VirtualEarth',
