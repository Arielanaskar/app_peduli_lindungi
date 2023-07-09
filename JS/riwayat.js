const list_perjalanan = document.querySelectorAll('#list-perjalanan');
const list_perjalanan_content = document.querySelector('.list-perjalanan ul');
let lokasi = [];
const map = document.getElementById('map');
const back = document.getElementById('back');
const details = document.querySelector('.details');
const namaJalan = document.getElementById('namaJalan');
const waktuCheckin = document.getElementById('waktuCheckin');
const waktuCheckout = document.getElementById('waktuCheckout');
const lamaPerjalanan = document.getElementById('lamaPerjalanan');
const filter_lokasi = document.getElementById("filter-lokasi");
const logo = document.querySelector(".logo");

logo.addEventListener("click", function () {
  document.location.href = "index.php";
});

text.forEach(e => {
    lokasi.push(Object.values(e));
});

window.onload = function(){
    map.src = `https://maps.google.com/maps?q=${lokasi[0][9]},${lokasi[0][10]}&ll${lokasi[0][9]},${lokasi[0][10]}&marker=${lokasi[0][9]},${lokasi[0][10]},${-40.755884},${73.978504}&spn=.0005,.0005&hl=en&output=embed`;  
    list_perjalanan.forEach((e, i) => {
        e.addEventListener('click', function() {
            console.log(this)
            details.style.animation = 'slide 0.5s linear 0.5s forwards';    
            let id = this.attributes['data-id'].value;
            lokasi.map(function(e){
                return e
            }).filter(function(e){
                if (e[0] === id){
                    let latitude = e[9]
                    let longitude = e[10]
                    map.src = `https://maps.google.com/maps?q=${latitude},${longitude}&ll${latitude},${longitude}&marker=${latitude},${longitude},${-40.755884},${73.978504}&spn=.0005,.0005&hl=en&output=embed`;
                    namaJalan.innerText = e[6]
                    waktuCheckin.innerText = e[5]
                    waktuCheckout.innerText = e[7]
                    lamaPerjalanan.innerText = e[8]
                }
            })
        })
    })
}



back.addEventListener('click', function(){
    details.style.animation = 'none';
})



$('#filter-lokasi').on('keyup', function(){
    $.ajax({
        url : 'search.php',
        type : 'get',
        data : {
            'keyword' : $('#filter-lokasi').val()
        },
        success : function(res) {
            $(".list-perjalanan ul").html(res)
        }
    })
})
