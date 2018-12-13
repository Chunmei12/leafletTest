//生成map
var mymap = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2h1bm1laSIsImEiOiJjanBsN3poZ28wOHo4NDhwOXVxdm5obmg4In0.iZj47jvFk12T6K35BtfI3Q'
}).addTo(mymap);

//marker
var marker = L.marker([51.5, -0.09]).addTo(mymap);
var content = '';

function setMarkerContent(txt) {  //function for setting marker text 
    content += txt;
    marker.bindPopup(content).openPopup();
}