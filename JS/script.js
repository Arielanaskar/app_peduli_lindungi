let latitude = 0;
let longitude = 0;
let pencarian = [];
let boxPencarian = [];

function ambilLokasi() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(tampilkanPosisi);
    }else {
        console.log("Browser anda tidak mendukung")
    }
}


function tampilkanPosisi(Postion) {
    latitude = Postion.coords.latitude;
    longitude = Postion.coords.longitude;
    document.querySelector('#frame').src = `https://maps.google.com/maps?q=${latitude},${longitude}&layer=c&z=17&sll=${latitude},${longitude}&cbp=13,276.3,0,0,0&cbll=${latitude},${longitude}&hl=en&ved=0CAoQ2wU&sa=X&output=svembed&layer=c`;
    document.getElementById('latitude').value = latitude;
    document.getElementById('longitude').value = longitude;
    ambilNamaJalan(latitude,longitude);
}


function ambilNamaJalan(lat,lng) {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${lat},${lng}&country=indonesia`)
    .then(respone => respone.json())
    .then(respone => {
        document.getElementById('lokasi').value = respone[0].display_name;
    })
}



// document.getElementById('lokasi').value = "<?php $lokasi='Jalan Tungkal V';  ?>";

// ("<?php $namaJalan ="+ 'jalan merdeka' +"?>");

// document.getElementById('lokasi').addEventListener('keyup', function() {
//     fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=3&q=${this.value}`)
//     .then(respone => respone.json())
//     .then(respone => {

//         document.querySelectorAll('#list-kota li').forEach(li => {
//             li.addEventListener('click', (e,i) => {
//                 document.getElementById('lokasi').value = e.target.innerText;
//             })
//         })
//     })
// })
