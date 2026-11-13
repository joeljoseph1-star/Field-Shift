const map=L.map('map').setView([6.355,116.83],6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
let marker=L.marker([6.355,116.83]).addTo(map).bindPopup('<b>Kudat, Sabah</b><br>Field selected.').openPopup();
map.on('click',e=>{marker.setLatLng(e.latlng);document.getElementById('location').textContent=`${e.latlng.lat.toFixed(3)}°, ${e.latlng.lng.toFixed(3)}°`;marker.bindPopup('<b>Selected field</b><br>Ready for analysis.').openPopup()});
document.getElementById('analyze').onclick=()=>{let l=document.getElementById('loading');l.style.display='block';setTimeout(()=>{l.style.display='none';document.getElementById('score').textContent=Math.floor(68+Math.random()*16)},800)};
