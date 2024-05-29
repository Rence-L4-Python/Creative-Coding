// Unfinished concept, elements such as the title and legend are not made with javascript, but should be done so to add for interactivity
// geojson credits: https://github.com/faeldon/philippines-json-maps
// reference: https://leafletjs.com/examples/choropleth/
// reference 2: https://editor.p5js.org/skupin@sdsu.edu/sketches/UbKBbDqGh

let enrollmentData;
var currentSchoolType;
var rows;
var schoolType;
var map;

function preload() {
  enrollmentData = loadTable("enrollment.csv", "csv", "header");
}

function setup() {
  createCanvas(400,400);
  // this was printed to check the rows' arrays 0 and 19; the region name and the total number of students
  print(enrollmentData);

  // this is supposed to select colors depending on assigned ranges from values in enrollment.csv, however my lack of knowledge made it impossible for me to recreate in a short amount of time. as a concept, the colors are monochromatic -- the colors becoming darker as the value range becomes higher
  //gr1 = 219,000 - 485,000 = #ceff47 (car,caraga,region2)
  //gr2 = 489,000 - 566,000 = #a1c63c (region4,barmm,region9)
  //gr3 = 645,000 - 688,000 = #779130 (region1,region8,region12)
  //gr4 = 690,000 - 904,000 = #4f5e24 (region11,region10,region5)
  //gr5 = 1,041,000 - 1,232,000 = #2a3017 (region6,region7,ncr)
  //gr6 = 1,452,000 - 1,838,000 = #000000 (region3,region4)
  var colorScheme = {
    "Region I (Ilocos Region)": "#779130",
    "Region II (Cagayan Valley)": "#ceff47",
    "Region III (Central Luzon)": "#000000",
    "Region IV-A (CALABARZON)": "#a1c63c",
    "MIMAROPA Region": "#000000",
    "Region V (Bicol Region)": "#4f5e24",
    "Region VI (Western Visayas)": "#2a3017",
    "Region VII (Central Visayas)": "#2a3017",
    "Region VIII (Eastern Visayas)": "#779130",
    "Region IX (Zamboanga Peninsula)": "#a1c63c",
    "Region X (Northern Mindanao)": "#4f5e24",
    "Region XI (Davao Region)": "#4f5e24",
    "Region XII (SOCCSKSARGEN)": "#779130",
    "Region XIII (Caraga)": "#ceff47",
    "Bangsamoro Autonomous Region In Muslim Mindanao (BARMM)": "#a1c63c",
    "Cordillera Administrative Region (CAR)": "#ceff47",
    "National Capital Region (NCR)": "#2a3017",
  };

  // using leaflet.js for the interactive map
  map = L.map("mapid", {
    center: [0, 0],
    zoom: 6,
    maxZoom: 10,
    minZoom: 6,
    maxBounds: [
      [4, 116],
      [22, 128],
    ],
  });

  // custom tilemap appearance for leaflet.js
  L.tileLayer(
    "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    {}
  ).addTo(map);

  // this geojson layer draws the regions and separates them by color
  L.geoJSON(phData, {
    style: function (feature) {
      var regionName = feature.properties.adm1_en;
      var color = colorScheme[regionName];
      return {
        fillColor: color,
        weight: 1,
        opacity: 1,
        color: "white",
        fillOpacity: 0.7,
      };
    },
  }).addTo(map);
  
  // dropdown menu to select between the two school types
  // changing the schooltype would have changed the colors 
  schoolType = createSelect();
  schoolType.position(10, 770);
  schoolType.style("position: absolute; z-index: 1000");
  schoolType.option("Public School", "Public School");
  schoolType.option("Private School", "Private School");
}

