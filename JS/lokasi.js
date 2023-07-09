const logo = document.querySelector(".logo");
const btn = document.querySelectorAll(".btn");
const btn_submit = document.querySelector(".btn-submit");
const body = document.querySelector("body");
const black_screen = document.querySelector(".black-screen");
const list_card = document.querySelector(".list-card");
let list_kota = "";
let jml_listkota = 0;
let lokasi;
let latitude = 0;
let longitude = 0;

logo.addEventListener("click", function () {
  document.location.href = "index.php";
});

document.getElementById("format").addEventListener("click", function () {
  document.getElementById("county").innerText = "DI " + this.value;
  document.getElementById("header-text-lokasi").innerText =
    "Lokasi fasilitas kesehatan di " + this.value;
  document.querySelector(".terdeteksi").style.display = "none";
  list_kota = "";
});

btn_submit.addEventListener("click", async function () {
  if (btn_submit.getAttribute("data-submit") === "no") {
    let Selected = document.getElementById("format").value;
    cariFaskes(Selected);
    body.style.overflow = "hidden";
    btn_submit.setAttribute("data-submit", "yes");
    black_screen.style.display = "inline-block";
    list_card.style.display = "inline-block";
  }
});

function cariFaskes(kota) {
  fetch(`https://kipi.covid19.go.id/api/get-faskes-vaksinasi?city=${kota}`)
    .then((respone) => respone.json())
    .then((respone) => {
      let result2 = respone.data;
      let filter = result2.filter((element) => element.detail.length == 4 && element.telp != null);
      document.querySelector(".map iframe").src = `https://maps.google.com/maps?q=${filter[0].latitude},${filter[0].longitude}&layer=c&z=17&sll=${filter[0].latitude},${filter[0].longitude}&cbp=13,276.3,0,0,0&cbll=${filter[0].latitude},${filter[0].longitude}&hl=en&ved=0CAoQ2wU&sa=X&output=svembed&layer=c`;
      filter.forEach(element => {
        list_kota += getInfo2(element);     
      });
      document.querySelector("list-lokasi").innerHTML = list_kota;
    })
    .catch((error) => {
      if (typeof error.json === "function") {
        error
          .json()
          .then((jsonError) => {
            console.log("Json error from API");
          })
          .catch((genericError) => {
            console.log("Generic error from API");
          });
      } else {
        console.log("Fetch error");
        console.log(error);
      }
    });
}

function getInfo2(element) {
  return `<div class="card-lokasi">
            <div class="header-caard">
                <h4>${element.nama}</h4>
                <p style="font-size: 14px;">${element.alamat}</p>
            </div>
            <div class="main-card">
                <div class="status-faskes">
                    <img src="img/checked.png" alt="" srcset="">
                    <p style="font-size: 14px;">${element.status}</p>
                </div>
                <div class="nomor-faskes">
                    <img src="img/telephone.png" alt="">
                    <p style="font-size: 14px;">${element.telp}</p>
                </div>
                <a href="https://www.google.com/maps?q=${element.latitude},${element.longitude}" target="blank" class="arahkan">
                    <img src="img/map.png" alt="" srcset="">
                    <p style="font-size: 14px;">arahkan</p>
                </a>
            </div>
            <button style="font-size: 15px;" class="btn-info" data-clicked="no" data-latitude="${element.latitude}" data-longitude="${element.longitude}">
                INFO SELENGKAPNYA
            </button>
            <div class="selengkapnya"">
              <div class="title-batch">
                <p>BATCH VAKSINASI</p>
              </div>
              <div class="batch">
                  <div class="petugas-publik">
                      <p>PETUGAS PUBLIK</p>
                  </div>
                  <div class="lansia">
                      <p>LANSIA</p>
                  </div>
                  <div class="tahap-3">
                      <p>TAHAP 3</p>
                  </div>
                  <div class="sdm-kesehatan">
                      <p>SDM KESEHATAN</p>
                  </div>
              </div>
              <div class="table-vaksinasi">
              <div class="title-table">
                  <p>Jumlah Total Vaksinasi</p>
              </div>
                  <table>
                          <tr>
                              <td>${element.detail[0].batch}</td>
                              <td>${element.detail[0].divaksin}</td>
                          </tr>
                          <tr style="background-color: #DDDDDD;">
                              <td>${element.detail[1].batch}</td>
                              <td>${element.detail[1].divaksin}</td>
                          </tr>
                          <tr>
                              <td>${element.detail[2].batch}</td>
                              <td>${element.detail[2].divaksin}</td>
                          </tr>
                          <tr style="background-color: #DDDDDD;" >
                              <td>${element.detail[3].batch}</td>
                              <td>${element.detail[3].divaksin}</td>
                          </tr>
                  </table>
              </div>
              <div class="table-dosis">
                      <div class="title-dosis">
                          <p>Total Dosis</p>
                      </div>
                  <table>
                          <thead>
                              <tr style="background-color: #DDDDDD;">
                                  <th>batch</th>
                                  <th>dosis 1</th>
                                  <th>dosis 2</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>${element.detail[0].batch}</td>
                                  <td>${element.detail[0].divaksin_1}</td>
                                  <td>${element.detail[0].divaksin_2}</td>
                              </tr>
                              <tr style="background-color: #DDDDDD;">
                                  <td>${element.detail[1].batch}</td>
                                  <td>${element.detail[1].divaksin_1}</td>
                                  <td>${element.detail[1].divaksin_2}</td>
                              </tr>
                              <tr>
                                  <td>${element.detail[2].batch}</td>
                                  <td>${element.detail[2].divaksin_1}</td>
                                  <td>${element.detail[2].divaksin_2}</td>
                              </tr>
                              <tr style="background-color: #DDDDDD;" >
                                  <td>${element.detail[3].batch}</td>
                                  <td>${element.detail[3].divaksin_1}</td>
                                  <td>${element.detail[3].divaksin_2}</td>
                              </tr>
                          </tbody>
                  </table>
            </div>
        </div>`;
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-info")) {
    if (e.target.dataset.clicked == "no") {
      e.srcElement.nextSibling.nextElementSibling.style.height = "650px";
      e.target.setAttribute("data-clicked", "yes");
      let src = `https://maps.google.com/maps?q=${e.target.getAttribute(
        "data-latitude"
      )},${e.target.getAttribute(
        "data-longitude"
      )}&layer=c&z=17&sll=${e.target.getAttribute(
        "data-latitude"
      )},${e.target.getAttribute(
        "data-longitude"
      )}&cbp=13,276.3,0,0,0&cbll=${e.target.getAttribute(
        "data-latitude"
      )},${e.target.getAttribute(
        "data-longitude"
      )}&hl=en&ved=0CAoQ2wU&sa=X&output=svembed&layer=c`;
      if (document.querySelector(".map iframe").src !== src) {
        document.querySelector(".map iframe").src = src;
      }
    } else {
      e.srcElement.nextSibling.nextElementSibling.style.height = "0px";
      e.target.setAttribute("data-clicked", "no");
    }
  } else if (e.target.classList.contains("card-lokasi")) {
  }
});

function kapitalgenerator(str) {
  let string = str.split("");
  let hurufdepan = string[0];
  let hurfubelakang = string.slice(1).join("");
  let satukata = hurufdepan + hurfubelakang.toLowerCase();

  return satukata;
}

document
  .getElementById("close-listcard")
  .addEventListener("click", function () {
    body.style.overflow = "auto";
    btn_submit.setAttribute("data-submit", "no");
    black_screen.style.display = "none";
    list_card.style.display = "none";
    list_kota = "";
    arr1 = "";
    arr2 = "";
    arr3 = "";
    document.querySelector("list-lokasi").innerHTML = "";
  });

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
  ambilNamaJalan(latitude, longitude);
}

function ambilNamaJalan(lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${lat},${lng}&country=indonesia&addressdetails=1`
  )
    .then((respone) => respone.json())
    .then((respone) => {
      lokasi = respone[0].address.county.toUpperCase();
      document.getElementById("county").innerText = "DI " + lokasi;
      document.getElementById("format").value = lokasi;
      document.querySelector(".terdeteksi").style.display = "flex";
      console.log(respone);
    });
}

document.getElementById("close-mesage").addEventListener("click", function () {
  document.querySelector(".terdeteksi").style.display = "none";
});
