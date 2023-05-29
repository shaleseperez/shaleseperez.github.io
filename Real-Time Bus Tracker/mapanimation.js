// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic3BlcmV6ODkiLCJhIjoiY2xob3R1M24wMW8yajNtcHNrcTRrN2JpdCJ9.PC1rOhwRcF4MIcEzTfY46Q';



// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v12',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

map.addControl(new mapboxgl.NavigationControl());

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"

var marker = new mapboxgl.Marker({
  color: "#dc143c"
})
.setLngLat([-71.093729, 42.359244])
.addTo(map);

function markerHover(){
  marker.getElement().addEventListener('mouseenter' , () => {
    popup.addTo(map);
  });
}    
marker.getElement().addEventListener('mouseleave' , () => {
  popup.remove();
});

const markerHeight = 50;
const markerRadius = 10;
const linearOffset = 25;
const popupOffsets = {
    'top': [0, 0],
    'top-left': [0, 0],
    'top-right': [0, 0],
    'bottom': [0, -markerHeight],
    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'left': [markerRadius, (markerHeight - markerRadius) * -1],
    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
};
const popup = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
    .setLngLat([-71.093729, 42.359244])
    .setHTML("<h1>MIT</h1>" + 
    "<p>Massachusettes Institute of Technology, located in Boston, was founded in 1861</p>")
    .setMaxWidth("300px")
    .addTo(map);

markerHover();

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000)

}