const logo = document.querySelector(".logo");
const btn = document.querySelectorAll(".btn");
let latitude = 0;
let longitude = 0;

logo.addEventListener('click', function(){
    document.location.href = "index.php";
})

function ambilLokasi() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(tampilkanPosisi);
  } else {
    console.log("Browser anda tidak mendukung");
  }
}

function tampilkanPosisi(Postion) {
  latitude = Postion.coords.latitude;
  longitude = Postion.coords.longitude;
//   document.querySelector("#frame").src = `https://maps.google.com/maps?q=${latitude},${longitude}&layer=c&z=17&sll=${latitude},${longitude}&cbp=13,276.3,0,0,0&cbll=${latitude},${longitude}&hl=en&ved=0CAoQ2wU&sa=X&output=svembed&layer=c`;
  ambilNamaJalan(latitude, longitude);
}

function ambilNamaJalan(lat, lng) {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${lat},${lng}&country=indonesia&addressdetails=1`)
    .then((respone) => respone.json())
    .then((respone) => {
        document.getElementById("county").innerText = "DI " + respone[0].address.county.toUpperCase();
      console.log(respone);
    });
}

btn.forEach((e) => {
    e.addEventListener("click", function(){
        if (e.getAttribute("data-status") === "none") {
            e.setAttribute("data-status","clicked");
            e.style.backgroundColor = "#269AD7";
            e.style.color = "#fff";
        }else if(e.getAttribute("data-status") === "clicked") {
            e.setAttribute("data-status", "none");
            e.style.backgroundColor = "#c0c0c0";
            e.style.color = "#000";
        }
    })
})